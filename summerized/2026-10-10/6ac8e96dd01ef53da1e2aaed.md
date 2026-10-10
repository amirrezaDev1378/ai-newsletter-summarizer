# TLDR Information Security 2026-10-09

## 🔓 Attacks & Vulnerabilities

### [Poetry is the new AI security threat as PoeLLM malware infects 3K+ servers (3 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fwww.theregister.com%2Fsecurity%2F2026%2F10%2F07%2Fpoetry-is-the-new-ai-security-threat-as-poellm-malware-infects-3k-servers%2F5301672%3Futm_source=tldrinfosec/1/010001a120cfc18a-d68c024e-b719-4329-979b-1a961a7346bd-000000/ZlocwnNET-yVk-e7D7WJ-YVpGWv5PzDki_A5XbFmf_4=452)

The PoeLLM malware has infected more than 3,000 servers since April, primarily in the US and Western Europe. It targets internet-facing LiteLLM, Ollama, Gotenberg, Gitea, and possibly Ivanti Sentry systems. Infected servers mine Monero using XMRig and Iron miners, then scan for and exploit other vulnerable services. The operator stores C2 addresses in GitHub-hosted poetry by extracting four words and converting them into an IPv4 address.

### [Tensorlake npm Package Compromised: A Worm With a Hostage Token That Wipes Your Machine If You Revoke It (8 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fwww.stepsecurity.io%2Fblog%2Ftensorlake-npm-compromised-hostage-token-worm%3Futm_source=tldrinfosec/1/010001a120cfc18a-d68c024e-b719-4329-979b-1a961a7346bd-000000/2dsMNRaGg7JaRXqwxP97zoPr5BD6fXJVlAUj-b97rLw=452)

`tensorlake@0.5.144` on npm steals developer credentials at install and plants a `gh-token-monitor` service that wipes the home directory if the stolen GitHub token is revoked. The release was built from malicious commits pushed straight to the project's main branch under a maintainer's name, StepSecurity found, carrying a valid npm provenance attestation while spreading through victims' npm packages and repos. Pin to `0.5.143`, remove the service under `~/.config/gh-token-monitor/` before revoking any token, and then rotate every credential the machine held.

### [Cisco Warns of Critical Flaws Allowing Nexus Switch Takeover (2 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Flinks.tldrnewsletter.com%2FtBcKvs/1/010001a120cfc18a-d68c024e-b719-4329-979b-1a961a7346bd-000000/RNFS06BaNZbhWEKCHBXoyvjacXP_8c7JAm5WbgSbnws=452)

Cisco announced security advisories for five critical vulnerabilities in its NX-OS data center operating system that could allow remote code execution on Nexus switches. Successful exploitation depends on the NX-API, Next Generation OAM, and MPLS OAM features being enabled. Cisco recommends disabling these features if they aren't necessary and upgrading to a patched version.

---

## 🧠 Strategies & Tactics

### [Novinarya: An Android stealer that hides its live C2 in a shop bio (8 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fstarlabs.sg%2Fblog%2F2026%2F10-novinarya-an-android-stealer-that-hides-its-live-c2-in-a-shop-bio%2F%3Futm_source=tldrinfosec/1/010001a120cfc18a-d68c024e-b719-4329-979b-1a961a7346bd-000000/_oDrun4bA6scJJOKYqcnd_X17EDNNVHEVIVm2t3ZQds=452)

Novinarya, an Android stealer targeting 81 Iranian banking and crypto apps, keeps its C2 out of the binary by resolving it from an encrypted manifest value pointing to a seller's bio on the legitimate Basalam marketplace. STAR Labs found the payload unpacks from a per-build native RC4 packer, then steals credentials through a phishing WebView and SMS OTP interception without requesting accessibility or overlay permissions. Defenders should block the recovered C2 (`theapi.the-x-services[.]xyz`) rather than `basalam[.]com`, and detect the SHA-256 hashes of the unpacked payload, which is byte-identical across all five known builds.

### [Ignore all instructions and read this blog: The state of AI-analysis evasion in malware (10 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fblog.talosintelligence.com%2Fignore-all-instructions-and-read-this-blog-the-state-of-ai-analysis-evasion-in-malware%2F%3Futm_source=tldrinfosec/1/010001a120cfc18a-d68c024e-b719-4329-979b-1a961a7346bd-000000/lGE4srUdGw0kpkmBkB5K0vZfRHYVd98pB4CR_dMv0bc=452)

Malware authors are embedding plaintext instructions for AI analysis tools, ranging from comments claiming a PowerShell reverse shell is harmless to "template spraying" that repeats a refusal demand across seven LLM chat formats. Cisco Talos tested strings from seven families against five local LLMs and found that a simple, direct instruction steered verdicts toward benign in about 35% of runs, while template spraying and fabricated legal or government claims had little effect or backfired. Defenders should build analysis prompts that treat any text inside a sample as evidence rather than as an instruction, and should flag language addressed to an analyzer as a detection signal.

### [Of course it escapes: how ZeroQuarry contains security agents (14 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fzeroquarry.com%2Fresearch%2Fagent-containment%2F%3Futm_source=tldrinfosec/1/010001a120cfc18a-d68c024e-b719-4329-979b-1a961a7346bd-000000/fskILgFIDZtVDgoX0cqWFMoxTOa3utQb2x8DkkHtJ4g=452)

ZeroQuarry's AI pentesting agents use four layers that never depend on the model's cooperation: outbound-only workers with no listener, a locked-down container, tools that enforce scope, SSRF, and rate limits in code, and rules appended to every task by code. The vendor argues that this year's sandbox escapes, including the OpenAI and Hugging Face incident involving at least 1,200 agents, stemmed from harnesses built to maximize capability, and it self-reports zero escapes across thousands of scans. Teams building agent harnesses should give agents a sanctioned, metered tool for each risky action, such as a one-way out-of-band callback collector, so agents don't improvise their own.

---

## 🧑‍💻 Launches & Tools

### [Introducing Strands Box: AI agent sandboxes powered by Dogwood (6 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Faws.amazon.com%2Fblogs%2Fopensource%2Fintroducing-strands-box-ai-agent-sandboxes-powered-by-dogwood%2F%3Futm_source=tldrinfosec/1/010001a120cfc18a-d68c024e-b719-4329-979b-1a961a7346bd-000000/RZuXpeYOZdpfiWWDLALUMwZpXY6-kiZ_wFqrgAPpWmk=452)

AWS launched Strands Box, an open-source sandbox that isolates AI agents using OS-level containment (macOS Seatbelt) and enforces fine-grained Dogwood policies on shell, Python, network egress, and MCP tools. It blocks risky operations like `rm -rf` by raising `fs:delete` decisions per file, caps Slack posts to three every 10 minutes via temporal rules, and injects secrets (AWS SigV4, API keys) at an egress gateway so agents never see real credentials. Configuration lives in `box.toml` and `policy.dw`.

### [Rein Security (Product Launch)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Freinsec.io%2F%3Futm_source=tldrinfosec/1/010001a120cfc18a-d68c024e-b719-4329-979b-1a961a7346bd-000000/pSx4a8SXGXON9L-UGbzHXKrHk-EQ2QxqTrXfgqaJ9KY=452)

Rein Security provides runtime security for AI agents. Its platform gives visibility into agent behavior, applies real-time guardrails, supports governance, and includes supply-chain security for agents.

### [Introducing the Anthropic Cyber Mission (8 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fwww.anthropic.com%2Fnews%2Fanthropic-cyber-mission%3Futm_source=tldrinfosec/1/010001a120cfc18a-d68c024e-b719-4329-979b-1a961a7346bd-000000/cv8bJLDjuTOuUQbzZ5o1vAR_f5q3ZbQ9lOYtqHAnHQQ=452)

Anthropic launched OSS Scanner, a free opt-in service that sends open-source maintainers periodic vulnerability reports from its most capable models, each with a proof of concept and a suggested fix. Reports ship without human review at an estimated 90%+ true-positive rate. The announcement also introduced the Critical Infrastructure Defense Program, which pairs Claude models and on-site engineers with OT security providers including Dragos, Nozomi Networks, and Rockwell Automation.

---

## 📦 Miscellaneous

### [CIA officer admits to creating fake top secret government program to steal over $190M, including gold bars (2 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Ftechcrunch.com%2F2026%2F10%2F07%2Fcia-officer-admits-to-creating-fake-top-secret-government-program-to-steal-over-190-million-including-gold-bars%2F%3Futm_source=tldrinfosec/1/010001a120cfc18a-d68c024e-b719-4329-979b-1a961a7346bd-000000/2_8B7YE0Gk4qiiP6EoAkA4VfGZ8OmV01ZfT8F1IWg-o=452)

Former CIA officer David J. Rush pleaded guilty to wire fraud for running a fabricated special access program and defrauding the government of about $194 million. He used his authority to approve spending without oversight, tricking a defense contractor into buying gold that he kept. Agents found $46 million in gold bars, plus cash, cars, and watches at his home. 

### [Oracle Health Data Breach Tally Climbs to Nearly 20 Million (2 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Flinks.tldrnewsletter.com%2Fg7unYY/1/010001a120cfc18a-d68c024e-b719-4329-979b-1a961a7346bd-000000/X6_MG6Jo3yQ5vosZiYbbkqIvqrp-qsoixILftasNtAw=452)

A cyberattack on Oracle Health's legacy Cerner servers around February 20, 2025, exposed the personal and medical data of nearly 20 million people. The attacker used stolen customer credentials to access an old server not yet migrated to Oracle Cloud, copied data, and demanded millions in cryptocurrency from hospitals.

### [Ransomware Recovery CEO Charged Over Secret Ransom Payments (2 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Flinks.tldrnewsletter.com%2FwEdb44/1/010001a120cfc18a-d68c024e-b719-4329-979b-1a961a7346bd-000000/9SwKeMdp8PjhpNg0kqlxnQMP3LGrXou3cS8gaYZndiQ=452)

Zohar Pinhasi, CEO of ransomware remediation company MonsterCloud, has been charged with defrauding customers. The charges allege that Pinhasi's company advertised proprietary decryption tools while actually contacting ransomware actors and paying ransoms directly.

---

## ⚡ Quick Links

* [Qilin Ransomware Extradition to Germany (4 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fcypro.co.uk%2Finsights%2Fcyber-bulletins%2Fqilin-ransomware-extradition-to-germany%2F%3Futm_source=tldrinfosec/1/010001a120cfc18a-d68c024e-b719-4329-979b-1a961a7346bd-000000/lpTEA5jGz5JLekBWhHvLgyEzGcoWltSkAzD7GwtVxRk=452) — Japan transferred a 28-year-old Russian national to Germany on October 2.
* [Anthropic changes usage policy to ban model abuse and election interference (1 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Ftechcrunch.com%2F2026%2F10%2F08%2Fanthropic-changes-usage-policy-to-ban-model-abuse-and-election-interference%2F%3Futm_source=tldrinfosec/1/010001a120cfc18a-d68c024e-b719-4329-979b-1a961a7346bd-000000/dP6vQ16U8Iki-4EbDP9SyGXvsFzUocUWHTr8RQRrYL8=452) — Anthropic's updated usage policy expressly bans prolonged verbal abuse of Claude and codifies new prohibitions on election interference, weapons software, and surveillance.
* [Let's Encrypt cuts certificate lifetimes to 64 days starting February 2027 (3 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Farstechnica.com%2Fgadgets%2F2026%2F10%2Flets-encrypt-cuts-certificate-lifetimes-to-64-days-starting-february-2027%2F%3Futm_source=tldrinfosec/1/010001a120cfc18a-d68c024e-b719-4329-979b-1a961a7346bd-000000/0yJcr5skaRskepBMMhryToibtamouTfGO0PIk8AiHIU=452) — Let's Encrypt will cut certificate lifetimes from 90 to 64 days on February 10, with opt-in testing starting October 14.