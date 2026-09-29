# 🎙️ How I AI: Jev for beginners + I left Claude for months, Opus 5.5 brought me back + Opus 5.5 vs. GPT-6 Sol bench

## Jev for beginners: how to use it and what to build

Listen now on **[YouTube](https://substack.com/redirect/bfb6047e-ea3c-4214-a9c0-8a4981133001?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) • [Spotify](https://substack.com/redirect/abae5a92-2ba0-41e5-81c2-12a714f3f49f?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) • [Apple Podcasts](https://substack.com/redirect/53f82529-6802-47cf-95d4-42a70e34c806?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)**

In this solo episode, Claire tests Jev, TypeSafe AI’s new decision model that returns structured choices, scores, and probabilities instead of generated text. She uses it to analyze 1,700 pull requests for 9 cents, map her Claude and Codex usage, triage email, search 4,500 YouTube comments, and process 200,000 classifications for about $4. She also explains why Jev works best alongside a frontier model and how its speed and pricing make entirely new kinds of real-time apps and large-scale analysis practical.

### Biggest takeaways:

1. **Jev is a decision model, not a language model, and that distinction can make many tasks dramatically cheaper.** Instead of generating text, it returns predefined values such as a category, score, or probability. Claire believes this covers roughly 90% of what many software workflows actually need, at 4 cents per million input tokens with no output-token fee.
2. **It cost Claire 9 cents to understand where two years of engineering work went.** She used Jev to compare 1,700 ChatPRD pull requests across 17,000 pairs, then had Gemini Flash Lite label the resulting clusters. In about two minutes, she learned that nearly 30% of the company’s engineering work had gone toward platform, security, and infrastructure.
3. **Some of the most useful analysis is already sitting on a local computer.** Claude Code and Codex store past sessions locally, allowing Jev to classify them in minutes. Claire discovered that engineering had fallen from nearly 100% of her AI usage in January to less than 40% by September, with agents and media publishing filling the gap.
4. **Jev becomes far more powerful when paired with a frontier model.** Claire uses Jev to classify, cluster, filter, and route large datasets, then sends only the most important groups to GPT-6 Astra for deeper reasoning. For ChatPRD’s product insights graph, this approach processed 1,100 signals and completed 200,000 operations for about $4 on the Jev side.
5. **Jev’s pricing changes which ideas are worth building.** Because it returns small predefined values instead of generating long responses, TypeSafe charges nothing for output tokens. Claire spent less than $10 on Jev during the week, making classification workloads that would normally be expensive at scale feel almost free.
6. **Jev makes real-time AI loops practical.** Claire built a voice app that turns a spoken phrase into a color, matches it with a quote based on sentiment, and displays everything almost instantly. Jev made its decisions so quickly that the quote API became the slowest part of the workflow.
7. **YouTube comment analysis is an immediate use case for any podcast team.** Claire classified 4,500 How I AI comments by sentiment, identified 58 containing episode ideas, and built a keyword search that scans the full dataset in under a second. The results showed strong demand for a Grok versus Muse comparison and an 80% positive response to the “Claude Code for product managers” episode.
8. **The real skill is recognizing where a pipeline only needs a decision.** Jev will not write documentation or design an interface, but it can sort, route, rank, and filter enormous datasets quickly and cheaply. Claire now asks one question before every build: Where does this workflow simply need to make a decision? That is where Jev belongs.

### Blog and detailed workflow walkthroughs from this episode:
* Jev: AI Data Analysis and Product Insights: [Link](https://substack.com/redirect/fccb67e6-8a31-40f9-a521-ba57b31c9319?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
  * ↪ Jev GitHub PR Analysis: [Link](https://substack.com/redirect/5988fdf0-0194-4b53-a1dd-238325dcfcb9?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
  * ↪ Jev YouTube Comment Analysis: [Link](https://substack.com/redirect/ece604a0-dae6-4526-9129-3780ac108e03?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
  * ↪ Jev Multi-Model Product Insights: [Link](https://substack.com/redirect/8aec93c8-b6ea-4b9e-bc07-999aba533702?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)

---

## I left Claude for months. Opus 5.5 is why I’m back.

Listen now on **[YouTube](https://substack.com/redirect/6334b45d-8b6b-4479-abe6-a393a5f7fdb8?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) • [Spotify](https://substack.com/redirect/bc9b3dea-d7ae-4173-807d-7444878b6000?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) • [Apple Podcasts](https://substack.com/redirect/f4faea25-3d92-497e-b9aa-24f7c7e9fded?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)**

Claire tests Claude Opus 5.5 after months of leaving Claude out of her daily workflow. She puts it through long-running agentic tasks, frontend prototyping, writing, SVG illustration, computer use, and video editing to see where it earns a place back in her stack. She also shares why she is pairing it with Codex for cross-model code review, where Claude’s safety limits still get in the way, and which tasks remain firmly in Codex territory.

### Biggest takeaways:

1. **A model’s personality can matter just as much as its intelligence.** Claire stopped using Claude for months because its rambling, preachy, and overly verbose replies made it unpleasant to work with. Opus 5.5 is the first model in the family that no longer makes her blood boil, which is a meaningful improvement even if no benchmark captures it.
2. **Opus 5.5’s lower price and faster performance make long-running agent work more practical.** It is 40% cheaper than Opus 5, and Claire found it noticeably faster. It successfully completed four complex tasks spanning inbox triage, backend development, research, and computer use, including runs of up to 82 steps from a single prompt.
3. **Silence during long-running tasks creates its own user experience problem.** Opus 5.5 sometimes remains quiet for eight or nine minutes, leaving users unsure whether it is still working. It is a reminder that perceived latency matters alongside actual latency, especially when agents run for extended periods.
4. **Opus 5.5 is the strongest frontend designer Claire has tested so far.** Its ChatPRD homepage redesign was bold and polished enough that she plans to ship it. The model handles hierarchy, white space, and visual rhythm exceptionally well, though it still struggles with consumer-app aesthetics and defaults to “Claude orange” without direction.
5. **SVG illustration is an unexpected strength of Opus 5.5.** It was the only model Claire tested that produced clean, charming, and animatable character SVGs with consistent styling across multiple expressions. The characters remained visually coherent, and their anatomy mostly made sense.
6. **Opus 5.5 has a clear safety posture, and sometimes that means saying no.** It refused when Claire asked it to skip testing and push directly to production, and it may route cybersecurity work to Opus 4.8. Whether that feels reassuring or frustrating depends on the workflow, but its boundaries are consistent.
7. **The best use of Opus 5.5 may be as an adversarial reviewer for another model.** Claire now has Codex and Opus review each other’s work rather than using one to replace the other. This cross-model loop catches issues either model might miss alone, making the additional cost worthwhile when quality matters.
8. **Computer use and video editing still belong to Codex in Claire’s workflow.** Opus 5.5’s ElevenLabs MCP video test produced weak color grading, too few jump cuts, and sloppy overlays. Codex also remains stronger at computer use in her current setup, giving her no reason to shift either category to Claude.
9. **Claude is back, but it has not replaced Codex as Claire’s daily driver.** Opus 5.5 has earned a role in pull-request reviews, architecture questions, and frontend development. Codex’s desktop experience, computer use, and workflow integration still keep it in the primary position.

### Blog and detailed workflow walkthroughs from this episode:
* Claude Opus 5.5 Review: [Link](https://substack.com/redirect/a719d371-cd83-4a7c-9166-afdd9be1de2d?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
  * ↪ Claude Opus 5.5 SVG Illustrations: [Link](https://substack.com/redirect/5858882c-09c2-443c-a931-bdecf17f8270?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
  * ↪ Claude Opus 5.5 Frontend Prototypes: [Link](https://substack.com/redirect/1ede8787-4e53-46c4-8208-5d8b2449e259?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)

---

## Opus 5.5 vs. GPT-6 Sol: which model won my blind taste test?

Listen now on **[YouTube](https://substack.com/redirect/9c40e60a-67dc-480c-9323-a1fe4dc6a1f0?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) • [Spotify](https://substack.com/redirect/ff21bb0f-b11c-44fe-9fcc-ce59654679db?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) • [Apple Podcasts](https://substack.com/redirect/98e02bf6-0d06-426b-bfe5-a5abee7fcb66?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)**

Claire takes the How I AI bench live to compare GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and more across the work she actually does. She blind-scores writing, frontend prototypes, agent personality, and SVG illustrations, with an AI judge helping evaluate backend work, long-running agents, and computer use. She also checks video edits and a 3D Barbie game build. Along the way, she explains why Astra won her heart, Opus 5.5 won her week, and Sol delivered mixed results while remaining a favorite for everyday work.

### Biggest takeaways:

1. **Expanding the benchmark from two categories to eight changed what Claire could see.** The original How I AI Vibe Review focused on PRDs and frontend prototypes. Adding personal productivity tasks like inbox triage, along with backend development, long-running agent tasks, computer use, SVGs, and video editing exposed clear differences between the models Claire preferred for design and those she enjoyed interacting with.
2. **Opus 5.5 returned to Claire’s workflow because of ergonomics, not benchmarks.** After repeatedly asking Claude to communicate like a normal person, she found Opus 5.5 concise, clear, and far less irritating. At one point, Claire thought the old frustration had returned, then realized she had accidentally selected Opus 5. The difference was that obvious.
3. **Making Opus 5.5 quieter also made it feel slower, even when it was not.** Long stretches of silence can make users wonder whether the model is still working. GPT-6 Sol found a better balance in Claire’s testing, narrating enough to feel responsive without creating additional noise.
4. **GPT-6 Sol’s lower price changes how teams should think about model selection.** Learning that Sol costs roughly half as much as Opus 5.5 immediately changed how Claire thought about routing work. She also believes teams should optimize caching before obsessing over model choice, since ChatPRD has seen significant savings when its caches are configured properly.
5. **Dash-heavy writing is an immediate warning sign in Claire’s benchmark.** Two models received a 1 out of 5 for agent personality because nearly every message contained an em dash. It may sound overly specific, but Claire sees it as a reliable signal that a customer-facing agent will sound like generic AI writing instead of a natural collaborator.
6. **Claire and the AI judge disagree, which makes the benchmark more useful.** The judge favored Fable and rated Sol lower, while Claire preferred Astra. The difference reflects two definitions of quality: the judge rewards correctness and structure, while Claire measures how much she actually wants to use the model.
7. **The blind SVG comparison changed Claire’s earlier verdict.** In her standalone Opus 5.5 review, Claire favored its character illustrations. But in this live blind comparison, Astra and Sol came out ahead on character SVGs, surprising her after she had predicted a Claude win.

### Blog and detailed workflow walkthroughs from this episode:
* Opus 5.5 vs. GPT-6 Sol Blind Test: [Link](https://substack.com/redirect/c2a278e3-d362-4619-b8bb-364402e0adcd?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
  * ↪ AI SVG Icon Generation: [Link](https://substack.com/redirect/aea43b13-98ff-4fe0-8d29-26f7fd72772d?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
  * ↪ AI Inbox Triage and Email Drafts: [Link](https://substack.com/redirect/6d3c6f93-4eee-4c46-bd57-f3976805ad74?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
  * ↪ Blind Test AI Models: [Link](https://substack.com/redirect/828fb354-02c4-4ee5-85f1-4906410c49a1?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)