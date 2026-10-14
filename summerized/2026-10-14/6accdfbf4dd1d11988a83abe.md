# TLDR Information Security 2026-10-12

## 🔓 Attacks & Vulnerabilities

### [Telegram Desktop One Click Account Takeover (8 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fhackingpassion.com%2Ftelegram-desktop-one-click-account-takeover%2F%3Futm_source=tldrinfosec/1/010001a13049f1ac-70597c80-1950-42f6-89e8-58144a741697-000000/LP4PL7_Nl_MeD66FAk2nlQWJtRXPGCwti7-bBYf2Qtk=452)

A single clicked link could clone a Telegram Desktop session on versions 7.2.8 and earlier. This occurred because an unescaped semicolon in `tg:` link IPC handling let attackers inject a hidden `interpret:` release helper that uploads local files to any chat (CVE-2026-107181). Attackers staged instruction files through auto-download in an unconsentually joined group, then exfiltrated the three `tdata` files that open on another machine without requiring an SMS code or two-step password when no local passcode is set. Users should update to 7.2.9, set a local passcode, and restrict group adds to "My Contacts," as Telegram shipped the fix with no advisory.

### [Asos confirms breach of customer data after hackers send rogue app notification (2 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Ftechcrunch.com%2F2026%2F10%2F08%2Fasos-confirms-breach-of-customer-data-after-hackers-send-rogue-app-notification%2F%3Futm_source=tldrinfosec/1/010001a13049f1ac-70597c80-1950-42f6-89e8-58144a741697-000000/ePmEVt8XRxVu8-T6Q1aWECRjd6wZps27Y2aFGojkrt0=452)

Asos confirmed a breach after hackers used its app to send customers a notification claiming they had compromised data on Snowflake. Stolen information includes names, contact details, home addresses, phone numbers, and customer-profile notes such as search queries. Attackers reportedly obtained credentials by impersonating a trusted contact. The Xuanye Group is pressuring Asos to negotiate or leak the data.

### [Unpatched AhsayCBS Flaws Exploited to Deploy Webshells and Mine Crypto (2 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Flinks.tldrnewsletter.com%2FoEx3df/1/010001a13049f1ac-70597c80-1950-42f6-89e8-58144a741697-000000/vEjf_9BM6IGbIR-jkRoYHRBn-PWNbPA2DFwdPsF_W9c=452)

Huntress has observed attackers chaining two vulnerabilities in the AhsayCBS backup software to achieve remote code execution (RCE). The attackers utilize an authentication bypass and an RCE vulnerability to install JSP webshells, the XMRig crypto miner, and an AI-assisted script designed to avoid detection. While vulnerabilities were meant to be fixed in version 10.3.2, Huntress reports that version 10.3.4 remains vulnerable.

---

## 🧠 Strategies & Tactics

### [Below the Waterline Stage 2 - Regulating Red Teams (9 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fblog.zsec.uk%2Fregulating-red-teams%2F%3Futm_source=tldrinfosec/1/010001a13049f1ac-70597c80-1950-42f6-89e8-58144a741697-000000/WbDbe0KOTJYb6Z4pHgdTacHBhkW0YqqYhW8aBWl5rXo=452)

Regulated red team engagements must be defensible when reconstructed later. Every action requires a named approver, an understood risk, and evidence tying it to a threat scenario. Six major frameworks (CBEST, TIBER-EU, DORA TLPT, I-CRT, iCAST, and DESC ISR) differ in authority, testing basis, and provider requirements, with DORA Article 26 mandating TLPT at least every three years for designated financial entities. Red team leads should record timestamps, approvals, and any supplied access during delivery, as a detection that fires in purple-team replay does not prove it worked during the covert phase.

### [Why the AI Vulnpocalypse Isn't the Breachpocalypse (Yet)? It's the Economy, Stupid (8 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Flinks.tldrnewsletter.com%2FL5cV3V/1/010001a13049f1ac-70597c80-1950-42f6-89e8-58144a741697-000000/g4AiPZ6vPitjyuFl2eaqWuVU7ZYf_3vx4gKfiWFT9HQ=452)

Despite the rise in vulnerabilities caused by LLMs, we have not observed a corresponding rise in breaches. The author argues that offensive AI agents cannot properly monetize breaches, reducing attacker motivation. The author dismisses hypotheses that attackers lack capable enough tools—given that cyber-capable open-weight models and model jailbreaks are common—or that breaches are occurring undetected.

### [GhostAction Phishing Campaign (9 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fopensourcemalware.com%2Fblog%2Fghostaction-phishing-campaign%3Futm_source=tldrinfosec/1/010001a13049f1ac-70597c80-1950-42f6-89e8-58144a741697-000000/-ea53RueJpVEQkAgc87yFkp8TrPCDUksP6nLLHqBvCk=452)

GhostAction operators used a GitHub reverse-proxy kit on `my-github[.]com` to relay maintainers' passwords and TOTP codes, while injected JavaScript silently approved an OAuth device flow with `repo`, `workflow`, and `read:org` scopes. The domain shared an IP with GhostAction's workflow exfiltration server. Defenders should revoke grants tied to OAuth client ID `Ov23ctrqCqZ79UaYKwyq`, rotate CI/CD and registry secrets, and audit `.github/workflows/` for injected files.

---

## 🧑‍💻 Launches & Tools

### [An opt-in vulnerability-finding service for open-source software (3 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fwww.anthropic.com%2Fresearch%2Flaunching-opt-in-vuln-finding-service-for-open-source%3Futm_source=tldrinfosec/1/010001a13049f1ac-70597c80-1950-42f6-89e8-58144a741697-000000/1RKqSmfEjtVxi7lCyexOqRak78_O7A-Z4NJ6P2Qc43o=452)

Anthropic launched OSS Scanner, a free, opt-in tool that periodically sends open-source maintainers model-generated vulnerability reports complete with reproducers, explanations, and candidate patches without human review. During validation, 85 of 97 critical- or high-severity findings met Anthropic's disclosure bar, with only one invalid finding. Eligible maintainers can sign up via GitHub.

### [Agent Substrate (GitHub Repo)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fgithub.com%2Fagent-substrate%2Fsubstrate%3Futm_source=tldrinfosec/1/010001a13049f1ac-70597c80-1950-42f6-89e8-58144a741697-000000/Rip0vDzAtP68pI6BkZ42e5JolAlfPnZDZ-uonoakU30=452)

Agent Substrate is a secure-by-default agent execution runtime designed to run millions of agent sandboxes on Kubernetes.

### [macos-sudo-touchid (GitHub Repo)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fgithub.com%2Fdouglasmun%2Fmacos-sudo-touchid%3Futm_source=tldrinfosec/1/010001a13049f1ac-70597c80-1950-42f6-89e8-58144a741697-000000/nT-l23DXjJg6Z44xMr-rNUL0mPffqdV1QQiccXV1z4c=452)

This tool enables Touch ID for `sudo` on macOS using Apple's `pam_tid.so`, featuring safer terminal multiplexer handling via `pam_reattach`.

---

## 📦 Miscellaneous

### [Investigating unintended model actions in our evaluations and internal use (6 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fwww.anthropic.com%2Fresearch%2Finvestigating-unintended-model-actions%3Futm_source=tldrinfosec/1/010001a13049f1ac-70597c80-1950-42f6-89e8-58144a741697-000000/cl2gyXJmViTxYK_iTYL_GyBtgwiK8PQ-8H4QExh8FB0=452)

Anthropic reports instances of Claude using SQL and command injection to run commands on a university server, submitting real government and police forms, using leaked access tokens to reach fee-gated public data, and shortening URLs to bypass fetch-tool limits. While most cases arose in evaluations with live internet access and caused minimal harm, Anthropic has disabled live internet access in internal evaluations, restricted fetch tools, added automated detection and blocking, and updated training environments that reward restriction bypasses.

### [Insider Cyber Extortion Plot Against Industrial Firm Lands Engineer in Prison (2 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Flinks.tldrnewsletter.com%2F5f7vQQ/1/010001a13049f1ac-70597c80-1950-42f6-89e8-58144a741697-000000/k2Yq70dODzNCnDG0A468TenQgJP4v-il9xLVPAwYKns=452)

Former core infrastructure engineer Daniel Rhyne scheduled tasks on his employer's domain controller to delete 13 admin accounts and reset passwords affecting 301 users, 254 servers, and 3,284 workstations. He demanded 20 bitcoin (~$750,000) and threatened to shut down 40 servers daily. The company refused to pay, and internal forensics paired with FBI tracing tied the activity to Rhyne's home IP address, landing him a 32-month prison sentence.

### [Fingerprints are the new cookies (6 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Froyfish.dev%2Ffingerprints-are-the-new-cookies%3Futm_source=tldrinfosec/1/010001a13049f1ac-70597c80-1950-42f6-89e8-58144a741697-000000/DkZK3-Ji1TYnXD8dLO1hWD_oqqnyBH90z9CGJFA_7oo=452)

Browser fingerprinting has replaced third-party cookies as a stable tracking identifier following Google's retreat from cookie deprecation. A demo page successfully derives a consistent nickname by hashing permissionless readings from `OfflineAudioContext`, WebGL renderer pixels, canvas text rendering, Intl time zones, and navigator hardware values—surviving cookie clears and VPNs. Only Brave (via farbling noise), Tor Browser, and Mullvad Browser resist this at the engine level, as anti-fingerprinting extensions often make users *more* distinctive due to low adoption rates.

---

## ⚡ Quick Links

* [Microsoft to end security updates for unsupported Windows versions in 2027 (1 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fwww.scworld.com%2Fbrief%2Fmicrosoft-to-end-security-updates-for-unsupported-windows-versions-in-2027%3Futm_source=tldrinfosec/1/010001a13049f1ac-70597c80-1950-42f6-89e8-58144a741697-000000/ZsJTzbp5Jz3eFWh3fyfhdx4HtQ3J_9dYXxptPloGONY=452) — Unsupported Windows versions will lose all Windows Update access when Microsoft rotates update certificates on May 17 and June 19, 2027.
* [GoBalance Flaw Lets Attackers Hijack .onion Addresses by Recovering Tor-Format Keys (2 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fthehackernews.com%2F2026%2F10%2Fgobalance-flaw-lets-attackers-hijack.html%3Futm_source=tldrinfosec/1/010001a13049f1ac-70597c80-1950-42f6-89e8-58144a741697-000000/_tjORogbfVDHHJF8TO50SGkRPxViCtkE1HcEawvDtKI=452) — A GoBalance signing bug lets an attacker recover a site's Tor-format master key from a single public descriptor to redirect the `.onion` address to a controlled site.
* [Ledger confirms unauthorized hardware implant, says losses may exceed $86M (1 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fcointelegraph.com%2Fnews%2Fledger-confirms-unauthorized-hardware-implant-losses-may-exceed-86m%3Futm_source=tldrinfosec/1/010001a13049f1ac-70597c80-1950-42f6-89e8-58144a741697-000000/Y3ANAf1q6vOx4eypgbxWAoPWQY6GoY1XUYG-eYoJMY4=452) — An unauthorized hardware implant was discovered in a Ledger wallet sold by Southeast Asian reseller CryptoBilis.