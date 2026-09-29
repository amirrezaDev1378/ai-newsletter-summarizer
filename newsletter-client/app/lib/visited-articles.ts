const VISITED_STORAGE_KEY = "newsletter-visited";
const VISITED_CHANGE_EVENT = "newsletter-visited-change";

const EMPTY_VISITED_IDS: readonly string[] = [];

let cachedRaw: string | null = null;
let cachedIds: readonly string[] = EMPTY_VISITED_IDS;

export function articleVisitKey(date: string, id: string): string {
  return `${date}/${id}`;
}

export function readVisitedIds(): readonly string[] {
  const raw = window.localStorage.getItem(VISITED_STORAGE_KEY);
  if (raw === cachedRaw) return cachedIds;

  if (raw === null) {
    cachedRaw = null;
    cachedIds = EMPTY_VISITED_IDS;
    return cachedIds;
  }

  const ids = parseVisitedIds(raw);
  cachedRaw = raw;
  cachedIds = ids;
  return cachedIds;
}

export function writeVisitedIds(ids: readonly string[]): void {
  const raw = JSON.stringify(ids);
  window.localStorage.setItem(VISITED_STORAGE_KEY, raw);
  cachedRaw = raw;
  cachedIds = ids;
  window.dispatchEvent(new Event(VISITED_CHANGE_EVENT));
}

export function subscribeVisitedIds(onStoreChange: () => void): () => void {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(VISITED_CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(VISITED_CHANGE_EVENT, onStoreChange);
  };
}

function parseVisitedIds(raw: string): readonly string[] {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error("Visited articles in local storage are not valid JSON", {
      cause: error,
    });
  }

  if (!isStringArray(parsed)) {
    throw new Error("Visited articles in local storage are invalid");
  }

  return parsed;
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((entry) => typeof entry === "string");
}
