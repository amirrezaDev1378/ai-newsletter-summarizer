import useSWR from "swr";

import { fetchJson, listUrl, type SummaryList } from "~/lib/api";

export function useSummaryList() {
  return useSWR<SummaryList>(
    listUrl,
    async (url) => {
      const data = await fetchJson<SummaryList>(url);
      if (Array.isArray(data)) {
        data.sort((a, b) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateB - dateA;
        });
      }
      return data;
    },
    {
      revalidateOnFocus: true,
      errorRetryCount: 3,
    },
  );
}
