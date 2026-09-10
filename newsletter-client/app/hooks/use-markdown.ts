import useSWR from "swr";

import { fetchText } from "~/lib/api";

export function useMarkdown(url: string | null) {
  return useSWR(url, fetchText, {
    revalidateOnFocus: false,
    errorRetryCount: 2,
  });
}
