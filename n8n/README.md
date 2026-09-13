# AI Newsletter Summarizer Workflow

This n8n workflow automates the process of fetching newsletters, summarizing them using AI, and storing the results in a GitHub repository. It helps you keep track of your newsletters without cluttering your inbox, and provides concise summaries using Google Gemini.

## What it does

The workflow runs on a schedule and performs the following actions:

1. **Fetches Emails**: Connects to a `mail.tm` disposable email account to retrieve incoming newsletters.
2. **Parses & Cleans**: Extracts the content of the emails and minifies the HTML, removing unnecessary scripts and styles.
3. **Stores Raw Emails**: Saves the raw HTML of the emails into your configured GitHub repository under the `mails/` folder.
4. **Summarizes with AI**: Uses the Google Gemini (PaLM) model to analyze the newsletter and generate a markdown summary. It filters out promotional content, ads, and unusable material.
5. **Stores Summaries**: Saves the generated markdown summaries into the GitHub repository under `summerized/{date}/`.
6. **Updates Manifest**: Updates an `api/list.json` file in your repository, which acts as a manifest of all available summaries organized by date.
7. **Cleans Up**: Deletes the processed emails from the `mail.tm` account to save space.

## How to use it yourself

### Prerequisites

*   An [n8n](https://n8n.io/) instance (self-hosted or cloud).
*   A [GitHub](https://github.com/) account and a repository to store the newsletters and summaries.
*   A [mail.tm](https://mail.tm/) account (or any disposable email provider compatible with this workflow).
*   A [Google Gemini API](https://aistudio.google.com/) key.

### Setup Instructions

1.  **Import the Workflow:**
    *   Open your n8n instance.
    *   Click on **Add Workflow**.
    *   Select **Import from File** from the top right menu.
    *   Choose the `AI news letter.json` file located in this directory.

2.  **Configure the Workflow:**
    *   Find the **Workflow Config** node (it's a `Set` node near the beginning of the workflow).
    *   Open it and update the JSON values with your details:
        ```json
        {
          "email": "your-email@example.com",
          "email_secret": "your-email-password",
          "github": "your-github-username",
          "repo": "your-github-repo-name"
        }
        ```
    *   Replace the placeholder values with your actual `mail.tm` email, password, GitHub username, and the target repository name.

3.  **Set up Credentials:**
    *   **GitHub API:** The workflow uses GitHub nodes to list, read, create, and edit files. You will need to create and assign your GitHub credentials in these nodes. Look for nodes like "Store Files In Github", "Update File If Exists", "Edit a file", "Create a file", etc., and ensure they are connected to a valid GitHub credential in your n8n instance. You will likely need a GitHub Personal Access Token (PAT) with repository access.
    *   **Google Gemini API:** Locate the "Message a model" node (Google Gemini). Set up a new credential for the Google Gemini (PaLM) API using your API key.

4.  **Activate and Run:**
    *   Once configured and all credentials are set up, you can activate the workflow using the toggle at the top right.
    *   The workflow uses a **Schedule Trigger**. You can adjust the schedule settings in that node to run as frequently as you prefer (e.g., daily, hourly).
    *   You can also click **Execute Workflow** to run it manually.

Enjoy your automated, AI-summarized newsletters!
