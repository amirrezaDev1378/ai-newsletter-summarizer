import useSWR from "swr";

import { fetchJson, listUrl, type SummaryList } from "~/lib/api";

export function useSummaryList() {
  return useSWR<SummaryList>(listUrl, fetchJson, {
    revalidateOnFocus: true,
    errorRetryCount: 3,
  });
}
