import type { Route } from "./+types/home";
import { NewsletterReader } from "~/components/newsletter-reader";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Newsletter Summaries" },
    {
      name: "description",
      content: "Read AI-summarized newsletters as a clean, installable app.",
    },
  ];
}

export default function Home() {
  return <NewsletterReader />;
}
