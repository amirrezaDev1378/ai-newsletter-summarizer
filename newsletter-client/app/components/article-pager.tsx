import { ChevronLeftIcon, ChevronRightIcon, LoaderCircleIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "~/components/ui/button";
import { formatGroupDate, shortId } from "~/lib/format";
import type { SelectedSummary } from "~/lib/api";
import { cn } from "~/lib/utils";

export type ArticleDirection = "previous" | "next";

type ArticlePagerProps = {
  previous?: SelectedSummary;
  next?: SelectedSummary;
  pendingDirection: ArticleDirection | null;
  isLoading: boolean;
  onOpen: (article: SelectedSummary, direction: ArticleDirection) => void;
};

const pressClass =
  "h-auto min-h-14 w-full gap-3 px-3 py-3 transition-transform duration-[160ms] ease-out active:translate-y-0 active:scale-[0.97] motion-reduce:transition-none motion-reduce:active:scale-100";

export function ArticlePager({
  previous,
  next,
  pendingDirection,
  isLoading,
  onOpen,
}: ArticlePagerProps): ReactNode {
  return (
    <nav className="grid grid-cols-1 gap-3 sm:grid-cols-2" aria-label="More articles">
      <PagerButton
        direction="previous"
        article={previous}
        isLoading={isLoading}
        isPending={pendingDirection === "previous"}
        onOpen={onOpen}
      />
      <PagerButton
        direction="next"
        article={next}
        isLoading={isLoading}
        isPending={pendingDirection === "next"}
        onOpen={onOpen}
      />
    </nav>
  );
}

function PagerButton({
  direction,
  article,
  isLoading,
  isPending,
  onOpen,
}: {
  direction: ArticleDirection;
  article?: SelectedSummary;
  isLoading: boolean;
  isPending: boolean;
  onOpen: (article: SelectedSummary, direction: ArticleDirection) => void;
}): ReactNode {
  const isNext = direction === "next";
  const label = directionLabel(direction, isPending);

  return (
    <Button
      type="button"
      variant="outline"
      disabled={!article || isLoading}
      aria-busy={isPending}
      onClick={() => {
        if (!article) return;
        onOpen(article, direction);
      }}
      className={cn(
        pressClass,
        isNext
          ? "justify-between text-left sm:justify-end sm:text-right"
          : "justify-start text-left",
      )}
    >
      {isNext ? null : <PagerIcon direction={direction} isPending={isPending} />}
      <span className="min-w-0">
        <span className="block text-xs font-medium text-muted-foreground">{label}</span>
        <span className="block truncate text-sm font-medium">
          {destinationLabel(article, emptyDestination(direction))}
        </span>
      </span>
      {isNext ? <PagerIcon direction={direction} isPending={isPending} /> : null}
    </Button>
  );
}

function PagerIcon({
  direction,
  isPending,
}: {
  direction: ArticleDirection;
  isPending: boolean;
}): ReactNode {
  if (isPending) {
    return (
      <LoaderCircleIcon
        className="animate-spin motion-reduce:animate-pulse"
        aria-hidden
      />
    );
  }

  if (direction === "previous") {
    return <ChevronLeftIcon aria-hidden />;
  }

  return <ChevronRightIcon aria-hidden />;
}

function directionLabel(direction: ArticleDirection, isPending: boolean): string {
  if (isPending) return "Loading";
  if (direction === "previous") return "Previous";
  return "Next";
}

function emptyDestination(direction: ArticleDirection): string {
  if (direction === "previous") return "No previous article";
  return "No next article";
}

function destinationLabel(
  article: SelectedSummary | undefined,
  emptyLabel: string,
): string {
  if (!article) return emptyLabel;
  return `${formatGroupDate(article.date)} · ${shortId(article.item.id)}`;
}
