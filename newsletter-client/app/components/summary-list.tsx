import { useLayoutEffect, useMemo, useRef, type ReactNode } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

import { VisitedBadge } from "~/components/visited-badge";
import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";
import { formatGroupDate, shortId } from "~/lib/format";
import type { SummaryGroup } from "~/lib/api";

type SummaryListProps = {
  groups: SummaryGroup[];
  selectedDate?: string;
  selectedId?: string;
  selectedTitle?: string;
  isVisited: (date: string, id: string) => boolean;
  onSelect: (date: string, id: string) => void;
};

type SummaryRow =
  | {
      kind: "group";
      key: string;
      date: string;
      count: number;
    }
  | {
      kind: "article";
      key: string;
      date: string;
      id: string;
    };

const GROUP_ROW_ESTIMATE_PX = 44;
const ARTICLE_ROW_ESTIMATE_PX = 64;
const ROW_GAP_PX = 4;

export function SummaryList({
  groups,
  selectedDate,
  selectedId,
  selectedTitle,
  isVisited,
  onSelect,
}: SummaryListProps): ReactNode {
  const scrollRef = useRef<HTMLDivElement>(null);
  const rows = useMemo(() => buildSummaryRows(groups), [groups]);
  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: (index) => estimateRowSize(rows[index], index),
    overscan: 8,
    gap: ROW_GAP_PX,
    paddingEnd: 16,
    scrollPaddingStart: 8,
    scrollPaddingEnd: 12,
    getItemKey: (index) => {
      const row = rows[index];
      if (!row) throw new Error(`Summary row ${index} is missing`);
      return row.key;
    },
    directDomUpdates: true,
  });

  const selectedIndex = rows.findIndex((row) => {
    if (row.kind !== "article") return false;
    return row.date === selectedDate && row.id === selectedId;
  });

  useLayoutEffect(() => {
    if (selectedIndex < 0) return;
    const element = scrollRef.current;
    if (!element) return;

    let frame = 0;
    let attempts = 0;

    function scrollToSelected(scrollElement: HTMLDivElement) {
      if (scrollElement.clientHeight === 0) return;
      virtualizer.scrollToIndex(selectedIndex, { align: "auto" });
      attempts += 1;
    }

    scrollToSelected(element);
    frame = window.requestAnimationFrame(() => {
      scrollToSelected(element);
    });

    const observer = new ResizeObserver(() => {
      if (attempts >= 2) return;
      scrollToSelected(element);
    });
    observer.observe(element);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [selectedIndex, virtualizer]);

  return (
    <div
      ref={scrollRef}
      className="h-full overflow-y-auto [overflow-anchor:none]"
    >
      <div ref={virtualizer.containerRef} className="relative w-full">
        {virtualizer.getVirtualItems().map((virtualRow) => {
          const row = rows[virtualRow.index];
          if (!row) {
            throw new Error(`Summary row ${virtualRow.index} is missing`);
          }

          return (
            <div
              key={virtualRow.key}
              data-index={virtualRow.index}
              ref={virtualizer.measureElement}
              className="absolute top-0 left-0 w-full px-4"
            >
              <SummaryRowView
                row={row}
                isFirst={virtualRow.index === 0}
                selectedDate={selectedDate}
                selectedId={selectedId}
                selectedTitle={selectedTitle}
                isVisited={isVisited}
                onSelect={onSelect}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SummaryRowView({
  row,
  isFirst,
  selectedDate,
  selectedId,
  selectedTitle,
  isVisited,
  onSelect,
}: {
  row: SummaryRow;
  isFirst: boolean;
  selectedDate?: string;
  selectedId?: string;
  selectedTitle?: string;
  isVisited: (date: string, id: string) => boolean;
  onSelect: (date: string, id: string) => void;
}): ReactNode {
  if (row.kind === "group") {
    return <SummaryGroupHeading date={row.date} count={row.count} isFirst={isFirst} />;
  }

  const selected = row.date === selectedDate && row.id === selectedId;

  return (
    <SummaryArticleButton
      date={row.date}
      id={row.id}
      title={selected ? selectedTitle : undefined}
      selected={selected}
      visited={isVisited(row.date, row.id)}
      onSelect={onSelect}
    />
  );
}

function SummaryGroupHeading({
  date,
  count,
  isFirst,
}: {
  date: string;
  count: number;
  isFirst: boolean;
}): ReactNode {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2 px-3",
        isFirst ? "pt-1" : "pt-4",
      )}
    >
      <h2 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {formatGroupDate(date)}
      </h2>
      <Badge variant="secondary">{count}</Badge>
    </div>
  );
}

function SummaryArticleButton({
  date,
  id,
  title,
  selected,
  visited,
  onSelect,
}: {
  date: string;
  id: string;
  title?: string;
  selected: boolean;
  visited: boolean;
  onSelect: (date: string, id: string) => void;
}): ReactNode {
  return (
    <button
      type="button"
      aria-current={selected ? "page" : undefined}
      onClick={() => onSelect(date, id)}
      className={cn(
        "w-full rounded-lg px-3 py-2 text-left",
        "transition-[transform,background-color,color] duration-[160ms] ease-out",
        "active:scale-[0.97] motion-reduce:transition-colors motion-reduce:active:scale-100",
        selected ? "bg-primary text-primary-foreground" : "hover:bg-muted",
      )}
    >
      <span className="flex items-start gap-2">
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-medium line-clamp-2">
            {title ?? "Summary"}
          </span>
          <span
            className={cn(
              "mt-0.5 block font-mono text-xs",
              selected ? "text-primary-foreground/70" : "text-muted-foreground",
            )}
          >
            {shortId(id)}
          </span>
        </span>
        {visited ? <VisitedBadge selected={selected} /> : null}
      </span>
    </button>
  );
}

function buildSummaryRows(groups: SummaryGroup[]): SummaryRow[] {
  return groups.flatMap((group) => {
    const header: SummaryRow = {
      kind: "group",
      key: `group:${group.date}`,
      date: group.date,
      count: group.items.length,
    };
    const articles = group.items.map((item) => ({
      kind: "article" as const,
      key: `article:${group.date}/${item.id}`,
      date: group.date,
      id: item.id,
    }));
    return [header, ...articles];
  });
}

function estimateRowSize(row: SummaryRow | undefined, index: number): number {
  if (!row) throw new Error(`Summary row ${index} is missing`);
  if (row.kind === "article") return ARTICLE_ROW_ESTIMATE_PX;
  if (index === 0) return 28;
  return GROUP_ROW_ESTIMATE_PX;
}
