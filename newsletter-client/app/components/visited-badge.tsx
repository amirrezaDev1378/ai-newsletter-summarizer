import { useRef, type ReactNode } from "react";

import { Badge, badgeVariants } from "~/components/ui/badge";
import { cn } from "~/lib/utils";

const enterClass =
  "animate-in fade-in-0 duration-150 ease-out motion-safe:zoom-in-95";

type VisitedBadgeProps = {
  selected?: boolean;
  animateOnEnter?: boolean;
  onMarkUnread?: () => void;
};

export function VisitedBadge({
  selected = false,
  animateOnEnter = false,
  onMarkUnread,
}: VisitedBadgeProps): ReactNode {
  const className = cn(
    "tracking-wide uppercase",
    selected && "border-transparent bg-primary-foreground/15 text-primary-foreground",
    animateOnEnter && enterClass,
    onMarkUnread &&
      "cursor-pointer transition-transform duration-[160ms] ease-out active:scale-[0.97] motion-reduce:transition-none motion-reduce:active:scale-100",
  );

  if (onMarkUnread) {
    return (
      <button
        type="button"
        onClick={onMarkUnread}
        aria-label="Visited, mark as unread"
        className={cn(badgeVariants({ variant: "secondary" }), className)}
      >
        Visited
      </button>
    );
  }

  return (
    <Badge variant="secondary" className={className}>
      Visited
    </Badge>
  );
}

type ArticleVisitedBadgeProps = {
  articleKey: string;
  isVisited: boolean;
  onMarkUnread: () => void;
};

export function ArticleVisitedBadge({
  articleKey,
  isVisited,
  onMarkUnread,
}: ArticleVisitedBadgeProps): ReactNode {
  const seenKeyRef = useRef(articleKey);
  const wasVisitedOnOpenRef = useRef(isVisited);

  if (seenKeyRef.current !== articleKey) {
    seenKeyRef.current = articleKey;
    wasVisitedOnOpenRef.current = isVisited;
  }

  if (!isVisited) return null;

  return (
    <VisitedBadge
      animateOnEnter={!wasVisitedOnOpenRef.current}
      onMarkUnread={onMarkUnread}
    />
  );
}
