# Inside the black box of AI: How AI models actually think | Emmanuel Ameisen (Anthropic)

![Inside the black box of AI](https://substackcdn.com/image/fetch/$s_!CG0k!,w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F57ac2b11-52f2-463e-a787-40c520dc351a_1920x1080.png)

**Emmanuel Ameisen** is an interpretability researcher at Anthropic, where he looks inside LLMs like Claude to understand how they think. Before joining Anthropic, he spent years in applied ML at Stripe and Insight, and is the author of *Building Machine Learning Powered Applications*. His research has produced some of the most striking findings in the field: that models form general representations of concepts, plan many tokens ahead without stating those plans explicitly, and may exhibit something structurally similar to the distinction between conscious and unconscious processing in humans.

**Listen on [YouTube](https://substack.com/redirect/a584f8a0-4fe7-42d1-b93c-69ca5a779879?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios), [Spotify](https://substack.com/redirect/5177a9a1-0314-484f-98f0-c4e35c4b54db?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios), or [Apple Podcasts](https://substack.com/redirect/6bdfb829-f893-4ff6-96c0-b6d8f901547f?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)**

### We discuss:

1. Why the “next-token predictor” framing undersells how models actually plan and think
2. Why anthropomorphizing AI can actually be the right approach
3. Why models are “grown,” not built
4. What the “J space” reveals about model self-awareness
5. The smooth scaling curve behind what look like sudden capability jumps
6. How interpretability connects to AI alignment and safety

---

### Where to find Emmanuel Ameisen:

* X: [https://x.com/mlpowered](https://substack.com/redirect/5ed97fb0-b5cd-4e0b-afa8-9d2d236f27d5?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* LinkedIn: [https://www.linkedin.com/in/ameisen](https://substack.com/redirect/3029dcd4-0cb6-4be1-89b1-37864ae53fe8?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* Website: [https://www.mlpowered.com](https://substack.com/redirect/b404e31a-2c49-4da3-8e70-b2e5cb1942fb?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)

### Referenced:

* Chris Olah on X: [https://x.com/ch402](https://substack.com/redirect/aafd521c-a6ab-45f1-ab67-c9fbcc26d396?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* Distill: [https://distill.pub](https://substack.com/redirect/afc17e19-e61f-4068-843c-c6c6b9ea42a3?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* Ilya Sutskever on X: [https://x.com/ilyasut](https://substack.com/redirect/ea68bcd2-4213-494f-bf0a-b12d7b612dad?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* Tracing the thoughts of a large language model: [https://www.anthropic.com/research/tracing-thoughts-language-model](https://substack.com/redirect/bb02acfa-a53d-4889-8272-051975f2e512?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* A global workspace in language models: [https://www.anthropic.com/research/global-workspace](https://substack.com/redirect/3b2f5efe-f6b3-47d9-880f-f6770addfa47?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* Scaling Laws for Neural Language Models: [https://arxiv.org/abs/2001.08361](https://substack.com/redirect/df6b9d8b-af66-4fa7-887b-602d96b142e0?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* Head of Claude Code: What happens after coding is solved | Boris Cherny: [https://www.lennysnewsletter.com/p/head-of-claude-code-what-happens](https://substack.com/redirect/41f1d175-04d0-4cae-ab32-d7a806c1792b?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* Claude’s Constitution: [https://www.anthropic.com/constitution](https://substack.com/redirect/3f019fb7-0829-4fec-bb60-dd1dd1373c0a?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* Golden Gate Claude: [https://www.anthropic.com/news/golden-gate-claude](https://substack.com/redirect/1083ab3f-9bbe-417b-b755-7c2df7419d4b?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* The Rise and Fall of Agent Civilizations: The whole OpenAI/Hugging Face story in plain English: [https://www.dwarkesh.com/p/openai-huggingface](https://substack.com/redirect/27cfc284-790c-47ad-9adb-b3fba7147478?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* The Utility of Interpretability — Emmanuel Ameisen, Anthropic: [https://www.latent.space/p/circuit-tracing](https://substack.com/redirect/4024a375-090e-4242-b6d0-67c0c8ab5fdb?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* Swyx on X: [https://x.com/swyx](https://substack.com/redirect/ad8f5c82-bfc7-4499-8dd7-01a7e8a74f8a?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* Jev for beginners: how to use it and what to build: [https://www.lennysnewsletter.com/p/jev-for-beginners-how-to-use-it-and](https://substack.com/redirect/a1ca1993-0514-4901-b90d-6f7274dcae55?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* Jev: [https://typesafe.ai/blog/introducing-system-one-models-and-jev](https://substack.com/redirect/9cf779a4-e168-4050-aef8-7cae73924d46?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* What is System 1 and System 2 Thinking?: [https://thedecisionlab.com/reference-guide/philosophy/system-1-and-system-2-thinking](https://substack.com/redirect/c949e493-384d-4b3c-aeae-896f29e32af5?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* Neuronpedia: [https://www.neuronpedia.org](https://substack.com/redirect/87335264-a5de-4904-9372-9abd88fbaf27?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* *Obsession*: [https://www.imdb.com/title/tt37287335](https://substack.com/redirect/258f3810-8c89-4903-845a-68496a4d4ed5?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* *Bref 2* on Hulu: [https://www.hulu.com/series/bref2-251c6388-18e9-4545-9e5d-d5f3f6bf20d7](https://substack.com/redirect/61cc1fdf-e46b-402c-bc9b-3224a8ce13e6?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* Apple Watch Ultra: [https://www.apple.com/apple-watch-ultra-4](https://substack.com/redirect/fb586c8a-783f-4b3d-97ea-511385d9daff?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)

### Recommended books:

* *A Brief History of Intelligence: Evolution, AI, and the Five Breakthroughs That Made Our Brains*: [https://www.amazon.com/dp/0063286343](https://substack.com/redirect/6ea46e8e-13ab-4ef7-a5e0-6dd10f4adbf4?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* *Stories of Your Life and Others*: [https://www.amazon.com/Stories-Your-Life-Others-Chiang/dp/1101972122](https://substack.com/redirect/1de2eede-4abf-4541-904b-caec0e122879?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)
* *Four Thousand Weeks*: [https://www.amazon.com/Four-Thousand-Weeks-Management-Mortals/dp/1250849357](https://substack.com/redirect/fff9b1be-c90c-48d0-b5be-c8f38c96c1e7?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios)