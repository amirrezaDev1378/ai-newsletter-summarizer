# Uber’s AI infra, from the inside

Uber Distinguished Engineer Uday Kiran Medisetty shares how Uber builds internal developer tools, integrates AI agents into engineering workflows, and measures their impact on productivity.

---

### In this episode

What do developer tools look like inside Uber, today? They are *very* different from what you would see at most places. For example, can you guess what service a system called DevPods, Code Inbox, Slate or Wisdom would be providing to engineers?

![DevPods, Code Inbox, Slate and Wisdom: four of the 20+ internal tools Uber engineers use, day-to-day](https://substackcdn.com/image/fetch/$s_!KXrA!,w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc0423aa8-e9d7-4359-af46-27597d633df1_1942x1532.png)

Today’s episode is a deepdive into the day-to-day tools of devs at Uber, our tour guide being one of Uber’s longest-tenured engineers: [Uday Kiran Medisetty](https://substack.com/redirect/2254d3f4-febd-4065-b8ca-562307476268?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios). Uday is one of the few Distinguished Engineers at the company, and leads much of the work on agentic AI, today.

With Uday, we talk through how Uber’s developer infrastructure prepared it for AI agents. We look at the systems Uber built before generative AI and the new tools that connect agents to its code, internal services, and engineering knowledge. Uday explains how engineers use background agents, why tools like Slate make development (and bugfixing!) more efficient, and how code review is changing. We also cover Uber’s approach to token costs and how it measures productivity as the engineer’s role changes.

---

### Takeaways from the conversation with Uday

Here are 11 interesting learnings from today’s episode:

**1. Uber’s service count changed erratically:** in 2015, when Uday joined, there were two services in total. By 2019, there were thousands. In 2026, there will be about the same number of services than in 2019, even though the business is about 10x larger than back then!

**2. Uber built most services in-house because off-the-shelf software could not handle its scale – or simply did not exist!** Examples of services Uber built because it had to:
* **uOwn**: shows who owns a service or asset. Back in 2015, no such vendor existed.
* **M3DB**: Uber was emitting about 500 million metrics per second, with no vendor being able to handle this load, so they built it themselves. Observability company [Chronosphere](https://substack.com/redirect/78a49874-e6ff-4655-b320-62839be244bb?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) was built on top of the open sourced M3DB, and we previously covered [how Uber built its observability platform](https://substack.com/redirect/808bf3cd-a632-437d-b315-a78bfb5cc8d1?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios).
* **Cadence**: a durable workflow engine for multi-day flows like driver onboarding. No such system existed at the time when Uber needed it. [Temporal](https://substack.com/redirect/8b25c102-b6b6-4710-b43c-91938f47966b?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) was built on top of the open sourced Cadence framework.
* **Morpheus**: a system combining feature flags *and* experimentation, including switchback tests, with support for two- and three-sided marketplaces that Uber operates. Again, no such solution existed when Uber needed it.

**3. At Uber, cities are a first-class concept that go all the way down to physical infrastructure.** Another reason Uber had to build a lot of its custom tooling is how the concept of cities is a “basic primitive” that needs to be handled across systems like observability, feature flagging, deployments, and even service sharding. For example, in the early days, some services had their database sharded by cities. Even today, each city is pinned to a cloud region, and can fall over to another region at any time. _[We previously covered](https://substack.com/redirect/89425137-63af-402f-950f-c323223eb16e?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) how Uber moved from bare metal to the cloud._

**4. A single AI model gateway has paid lots of dividends.** In 2023, Uber’s platform team made the decision that everything built with AI needs to be model- and harness-agnostic. They built Model Gateway to support switching between Anthropic, OpenAI, other vendor models, and now also supports open models they run. Having the Model Gateway in place made it easy to extend with these parts:
* **AI Guard**: a middleware run by the security team. It checks all requests and responses, and measures latencies (and flags overly slow models or queries)
* **Spend tracking:** spend is tracked per user
* **Visibility**: audit logs and session traces

**5. AIFX allows engineers to switch harnesses without losing settings.** Uber currently supports Claude Code, Codex, and OpenCode as harnesses. AIFX (short for AI Foundations) is a wrapper on top of all of these, so when an engineer changes harnesses, all their settings, skills and plugins move with them.

**6. Uber has a hybrid approach to AI spend:** engineers get allocated a spend tier. When they hit the limit, their manager can sign off to spend more in that month. Basically, for the right type of work, there is no spend limit, but Uber doesn’t want engineers to carelessly burn tokens.

A plugin called CostCheck works across sessions and gives tips on how to improve an engineer’s cost profile. _Uber has reduced token costs by about 50% the last few months, as [we previously covered.](https://substack.com/redirect/59108e6a-750e-4c59-8806-00d623e5912c?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)_

**7. All PRs are still reviewed by engineers, but Uber built tools to help devs decide how much time they need to spend on each code change.** Uday admits that code review has become a big bottleneck inside the company, and Uber built Code Review to make it easier and more efficient for devs to do these reviews.

By the time a dev reviews a change, AI code review has run, screenshots and videos of the feature have been added (when applicable), and risk scores are assigned to the change.

**8. Uber had to declare an internal “code red” for its CI system earlier this year.** This was because CI jobs more than doubled in a 12-month timeframe, pushing load on CI systems overly high. To keep build speeds at bay, the team moved simple CI jobs (eg linting, build and template rules) to the “inner loop:” so agents run these commands with the *afx validate* command before opening a PR.

**9. Uber tags PRs by the type of work each of those PRs do.** In the past, Uber measured “PR velocity:” how long it took for a PR (or, as Uber calls it: a “diff”) to get to production. With agents, doing so makes less sense, because it’s easy to create dozens or even hundreds of PRs, and many of those PRs might have no business impact on the product.

So Uber now tags all PRs by type: feature, bugfix, maintenance, testing, or docs.

They are seeing the percentage of “feature PRs” going up, and the percentage of “maintenance PRs” going down.

I find this categorization to be a clever approach!

**10. The job of a software engineer inside a place like Uber is to build context.** As Uday reflects on how the job has changed:

> “The job of engineering is, in some sense: ‘how do you build the right context for the agents to produce reliable output?’
>
> You need to get really good at context engineering.
>
> Also, [being good at] multitasking has become a thing. Before, it would take so much time to create a PR, so you would be laser-focused on it. But now you’re constantly switching between so many things. You need to be able to verify your work and pick any code smells from the agent [to avoid] shipping regressions into production.
>
> Context engineering, ability to multitask, and ability to review and verify the outputs: these skills have become much more important now because you’re able to parallelize a lot more than before.”

**11. Uber’s AI tooling was seemingly built in a year: in reality, it was built on top of a decade worth of dev tooling investment.** Minion – built in 2025 – is powered by DevPods, which Uber created in 2017. Uber’s MCP Gateway was fast to build, thanks to existing Thrift and Protobuf registries. Jaeger tracing made Slate routing and Context graph easier, and so on.

In Uday’s words:

> “All the things that we built to make life easier for engineers: it makes it easier for our agents as well!”

---

### The Pragmatic Engineer deepdives relevant for this episode
* [How Uber uses AI for development: inside look](https://substack.com/redirect/0abd35ed-1600-4799-a35b-0663e6935540?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* [Scaling Uber with Thuan Pham (Uber’s first CTO)](https://substack.com/redirect/69e2f738-f0e0-4d5f-b01a-400097d32a8c?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* [Inside Uber’s move to the Cloud](https://substack.com/redirect/89425137-63af-402f-950f-c323223eb16e?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* [The Platform and Program Split at Uber](https://substack.com/redirect/6461761e-b72e-4759-8c68-4cf42883521a?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* [Hypergrowth startups: Uber and CloudKitchens with Charles-Axel Dein](https://substack.com/redirect/76b6b5c7-105a-4259-ba80-e1f503ba5d70?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* [How Uber Built its Observability Platform](https://substack.com/redirect/808bf3cd-a632-437d-b315-a78bfb5cc8d1?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* [How Uber is Measuring Engineering Productivity](https://substack.com/redirect/313a6bc5-6521-4fd7-b209-321ed2e65d67?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* [Developer Experience at Uber with Gautam Korlam](https://substack.com/redirect/efa8b82e-e13e-488f-8493-ecd34c8aff4d?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)

---

### Timestamps
* [00:00](https://substack.com/redirect/c498cc50-5c14-4d56-ae1f-a0faae033d54?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) Intro
* [02:48](https://substack.com/redirect/af3358c4-8928-4d91-8c1f-9a26e25076b3?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) Uday’s early days at Uber
* [05:40](https://substack.com/redirect/a6d3a0ee-544c-4dda-ab7e-0ae386ccd586?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) Uber’s move to microservices
* [07:55](https://substack.com/redirect/c24974b3-7788-4bfd-bcff-b2fd87362a42?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) Uber’s engineering team, then and now
* [09:05](https://substack.com/redirect/ef866aea-f4aa-4158-bccf-b5e9ed9fbccf?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) Developer tooling before AI
* [16:03](https://substack.com/redirect/42d84af8-d050-42ae-b074-0d26af1fe729?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) DevPods
* [19:28](https://substack.com/redirect/d0bf2603-97f0-4029-b6c0-28365be0522e?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) Building for AI agents
* [29:27](https://substack.com/redirect/42aa4776-2dec-4c54-819d-1070052ac62e?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) MCP gateway
* [34:37](https://substack.com/redirect/8d9025be-5f06-42a1-8841-93783d755f89?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) Agent Skills repo
* [38:46](https://substack.com/redirect/9ed8556a-f74b-405f-b02c-844c1fee9d36?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) The context graph and Cortana
* [47:54](https://substack.com/redirect/8113f2e2-4f3c-45a8-9a22-a12ff81849ac?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) PRD and ERD tool
* [50:45](https://substack.com/redirect/9326afdf-e439-4cf6-b69a-47499d14ad1a?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) Minion
* [54:46](https://substack.com/redirect/3c61dc96-dad7-476f-816d-92fd4c9b2103?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) Testing and code review with Bazel, Slate, and Capri
* [1:12:26](https://substack.com/redirect/2b5f82ae-fecd-47f3-acdf-f19a921e8d6a?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) Edge Gateway, Shepherd, and Wisdom
* [1:21:33](https://substack.com/redirect/c6b527f7-39dc-4fe1-8e41-55004098c64e?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) The changing role of engineer and measuring productivity
* [1:30:40](https://substack.com/redirect/7ab7ea02-d321-4e51-af20-d9dbf147a590?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) Uday’s favorite new products

---

### References

**Where to find Uday Kiran Medisetty:**
* X: [https://x.com/udaykiran](https://substack.com/redirect/0e8a0a86-9f4b-4e14-baf3-775d53db7894?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* LinkedIn: [https://www.linkedin.com/in/udaykiran](https://substack.com/redirect/6ac9b5e8-542a-4431-a2f9-d20bc6d190ef?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)

**Mentions during the episode:**
* Scaling Uber with Thuan Pham (Uber’s first CTO): [https://newsletter.pragmaticengineer.com/p/scaling-uber-with-thuan-pham-ubers](https://substack.com/redirect/69e2f738-f0e0-4d5f-b01a-400097d32a8c?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* How Uber uses AI for development: inside look: [https://newsletter.pragmaticengineer.com/p/how-uber-uses-ai-for-development](https://substack.com/redirect/0abd35ed-1600-4799-a35b-0663e6935540?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* Bazel: [https://opensource.google/projects/bazel](https://substack.com/redirect/0db240a9-c1b6-44f0-bbcd-616ddbef9cd2?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* Developer Experience at Uber with Gautam Korlam: [https://newsletter.pragmaticengineer.com/p/developer-experience-at-uber](https://substack.com/redirect/efa8b82e-e13e-488f-8493-ecd34c8aff4d?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* Hypergrowth startups: Uber and CloudKitchens with Charles-Axel Dein: [https://newsletter.pragmaticengineer.com/p/high-growth-startups-uber-and-cloudkitchens](https://substack.com/redirect/76b6b5c7-105a-4259-ba80-e1f503ba5d70?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* Instinct: [https://instinct.com](https://substack.com/redirect/fbbd7346-814d-44d8-b027-40100c48b9da?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* Muse: [https://ai.meta.com/muse](https://substack.com/redirect/293dd65e-e4c7-4f60-9249-757fd36f15b6?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* Grok Bot: [https://x.ai/bot](https://substack.com/redirect/d580afff-f08a-4304-8868-c1f86122fb67?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)