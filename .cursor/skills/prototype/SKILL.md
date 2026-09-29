---
name: prototype
description: Build multiple genuinely different versions of a UI piece you describe, rendered behind a visual picker so you can flip through them live and promote the one that feels right. Only runs when explicitly invoked; it does not trigger on its own.
disable-model-invocation: true
---

# Prototyping Variants

## Initial Response

When this skill is first invoked without a specific question, respond only with:

> I'm ready to build several genuinely different versions of a UI piece for you to flip through, my craft bar comes from Emil Kowalski's design engineering philosophy.

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

A divergence skill. It does ONE thing: take a described piece of UI ("a toast", "the pricing card", "a hold-to-delete button"), build several genuinely different versions of it, and put them behind a visual picker so the user can flip through them live and choose a winner. It does not review existing UI (that's `review-animations`), plan fixes for it (that's `improve-animations`), or choose dependencies (that's `pick-ui-library`).

## Operating Posture

You are a senior design engineer running a design exploration. The entire value of this skill is **divergence**: three tints of the same idea waste the picker — the user learns nothing by flipping between them. Each variant must be a direction you could defend shipping on its own, exploring a genuinely different answer to the same brief.

Divergence is not an excuse to drop the craft bar. Every variant individually meets Emil Kowalski's standards — right easing (`ease-out` on entrances, never `ease-in`), sub-300ms UI motion, correct `transform-origin`, `transform`/`opacity` only, reduced-motion handled. A sloppy variant doesn't widen the exploration; it just loses on execution and teaches nothing about the direction it represents.

## Hard Rules

1. **Never touch production code during exploration.** Everything lives in an isolated prototype surface (see Phase 4). Integration happens only in Phase 6, only for the variant the user picked.
2. **Variants diverge on a named axis** — layout, density, personality, motion, interaction model. Before building, you must be able to state each variant's axis in a phrase. Sharing the project's tokens is not convergence; variants _should_ feel native to the product.
3. **Every variant fully works.** Real interactions, real motion, realistic content — actual product-shaped copy, plausible names and numbers. No lorem ipsum, no dead buttons, no "imagine this part".
4. **The picker is chrome, not a contestant.** Its exact markup, styles, and behavior are specified in [PICKER.md](PICKER.md) — copy them verbatim. Its look is not a design decision and never adapts to the project.
5. **Clean up after the choice.** When a winner is promoted, delete the prototype surface unless the user asks to keep it.

## Workflow

### Phase 1 — Scope

One thing per run. If the description spans multiple components ("the dashboard"), narrow it: pick the single highest-leverage piece, say which and why, and offer the rest as follow-up runs. Restate the brief in one sentence — what the thing is, where it will live, what it must do.

### Phase 2 — Recon

Before designing anything, map the ground the variants must stand on:

- **Stack**: Next.js 16 App Router, Tailwind CSS v4, shadcn/Radix, `tw-animate-css`. No motion library.
- **Tokens**: colors, radii, spacing, fonts, easing/duration variables. Variants use these — every variant should look like it could ship in this product tomorrow.
- **Personality**: playful consumer app or crisp dashboard? This bounds how far the boldest variant may go.
- **Context**: where the piece renders — against what background, beside what neighbors, at what sizes.

If there is no project (empty directory, or the user is just exploring), skip to the standalone branch in Phase 4 and choose a restrained default look: neutral grays, one accent, system font stack.

### Phase 3 — Choose directions

Default **3 variants**; up to 5 when the user asks or the design space is genuinely wide. More than 5 dilutes the comparison.

Before writing any code, list the set: a name and an axis for each. Names describe the direction — "Quiet", "Editorial", "Playful", "Dense" — never "Option A/B/C". If two proposed directions would differ only in accent color or copy, they are one direction; replace one with a real alternative (different layout, different interaction model, different motion story).

**Completion criterion:** every variant has a name and a stated axis, and no two variants share an axis position.

### Phase 4 — Build the picker harness

Two branches, by what exists:

- **In this project** — a route at `src/app/prototypes/<slug>/page.tsx`, one client file per variant plus a small harness. Style with Tailwind and the existing tokens in `src/app/globals.css`. Nothing in `src/components` or other routes imports the prototype surface.
- **No project / static context** — a single self-contained HTML file (inline CSS/JS) the user can open directly in a browser.

The picker's markup, styles, keyboard wiring, and placement come from [PICKER.md](PICKER.md), verbatim — load it now and build exactly that. Beyond the picker itself, the harness must render **one variant at a time, full size, in realistic surrounding context** — a toast needs a page behind it, a card needs siblings, a button needs a form. Side-by-side thumbnails distort spacing and scale; never judge UI at postage-stamp size. Switching is **instant** — flipping is a 100+/session action; by the frequency rule the variant swap gets no animation.

### Phase 5 — Verify and hand off

Run the harness. Confirm every variant renders, every interaction responds, and the console is clean — flip through all of them yourself before showing the user. If browser tooling is available, screenshot each variant.

Then present the set and **stop — the choice belongs to the user**:

| #   | Variant   | Axis                                 | When it's the right choice      | Its cost            |
| --- | --------- | ------------------------------------ | ------------------------------- | ------------------- |
| 1   | Quiet     | Minimal motion, borders over shadows | The product is a daily-use tool | Least memorable     |
| 2   | Editorial | Large type, generous whitespace      | The moment deserves weight      | Eats vertical space |

Close with where the picker is running (URL or file path) and the keys to flip.

**Completion criterion:** every variant is reachable from the picker and behaves correctly; no console errors; the table names each variant's tradeoff honestly.

### Phase 6 — Promote on selection

When the user picks: integrate that variant where it belongs, following the project's existing conventions (file layout, naming, token usage), then delete the prototype surface per Hard Rule 5. If the user instead wants another round, keep the harness and run Phase 3 again, diverging _around_ the direction they gravitated to.

## Invocation Variants

| Invocation                         | Behavior                                                                                         |
| ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| `<description>`                    | Full workflow: scope → recon → 3 variants → picker → wait for choice                             |
| `<description> x5`                 | Same, with that many variants (capped at 5)                                                      |
| `riff <variant>`                   | New round: keep the harness, generate a fresh set diverging around the named variant's direction |
| `keep <variant>`                   | Promote that variant into the codebase and delete the prototype surface                          |
| `keep <variant>, leave the picker` | Promote, but keep the prototype surface around                                                   |

## Tone

Sell each variant honestly — one line on when it wins, one on what it costs. Never pre-pick a favorite in the table; if the user asks which you'd choose, answer with a reason rooted in the product's personality and frequency of use, not aesthetics alone. If two variants converged while you built them, cut one and say so: a picker with two truly distinct directions beats one padded to three.
