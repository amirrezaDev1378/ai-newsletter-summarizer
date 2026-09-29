---
name: pick-ui-library
description: Pick the right library for a frontend task in this Next.js app. Prefers what is already installed — shadcn/Radix, Sonner, Tailwind, tw-animate-css, lucide, React Hook Form, Zod, SWR, next-themes. Asks before adding anything else. Only runs when explicitly invoked.
disable-model-invocation: true
---

# Picking The Right Library

## Initial Response

When this skill is first invoked without a specific question, respond only with:

> I'm ready to pick the right library for your task, my picks come from Emil Kowalski's curated list.

Do not provide any other information until the user asks a question.

## This codebase

Adapted from Emil Kowalski's skills (MIT, Copyright (c) 2026 Emil Kowalski). The mapping below overrides later mentions of Base UI, Framer Motion, `motion`, `--transform-origin`, and `data-starting-style`.

- Next.js 16 App Router, React 19, TypeScript. Prefer Server Components. Add `'use client'` only for events or browser state.
- Tailwind CSS v4. Global CSS and easing tokens live in `src/app/globals.css`. Compose classes with `cn` from the `cn` package. Variants use `class-variance-authority`.
- Primitives are shadcn (new-york) on Radix, in `src/components/ui`. Add a missing one with `bunx shadcn@latest add <component>`. Do not hand-write a file in that folder.
- Icons are `lucide-react`.
- No motion library is installed. `tw-animate-css` is imported in `src/app/globals.css`. Do not install `motion` or `framer-motion`. Predetermined motion is Tailwind or CSS. Programmatic motion is the Web Animations API. Ask before adding a spring library.
- Overlay enter/exit uses Radix state plus `tw-animate-css`: `data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95` and `data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95`, plus `data-[side=bottom]:slide-in-from-top-2` (and the other sides). `zoom-in-95` is scale 0.95. Dialogs and alert dialogs stay centered.
- Anchor menus, selects, tooltips, and popovers with the Radix variable that component already sets: `origin-(--radix-dropdown-menu-content-transform-origin)`, `origin-(--radix-select-content-transform-origin)`, `origin-(--radix-tooltip-content-transform-origin)`, `origin-(--radix-popover-content-transform-origin)`.
- If a custom curve is missing, add it once in `src/app/globals.css`: `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`, `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)`, `--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1)`.
- Toasts: `<Toaster />` from `@/components/ui/sonner` is already mounted in `src/app/layout.tsx`. Call `toast` from `sonner` in client code. Do not mount a second toaster.
- `next-themes` is the theme package. The toaster uses `theme="system"`. Forms are React Hook Form and Zod.
- Tailwind v4 `hover:` is already hover-gated. Use `motion-reduce:` for `prefers-reduced-motion`. Do not import `useReducedMotion` from a motion library.

A lookup skill. When invoked with a task ("I need toasts", "what should I use for drag and drop?"), match the task to the curated list below and recommend the library. These are deliberate, taste-driven picks — don't substitute alternatives outside this list unless the user asks for one or the task genuinely isn't covered.

## How to use this

1. **Identify the task**, not the library the user named. "I need to show a dropdown" is a shadcn/Radix primitive, even if they asked for a different package.
2. **Check what's already installed.** Look at `package.json` first. If the project already uses a listed library, use it. If it uses a competitor (e.g. react-window instead of Virtuoso), flag the recommendation but don't churn the dependency without being asked.
3. **Recommend one library**, state what it's for in one sentence, and install/wire it up if that's part of the request. Don't present a menu of options when the list has a clear answer.
4. If the task isn't covered by the list, say so explicitly and recommend from your own knowledge — but be clear you've left the curated list.

## Already installed — use these

| Task                                                                                | Use                                                                                                                                                           |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dialog, alert dialog, dropdown, select, tooltip, switch, scroll area, button, input | shadcn components in `src/components/ui` (Radix). Add a missing primitive with `bunx shadcn@latest add <component>`. Do not hand-write a file in that folder. |
| Toasts                                                                              | `@/components/ui/sonner`, already mounted in `src/app/layout.tsx`. Call `toast` from `sonner`.                                                                |
| Icons                                                                               | `lucide-react`                                                                                                                                                |
| Conditional classes                                                                 | `cn` from the `cn` package                                                                                                                                    |
| Variants                                                                            | `cva` from `class-variance-authority`                                                                                                                         |
| Theme                                                                               | `next-themes`                                                                                                                                                 |
| Forms and validation                                                                | `react-hook-form`, `zod`, `@hookform/resolvers`                                                                                                               |
| Client data fetching                                                                | `swr`                                                                                                                                                         |
| Server data                                                                         | Server Components. Do not add a client cache for data the server can render.                                                                                  |
| Hover, press, overlay enter/exit                                                    | Tailwind and `tw-animate-css`. Not a motion library.                                                                                                          |

Do not recommend `base-ui`. This app is Radix via shadcn.

## Not installed — ask before adding

Emil Kowalski's picks, kept for tasks the installed set does not cover. Say they are not in `package.json` and wait for a yes before installing.

| Task                                                                               | Library                                                                   |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Command menu (⌘K)                                                                  | [cmdk](https://cmdk.paco.me), added through shadcn if the registry has it |
| One-time password input                                                            | shadcn `input-otp`                                                        |
| Springs, layout animation, gesture-driven values that WAAPI cannot express cleanly | [motion](https://motion.dev)                                              |
| Animating numbers                                                                  | [NumberFlow](https://number-flow.barvian.me)                              |
| Animated text                                                                      | [torph](https://torph.lochie.me/)                                         |
| 3D globes                                                                          | [Cobe](https://cobe.vercel.app)                                           |
| Dynamic OG images                                                                  | [Satori](https://github.com/vercel/satori)                                |
| Syntax highlighting                                                                | [shiki](https://shiki.style)                                              |
| Real-time / streaming charts                                                       | [Liveline](https://github.com/benjitaylor/liveline)                       |
| General charts                                                                     | [recharts](https://recharts.org)                                          |
| Drag and drop                                                                      | [dnd kit](https://dndkit.com)                                             |
| Virtualization                                                                     | [Virtuoso](https://virtuoso.dev)                                          |
| Shared client state that is not server data                                        | [zustand](https://zustand.docs.pmnd.rs)                                   |
| Prototyping a control panel                                                        | [Leva](https://github.com/pmndrs/leva)                                    |

A hover, a fade, or a Radix overlay does not qualify for `motion`. Charts: Liveline only when points arrive live and the chart scrolls with time. Everything else in that pair is recharts.

## Common mismatches to catch

- **Toasts built by hand, or a second `<Toaster />`** → the wrapper in `src/components/ui/sonner.tsx`.
- **A `<div>` dropdown or dialog with manual focus handling** → the shadcn component.
- **A new file under `src/components/ui` written by hand** → `bunx shadcn@latest add`.
- **`base-ui`** → Radix via shadcn.
- **`framer-motion` / `motion` for a transition** → Tailwind or `tw-animate-css`.
- **Another form library** → React Hook Form and Zod.
- **Template-literal `className` ternaries three conditions deep** → `cn`, or `cva` when the component has real variants.
