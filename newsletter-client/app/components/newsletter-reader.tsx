import { useEffect, useLayoutEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { NewspaperIcon, PanelLeftIcon, RefreshCwIcon } from "lucide-react";
import { useSearchParams } from "react-router";

import { ArticlePager, type ArticleDirection } from "~/components/article-pager";
import { MarkdownView } from "~/components/markdown-view";
import { SummaryList } from "~/components/summary-list";
import { ArticleVisitedBadge } from "~/components/visited-badge";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Skeleton } from "~/components/ui/skeleton";
import { useArticleVisitTracker } from "~/hooks/use-article-visit-tracker";
import { useMarkdown } from "~/hooks/use-markdown";
import { useSummaryList } from "~/hooks/use-summary-list";
import { useVisitedArticles } from "~/hooks/use-visited-articles";
import { adjacentSummaries, findSummary, type SelectedSummary } from "~/lib/api";
import { formatGroupDate, titleFromMarkdown } from "~/lib/format";
import { articleVisitKey } from "~/lib/visited-articles";

const REFRESH_INDICATOR_MIN_MS = 300;

export function NewsletterReader() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pendingDirection, setPendingDirection] = useState<ArticleDirection | null>(null);
  const [holdForKey, setHoldForKey] = useState<string | null>(null);
  const holdRef = useRef<string | null>(null);
  const mainRef = useRef<HTMLElement>(null);
  const articleEndRef = useRef<HTMLDivElement>(null);
  const listQuery = useSummaryList();
  const { isVisited, markVisited, markUnread } = useVisitedArticles();
  const selected = findSummary(
    listQuery.data,
    searchParams.get("date"),
    searchParams.get("id"),
  );
  const markdownQuery = useMarkdown(selected?.item.markdownLink ?? null);
  const articleKey = selected
    ? articleVisitKey(selected.date, selected.item.id)
    : null;
  const isCurrentVisited = selected
    ? isVisited(selected.date, selected.item.id)
    : false;
  const isArticleLoading = Boolean(
    selected &&
      !markdownQuery.error &&
      (markdownQuery.isLoading || !markdownQuery.data),
  );
  const neighbors = selected
    ? adjacentSummaries(listQuery.data, selected.date, selected.item.id)
    : {};

  useEffect(() => {
    if (!selected) return;
    if (
      searchParams.get("date") === selected.date &&
      searchParams.get("id") === selected.item.id
    ) {
      return;
    }

    setSearchParams(
      { date: selected.date, id: selected.item.id },
      { replace: true },
    );
  }, [searchParams, selected, setSearchParams]);

  if (holdForKey !== null && holdForKey !== articleKey) {
    holdRef.current = null;
    setHoldForKey(null);
  }

  useLayoutEffect(() => {
    mainRef.current?.scrollTo({ top: 0 });
  }, [articleKey]);

  useArticleVisitTracker({
    articleKey,
    enabled: Boolean(markdownQuery.data) && !markdownQuery.error,
    isVisited: isCurrentVisited,
    suppressed: holdRef.current === articleKey || holdForKey === articleKey,
    markVisited,
    scrollRootRef: mainRef,
    endRef: articleEndRef,
  });

  function selectSummary(date: string, id: string) {
    setPendingDirection(null);
    setSearchParams({ date, id });
    setMobileOpen(false);
  }

  function openNeighbor(article: SelectedSummary, direction: ArticleDirection) {
    setPendingDirection(direction);
    setSearchParams({ date: article.date, id: article.item.id });
    setMobileOpen(false);
  }

  function markCurrentUnread() {
    if (!articleKey) return;
    holdRef.current = articleKey;
    setHoldForKey(articleKey);
    markUnread(articleKey);
  }

  async function refresh() {
    setIsRefreshing(true);
    const startedAt = performance.now();
    try {
      await Promise.allSettled([listQuery.mutate(), markdownQuery.mutate()]);
    } finally {
      const remaining = REFRESH_INDICATOR_MIN_MS - (performance.now() - startedAt);
      if (remaining > 0) await wait(remaining);
      setIsRefreshing(false);
    }
  }

  const selectedTitle = markdownQuery.data
    ? titleFromMarkdown(markdownQuery.data, "Summary")
    : undefined;
  const activeDirection = isArticleLoading ? pendingDirection : null;

  return (
    <div className="flex h-dvh flex-col bg-background">
      <header className="flex h-14 shrink-0 items-center gap-3 border-b px-3 md:px-4">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" className="md:hidden" />}
          >
            <PanelLeftIcon />
            <span className="sr-only">Open summaries</span>
          </SheetTrigger>
          <SheetContent side="left" className="w-[min(20rem,90vw)] gap-0 p-0">
            <SheetHeader className="shrink-0 border-b">
              <SheetTitle>Summaries</SheetTitle>
            </SheetHeader>
            <SidebarSlot>
              <SidebarBody
                isLoading={listQuery.isLoading}
                error={listQuery.error}
                onRetry={() => void listQuery.mutate()}
                groups={listQuery.data}
                selectedDate={selected?.date}
                selectedId={selected?.item.id}
                selectedTitle={selectedTitle}
                isVisited={isVisited}
                onSelect={selectSummary}
              />
            </SidebarSlot>
          </SheetContent>
        </Sheet>

        <div className="flex min-w-0 flex-1 items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <NewspaperIcon className="size-4" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">Newsletter Summaries</p>
            <p className="truncate text-xs text-muted-foreground">
              {selected ? formatGroupDate(selected.date) : "AI-condensed briefings"}
            </p>
          </div>
        </div>

        {selected ? (
          <Badge variant="outline" className="hidden sm:inline-flex">
            {new Date().toLocaleDateString(undefined, {
              weekday: "short",
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </Badge>
        ) : null}

        <Button
          variant="ghost"
          size="icon"
          onClick={() => void refresh()}
          disabled={isRefreshing}
        >
          <RefreshCwIcon
            className={
              isRefreshing ? "animate-spin motion-reduce:animate-pulse" : undefined
            }
          />
          <span className="sr-only">Refresh</span>
        </Button>
      </header>

      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-72 shrink-0 flex-col border-r md:flex">
          <p className="shrink-0 px-4 pt-4 pb-3 text-sm font-medium">Archive</p>
          <SidebarSlot>
            <SidebarBody
              isLoading={listQuery.isLoading}
              error={listQuery.error}
              onRetry={() => void listQuery.mutate()}
              groups={listQuery.data}
              selectedDate={selected?.date}
              selectedId={selected?.item.id}
              selectedTitle={selectedTitle}
              isVisited={isVisited}
              onSelect={selectSummary}
            />
          </SidebarSlot>
        </aside>

        <main ref={mainRef} className="min-w-0 flex-1 overflow-y-auto">
          {listQuery.error ? (
            <EmptyState
              fill
              title="Could not load the summary list"
              description="Check the list URL and try again."
              action={
                <Button onClick={() => void listQuery.mutate()}>Retry</Button>
              }
            />
          ) : listQuery.isLoading ? (
            <ReaderFrame>
              <ReaderSkeleton />
            </ReaderFrame>
          ) : !selected || !articleKey ? (
            <EmptyState
              fill
              title="No summaries yet"
              description="When markdown files are published, they will show up here."
            />
          ) : (
            <ReaderFrame>
              {markdownQuery.error ? (
                <EmptyState
                  title="Could not load this summary"
                  description="The markdown file may have moved or is temporarily unavailable."
                  action={
                    <Button onClick={() => void markdownQuery.mutate()}>
                      Retry
                    </Button>
                  }
                />
              ) : null}
              {isArticleLoading ? <ReaderSkeleton /> : null}
              {markdownQuery.data ? (
                <ArticleBody
                  date={selected.date}
                  articleKey={articleKey}
                  isVisited={isCurrentVisited}
                  content={markdownQuery.data}
                  endRef={articleEndRef}
                  onMarkUnread={markCurrentUnread}
                />
              ) : null}
              <div className="mt-10">
                <ArticlePager
                  previous={neighbors.previous}
                  next={neighbors.next}
                  pendingDirection={activeDirection}
                  isLoading={isArticleLoading}
                  onOpen={openNeighbor}
                />
              </div>
              {markdownQuery.data ? (
                <ArticleMeta sourceId={selected.item.id} />
              ) : null}
            </ReaderFrame>
          )}
        </main>
      </div>
    </div>
  );
}

function ArticleBody({
  date,
  articleKey,
  isVisited,
  content,
  endRef,
  onMarkUnread,
}: {
  date: string;
  articleKey: string;
  isVisited: boolean;
  content: string;
  endRef: RefObject<HTMLDivElement | null>;
  onMarkUnread: () => void;
}): ReactNode {
  return (
    <>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {formatGroupDate(date)}
        </p>
        <ArticleVisitedBadge
          articleKey={articleKey}
          isVisited={isVisited}
          onMarkUnread={onMarkUnread}
        />
      </div>
      <MarkdownView content={content} />
      <div ref={endRef} className="h-px" aria-hidden />
    </>
  );
}

function ArticleMeta({ sourceId }: { sourceId: string }): ReactNode {
  return (
    <>
      <Separator className="mt-10" />
      <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>Source file {sourceId}.md</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/amirrezaDev1378"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://github.com/amirrezaDev1378/ai-newsletter-summarizer"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Project Repo
          </a>
        </div>
      </div>
    </>
  );
}

function SidebarSlot({ children }: { children: ReactNode }): ReactNode {
  return (
    <div className="relative min-h-0 flex-1">
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}

function SidebarBody({
  isLoading,
  error,
  onRetry,
  groups,
  selectedDate,
  selectedId,
  selectedTitle,
  isVisited,
  onSelect,
}: {
  isLoading: boolean;
  error: unknown;
  onRetry: () => void;
  groups: ReturnType<typeof useSummaryList>["data"];
  selectedDate?: string;
  selectedId?: string;
  selectedTitle?: string;
  isVisited: (date: string, id: string) => boolean;
  onSelect: (date: string, id: string) => void;
}): ReactNode {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-3 px-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-14 w-full" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-14 w-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-3 px-4 text-sm">
        <p className="text-muted-foreground">Failed to load summaries.</p>
        <Button variant="outline" size="sm" onClick={onRetry}>
          Retry
        </Button>
      </div>
    );
  }

  if (!groups) {
    throw new Error("Summary list is missing");
  }

  if (groups.length === 0) {
    return (
      <p className="px-4 text-sm text-muted-foreground">No summaries found.</p>
    );
  }

  return (
    <SummaryList
      groups={groups}
      selectedDate={selectedDate}
      selectedId={selectedId}
      selectedTitle={selectedTitle}
      isVisited={isVisited}
      onSelect={onSelect}
    />
  );
}

function ReaderFrame({ children }: { children: ReactNode }): ReactNode {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 md:px-8 md:py-10">
      {children}
    </div>
  );
}

function ReaderSkeleton(): ReactNode {
  return (
    <div className="space-y-4">
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-10 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-32 w-full" />
    </div>
  );
}

function EmptyState({
  title,
  description,
  action,
  fill = false,
}: {
  title: string;
  description: string;
  action?: ReactNode;
  fill?: boolean;
}): ReactNode {
  return (
    <div className={fill ? "flex h-full items-center justify-center p-8" : "py-8"}>
      <div className="mx-auto max-w-sm space-y-3 text-center">
        <h2 className="font-heading text-lg font-medium">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
        {action}
      </div>
    </div>
  );
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}
