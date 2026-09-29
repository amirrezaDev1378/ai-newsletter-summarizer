import { useCallback, useMemo, useSyncExternalStore } from "react";

import {
  articleVisitKey,
  readVisitedIds,
  subscribeVisitedIds,
  writeVisitedIds,
} from "~/lib/visited-articles";

const SERVER_VISITED_IDS: readonly string[] = [];

export function useVisitedArticles() {
  const ids = useSyncExternalStore(
    subscribeVisitedIds,
    readVisitedIds,
    getServerVisitedIds,
  );
  const visited = useMemo(() => new Set(ids), [ids]);

  const markVisited = useCallback((key: string) => {
    const current = readVisitedIds();
    if (current.includes(key)) return;
    writeVisitedIds([...current, key]);
  }, []);

  const markUnread = useCallback((key: string) => {
    const current = readVisitedIds();
    if (!current.includes(key)) return;
    writeVisitedIds(current.filter((entry) => entry !== key));
  }, []);

  const isVisited = useCallback(
    (date: string, id: string) => visited.has(articleVisitKey(date, id)),
    [visited],
  );

  return { isVisited, markVisited, markUnread };
}

function getServerVisitedIds(): readonly string[] {
  return SERVER_VISITED_IDS;
}
