import { useEffect, useState, type ReactNode } from "react";
import { NewspaperIcon, PanelLeftIcon, RefreshCwIcon } from "lucide-react";
import { useSearchParams } from "react-router";

import { MarkdownView } from "~/components/markdown-view";
import { SummaryList } from "~/components/summary-list";
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
import { useMarkdown } from "~/hooks/use-markdown";
import { useSummaryList } from "~/hooks/use-summary-list";
import { findSummary } from "~/lib/api";
import { formatGroupDate, titleFromMarkdown } from "~/lib/format";

export function NewsletterReader() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileOpen, setMobileOpen] = useState(false);
  const listQuery = useSummaryList();
  const selected = findSummary(
    listQuery.data,
    searchParams.get("date"),
    searchParams.get("id"),
  );
  const markdownQuery = useMarkdown(selected?.item.markdownLink ?? null);

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

  function selectSummary(date: string, id: string) {
    setSearchParams({ date, id });
    setMobileOpen(false);
  }

  const selectedTitle = markdownQuery.data
    ? titleFromMarkdown(markdownQuery.data, "Summary")
    : undefined;

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
          <SheetContent side="left" className="w-[min(20rem,90vw)] p-0">
            <SheetHeader className="border-b">
              <SheetTitle>Summaries</SheetTitle>
            </SheetHeader>
            <div className="overflow-y-auto p-4">
            <SidebarBody
              isLoading={listQuery.isLoading}
              error={listQuery.error}
              onRetry={() => void listQuery.mutate()}
              groups={listQuery.data}
              selectedDate={selected?.date}
              selectedId={selected?.item.id}
              selectedTitle={selectedTitle}
              onSelect={selectSummary}
            />
            </div>
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
            {formatGroupDate(selected.date)}
          </Badge>
        ) : null}

        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            void listQuery.mutate();
            void markdownQuery.mutate();
          }}
          disabled={listQuery.isValidating || markdownQuery.isValidating}
        >
          <RefreshCwIcon
            className={
              listQuery.isValidating || markdownQuery.isValidating
                ? "animate-spin"
                : undefined
            }
          />
          <span className="sr-only">Refresh</span>
        </Button>
      </header>

      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-72 shrink-0 overflow-y-auto border-r md:block">
          <div className="p-4">
            <p className="mb-4 px-1 text-sm font-medium">Archive</p>
            <SidebarBody
              isLoading={listQuery.isLoading}
              error={listQuery.error}
              onRetry={() => void listQuery.mutate()}
              groups={listQuery.data}
              selectedDate={selected?.date}
              selectedId={selected?.item.id}
              selectedTitle={selectedTitle}
              onSelect={selectSummary}
            />
          </div>
        </aside>

        <main className="min-w-0 flex-1 overflow-y-auto">
          {listQuery.error ? (
            <EmptyState
              title="Could not load the summary list"
              description="Check the list URL and try again."
              action={
                <Button onClick={() => void listQuery.mutate()}>Retry</Button>
              }
            />
          ) : listQuery.isLoading ? (
            <ReaderSkeleton />
          ) : !selected ? (
            <EmptyState
              title="No summaries yet"
              description="When markdown files are published, they will show up here."
            />
          ) : markdownQuery.error ? (
            <EmptyState
              title="Could not load this summary"
              description="The markdown file may have moved or is temporarily unavailable."
              action={
                <Button onClick={() => void markdownQuery.mutate()}>
                  Retry
                </Button>
              }
            />
          ) : markdownQuery.isLoading || !markdownQuery.data ? (
            <ReaderSkeleton />
          ) : (
            <div className="mx-auto w-full max-w-3xl px-4 py-8 md:px-8 md:py-10">
              <p className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {formatGroupDate(selected.date)}
              </p>
              <MarkdownView content={markdownQuery.data} />
              <Separator className="mt-10" />
              <p className="mt-4 text-xs text-muted-foreground">
                Source file {selected.item.id}.md
              </p>
            </div>
          )}
        </main>
      </div>
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
  onSelect,
}: {
  isLoading: boolean;
  error: unknown;
  onRetry: () => void;
  groups: ReturnType<typeof useSummaryList>["data"];
  selectedDate?: string;
  selectedId?: string;
  selectedTitle?: string;
  onSelect: (date: string, id: string) => void;
}) {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-3">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-14 w-full" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-14 w-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-3 text-sm">
        <p className="text-muted-foreground">Failed to load summaries.</p>
        <Button variant="outline" size="sm" onClick={onRetry}>
          Retry
        </Button>
      </div>
    );
  }

  if (!groups?.length) {
    return (
      <p className="px-1 text-sm text-muted-foreground">No summaries found.</p>
    );
  }

  return (
    <SummaryList
      groups={groups}
      selectedDate={selectedDate}
      selectedId={selectedId}
      selectedTitle={selectedTitle}
      onSelect={onSelect}
    />
  );
}

function ReaderSkeleton() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-4 px-4 py-8 md:px-8 md:py-10">
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
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex h-full items-center justify-center p-8">
      <div className="max-w-sm space-y-3 text-center">
        <h2 className="font-heading text-lg font-medium">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
        {action}
      </div>
    </div>
  );
}
