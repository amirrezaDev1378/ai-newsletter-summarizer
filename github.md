# AI Newsletter Summarizer

A modern web application built with React and Vite that reads AI-summarized newsletters. This Progressive Web App (PWA) provides a clean interface for users to digest condensed versions of their favorite newsletters, especially designed to work offline.

## Features

- **Progressive Web App (PWA):** Installable, works offline, and offers a native-app-like experience.
- **Offline Reading:** Caches articles and the newsletter list so you can read previously loaded content without an internet connection.
- **Clean UI:** Built with Tailwind CSS and Radix UI primitives via Shadcn UI for a sleek and responsive design.
- **Markdown Support:** Renders newsletter summaries from Markdown files seamlessly.
- **Dark Mode Support:** Automatically respects your system's color scheme preferences.

## Project Structure

- `newsletter-client/`: Contains the frontend application source code.
  - Built with React, React Router v7, Vite, Tailwind CSS v4, and Vite PWA.
- `api/`: Contains the API data (e.g., `list.json`).
- `summerized/`: Contains the markdown files of the summarized newsletters.

## Setup Instructions

### Prerequisites

- [Bun](https://bun.sh/) (JavaScript runtime, package manager, bundler)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-newsletter-summarizer.git
   cd ai-newsletter-summarizer/newsletter-client
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Configure environment variables:
   Copy the example environment file and set the correct API base URL.
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   bun run dev
   ```

## Building for Production

To build the client application for production:

```bash
bun run build
```

This will generate the static assets in the `build/client` directory.

## Deployment

This project uses GitHub Actions for deployment to GitHub Pages. The deployment workflow is located in `.github/workflows/github-pages.yml` and is configured to trigger manually via `workflow_dispatch`.

1. Go to the "Actions" tab in your GitHub repository.
2. Select the "GitHub Pages" workflow.
3. Click on "Run workflow" to trigger a deployment to GitHub Pages.

## Offline Capabilities (PWA)

The application uses Workbox to cache network requests, specifically targeting network requests to `raw.githubusercontent.com` which serves the newsletter JSON data and markdown articles. This ensures that users can read previously fetched newsletters even when they don't have an active internet connection.
