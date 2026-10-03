# TLDR Information Security 2026-10-02

## 🔓 Attacks & Vulnerabilities

### [Attackers have been exploiting critical Zimbra flaw to steal emails (2 minute read)](https://arstechnica.com/security/2026/09/attackers-have-been-exploiting-critical-zimbra-flaw-to-steal-emails/)
Attackers are exploiting CVE-2026-73570 in Zimbra Collaboration Suite. A crafted email can trigger unauthenticated OS command execution when `zimbra-snmp` and SNMP notifications are enabled. Microsoft observed web shells, reverse shells, privilege escalation, remote-access tools, email backups, and credential collection. Shadowserver found 274 compromised instances.

### [Revenge of the SD-WAN: Exploring and Exploiting Yet Another Critical Cisco SD-WAN Vulnerability (CVE-2026-76504) (6 minute read)](https://www.vulncheck.com/blog/revenge-of-the-sd-wan-cve-2026-76504)
A single unauthenticated POST to `/%6a_security_check` mints an admin session on Cisco SD-WAN vManage through CVE-2026-76504, a critical authentication bypass Cisco disclosed as an exploited zero-day. Cisco's login module checked the raw request URI while WildFly matched the decoded path, allowing encoded requests to skip password checks. With ~1,500 vManage instances internet-exposed per VulnCheck, defenders should follow Cisco's advisory and hunt logs for encoded paths and reserved usernames.

### [Fortinet warns of critical FortiMail flaw exploited in zero-day attacks (3 minute read)](https://links.tldrnewsletter.com/xynnpX)
Attackers are exploiting CVE-2026-104286 as a zero-day, a CVSS 9.8 path traversal and NULL byte flaw in the FortiMail management interface that enables unauthenticated HTTP requests to write arbitrary files and execute code. FortiMail 7.2.0 through 8.0.1 are affected. Fixed builds are not yet available, so administrators should disable IBE or restrict the management interface to trusted networks. CISA gave federal agencies until October 4 to triage and mitigate.

---

## 🧠 Strategies & Tactics

### [Solving the Identity Crisis for AI Agents (7 minute read)](https://www.uber.com/us/en/blog/solving-the-agent-identity-crisis/)
Uber implemented a new identity system to address agentic identity challenges and workflow provenance. Workflows request a workload ID from SPIRE, which is presented to a custom STS. The STS verifies in its agent registry that the agent is allowed to run and returns a JWT with the relevant details. Uber also built a standardized Agent-to-Agent client to provide an automatic, secure-by-default path.

### [What We Should Do Instead of Trusted Cyber Access Programs and Open Weight Restrictions (5 minute read)](https://joshuasaxe181906.substack.com/p/what-we-should-do-instead-of-trusted)
Instead of restricting access to powerful cyber-capable models, the paradigm should shift toward restricting attackers' access. Frontier labs should implement low-friction Know Your Customer (KYC) programs, improve attacker detection and blocking, and publish time-to-detection-and-response metrics. Victims of AI cyberattacks are also encouraged to share more detailed information about incidents.

### [Bitget hacked via zero-day in third-party security products (3 minute read)](https://links.tldrnewsletter.com/lzmlya)
A zero-day in a third-party security product gave an attacker a foothold on August 31, preceding a $387.5 million theft at Bitget. The attacker planted a web shell and C2 on an appliance, pivoted to the production wallet job server, and used a custom withdrawal tool to drain wallets in under three hours. The takeaway emphasizes monitoring security appliances like production hosts and enforcing withdrawal risk checks outside the wallet host.

---

## 🧑‍💻 Launches & Tools

### [Gemini 4 Argon: our next era of frontier intelligence (9 minute read)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)
Google is releasing Argon to trusted cyber defenders via its Fairwind Program. The model can find, validate, and patch vulnerabilities, scoring 68% on CWE-bench v1 and identifying exposures across 20 programming languages. Google is testing safeguards against prompt injection and misuse before a wider release.

### [kunglao-agent (GitHub Repo)](https://github.com/amd2g2zz/kunglao-agent)
A Claude Code plugin designed for autonomous reverse-engineering tasks.

### [Drop (GitHub Repo)](https://github.com/wrr/drop)
A tool that creates sandboxed environments to isolate programs and agents while attempting to preserve development environment configurations and settings.

---

## 🎟️ Miscellaneous

### [Google: AI Is Changing the Pace and Profile of Vulnerability Discovery (4 minute read)](https://links.tldrnewsletter.com/4SRpTo)
Monthly vulnerability disclosures doubled in 2026, reaching over 10,000 by midyear. High-risk flaws rose 167%, and exploited vulnerabilities averaged 18 per month. AI-discovered bugs more frequently enable remote code execution (50% vs 26%) and lean toward medium and low risk. AI-related CVEs have climbed to 2,076 since early 2025.

### [MetaMask Security Incident Prompts Exit of Affected Ethereum Validators (1 minute read)](https://thehackernews.com/2026/10/metamask-security-incident-prompts-exit.html)
MetaMask is proactively exiting affected validators in its non-custodial staking operations following an infrastructure security incident. Lido confirmed the exits are underway, with completion expected by October 7.

### [Disrupting a coordinated model-distillation campaign (5 minute read)](https://links.tldrnewsletter.com/yXlC5i)
OpenAI disrupted an extraction campaign that ran from July 1 to July 28, involving spikes of 16,000 requests from over 4,000 users. OpenAI linked a core cluster to Moonshot AI personnel, subsequently restricting accounts, closing replay paths, and sharing indicators with partners.

---

## ⚡ Quick Links

* [UK rail cops' £320K face-scanning spree nets zero matches (2 minute read)](https://www.theregister.com/security/2026/09/30/uk-rail-cops-320k-face-scanning-spree-nets-zero-matches/5299793) - British Transport Police scanned over 500,000 faces during a six-month trial with zero matches.
* [China-Nexus Hackers Compromise 350 Systems Across Asia With New Antino Backdoor (4 minute read)](https://gbhackers.com/antino-backdoor/) - Antino is a new Rust-based Windows backdoor using Microsoft Graph API for C2 communications, tracked as UAT-11587.
* [Signal completes rollout of secure chat backups across all platforms (1 minute read)](https://www.scworld.com/brief/signal-completes-rollout-of-secure-chat-backups-across-all-platforms) - Signal 8.30 brought end-to-end encrypted on-device backups to iOS and desktop.