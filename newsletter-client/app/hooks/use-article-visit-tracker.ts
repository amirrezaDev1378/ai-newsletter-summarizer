import { useEffect, type RefObject } from "react";

const VISITED_SCROLL_THRESHOLD_PX = 100;
const VISITED_DWELL_MS = 50_000;

type UseArticleVisitTrackerArgs = {
  articleKey: string | null;
  enabled: boolean;
  isVisited: boolean;
  suppressed: boolean;
  markVisited: (key: string) => void;
  scrollRootRef: RefObject<HTMLElement | null>;
  endRef: RefObject<HTMLElement | null>;
};

export function useArticleVisitTracker({
  articleKey,
  enabled,
  isVisited,
  suppressed,
  markVisited,
  scrollRootRef,
  endRef,
}: UseArticleVisitTrackerArgs): void {
  useEffect(() => {
    if (!enabled || !articleKey || isVisited || suppressed) return;

    const root = scrollRootRef.current;
    const target = endRef.current;
    if (!root || !target) return;

    const key = articleKey;

    const observer = new IntersectionObserver(
      (entries) => {
        const reachedEnd = entries.some((entry) => entry.isIntersecting);
        if (!reachedEnd) return;
        markVisited(key);
      },
      {
        root,
        rootMargin: `0px 0px ${VISITED_SCROLL_THRESHOLD_PX}px 0px`,
        threshold: 0,
      },
    );
    observer.observe(target);

    const timeoutId = window.setTimeout(() => {
      markVisited(key);
    }, VISITED_DWELL_MS);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeoutId);
    };
  }, [
    articleKey,
    enabled,
    endRef,
    isVisited,
    markVisited,
    scrollRootRef,
    suppressed,
  ]);
}
