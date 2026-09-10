import axios from "axios";

export type SummaryItem = {
  id: string;
  markdownLink: string;
};

export type SummaryGroup = {
  date: string;
  items: SummaryItem[];
};

export type SummaryList = SummaryGroup[];

const DEFAULT_LIST_URL =
  "https://raw.githubusercontent.com/amirrezaDev1378/ai-newsletter-summarizer/refs/heads/master/api/list.json";

function resolveListUrl(value: string | undefined) {
  const trimmed = (value || DEFAULT_LIST_URL).trim().replace(/\/+$/, "");
  if (trimmed.endsWith(".json")) return trimmed;
  return `${trimmed}/list.json`;
}

export const listUrl = resolveListUrl(
  import.meta.env.VITE_PUBLIC_API_BASE_URL,
);

export const api = axios.create({
  timeout: 20_000,
});

export async function fetchJson<T>(url: string) {
  const { data } = await api.get<T>(url);
  return data;
}

export async function fetchText(url: string) {
  const { data } = await api.get<string>(url, {
    responseType: "text",
    transformResponse: [(value) => value],
  });
  return data;
}

export function findSummary(
  list: SummaryList | undefined,
  date: string | null,
  id: string | null,
) {
  if (!list?.length) return undefined;

  if (date && id) {
    const match = list
      .find((group) => group.date === date)
      ?.items.find((item) => item.id === id);
    if (match) return { date, item: match };
  }

  if (id) {
    for (const group of list) {
      const item = group.items.find((entry) => entry.id === id);
      if (item) return { date: group.date, item };
    }
  }

  const firstGroup = list[0];
  const firstItem = firstGroup?.items[0];
  if (!firstGroup || !firstItem) return undefined;
  return { date: firstGroup.date, item: firstItem };
}
