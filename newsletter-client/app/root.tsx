import { NewspaperIcon } from "lucide-react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { SWRConfig } from "swr";

import type { Route } from "./+types/root";
import { ColorScheme } from "~/components/color-scheme";
import { PwaRegister } from "~/components/pwa-register";
import { Skeleton } from "~/components/ui/skeleton";
import "./app.css";

const colorSchemeScript = `(function(){try{var dark=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",dark);}catch(e){}})();`;

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: `${import.meta.env.BASE_URL}favicon.ico` },
  {
    rel: "apple-touch-icon",
    href: `${import.meta.env.BASE_URL}icons/apple-touch-icon.png`,
  },
  { rel: "manifest", href: `${import.meta.env.BASE_URL}manifest.webmanifest` },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#18181b" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Summaries" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <script dangerouslySetInnerHTML={{ __html: colorSchemeScript }} />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return (
    <div className="flex h-dvh flex-col bg-background">
      <header className="flex h-14 shrink-0 items-center gap-3 border-b px-4">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <NewspaperIcon className="size-4" />
        </div>
        <div>
          <p className="text-sm font-medium">Newsletter Summaries</p>
          <p className="text-xs text-muted-foreground">AI-condensed briefings</p>
        </div>
      </header>
      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-72 shrink-0 border-r p-4 md:block">
          <div className="flex flex-col gap-3">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-14 w-full" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-14 w-full" />
          </div>
        </aside>
        <main className="mx-auto w-full max-w-3xl space-y-4 px-4 py-8 md:px-8 md:py-10">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <SWRConfig
      value={{
        revalidateOnReconnect: true,
        shouldRetryOnError: true,
      }}
    >
      <ColorScheme />
      <PwaRegister />
      <Outlet />
    </SWRConfig>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1 className="font-heading text-2xl font-medium">{message}</h1>
      <p className="mt-2 text-muted-foreground">{details}</p>
      {stack && (
        <pre className="mt-4 w-full overflow-x-auto rounded-lg bg-muted p-4 text-sm">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
