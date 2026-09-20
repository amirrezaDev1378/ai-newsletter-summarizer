# EP226: API Concepts Every Software Engineer Should Know

This week’s system design refresher covers core API concepts, defense strategies for prompt injection, influential AI papers, architectural patterns, and load balancer use cases.

---

## API Concepts Every Software Engineer Should Know

Most engineers use APIs every day. Sending a request and reading JSON is one thing, but designing an API that other people can rely on is where things get complicated.

![API Concepts Every Software Engineer Should Know](https://substackcdn.com/image/fetch/$s_!U4gw!,w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8e8297aa-f856-4b2b-af5d-986023db89e7_2508x3000.png)

A lot of problems begin with basic HTTP details that seem small at first. Methods, status codes, request formats, and response structure can make an API feel clear and predictable, or confusing and inconsistent.

Then there are the bigger design choices. REST, GraphQL, gRPC, webhooks, and WebSockets each make sense in different situations. The challenge is knowing what actually fits the system and the use case.

A lot of API problems also stem from design decisions that do not get enough attention early on. Naming, pagination, versioning, error responses, and backward compatibility often decide whether an API is easy to work with or frustrating to maintain.

Security is another area where weak decisions can cause real problems. API keys, OAuth, JWTs, scopes, and permissions are easy to mention, but getting them right is harder, and mistakes here can be costly.

Reliability matters too. Timeouts, retries, idempotency, rate limits, and caching are often easy to ignore until the system is under pressure.

Once an API starts growing, the supporting work matters as well. Clear documentation, solid specs, observability, and contract testing make it much easier for teams to trust the API and use it without guessing how it works.

---

## 5 Ways to Defend Prompt Injection

Prompt injection tops the OWASP LLM Top 10, and there is no single fix. Instead, you must stack defenses, with each one catching what the others miss.

![5 Ways to Defend Prompt Injection](https://substackcdn.com/image/fetch/$s_!gUOK!,w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F32f62036-5c89-4686-941e-57d84297de42_2484x3002.png)

Defenses come in two families: model-level and system-level.

### Model-Level Defenses
These teach the model to resist injection:
* **Spotlighting:** Wraps untrusted text in control tags like `<UNTRUSTED>...</UNTRUSTED>` and tells the model to treat anything inside as data, not instructions.
* **Instruction Hierarchy:** Fine-tunes the model to rank the developer's system prompt above the user's message, and both above third-party content.

### System-Level Defenses
These build a system around the LLM that bounds potential damage:
* **Least-Privilege Tools:** Give the agent the minimum tools it needs.
* **Human-in-the-Loop:** Require explicit user approval before any sensitive action runs.
* **Planner / Executor Split:** Uses two separate LLMs. The planner has tool access but never sees untrusted content, while the executor reads untrusted content but has no tools.

---

## 12 AI Papers that Changed Everything

A handful of research papers shaped the entire AI landscape we see today. 

![12 AI Papers that Changed Everything](https://substackcdn.com/image/fetch/$s_!KnQ8!,w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fee2573be-59c6-4fd7-96e1-6d378f87dbe0_2484x3002.png)

1. **AlexNet (2012):** Showed deep neural nets can see, igniting the deep learning era.
2. **GANs (2014):** Generated realistic images by having two networks compete.
3. **Transformer (2017):** Google's "Attention Is All You Need," which provides the architecture behind modern AI.
4. **GPT-3 (2020):** Demonstrated that scale unlocks emergent abilities.
5. **InstructGPT (2022):** Introduced RLHF, turning raw LLMs into useful assistants.
6. **Scaling Laws (2020):** Proved that loss follows a clean power law.
7. **ViT (2020):** Split images into patches to use a Transformer for vision tasks.
8. **Latent Diffusion (2021):** Utilized denoising in compressed space, the design behind DALL·E.
9. **DDPM (2020):** Added noise and learned to reverse it, forming the foundation of diffusion models.
10. **CLIP (2021):** Connected images and text in one shared space.
11. **Chain-of-Thought (2022):** A simple prompting technique that unlocked complex reasoning.
12. **RAG (2020):** Grounded LLMs in facts by retrieving real documents before generation.

---

## Monolithic vs Microservices vs Serverless

![Monolithic vs Microservices vs Serverless](https://substackcdn.com/image/fetch/$s_!OXGA!,w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6025205d-78d1-4aa9-b2ba-281d1b9fc57e_2484x3002.png)

* **Monolith:** Typically consists of one codebase, one database, and one deployment. For small teams, this is often the simplest way to build and ship quickly. However, as the codebase grows, minor fixes require redeploying the entire app, and a single bad release can take down the whole system.
* **Microservices:** Breaks the system into separate services (e.g., Product, Cart, Order) that run independently, scale separately, and often manage their own data. This allows you to ship changes to specific components without affecting the rest of the system, though it introduces the complexity of service discovery, distributed tracing, and request routing.
* **Serverless:** Instead of managing servers, you write functions that run upon specific triggers, with the cloud provider handling scaling. You typically only pay when functions actually run. Drawbacks include potential cold start latency, messy debugging across stateless functions, and vendor lock-in.

Most production systems use a hybrid approach: a core monolith supplemented by specific services where independent scaling or faster deployments are needed, alongside serverless functions for background jobs or notifications.

---

## 7 Key Load Balancer Use Cases

![7 Key Load Balancer Use Cases](https://substackcdn.com/image/fetch/$s_!Qzor!,w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0169578f-af50-4b3a-b8ed-542ee7ebf80f_2250x2814.png)

1. **Traffic Distribution:** Evenly distributes incoming traffic among multiple server instances.
2. **SSL Termination:** Offloads the responsibility of SSL decryption/encryption from backend servers to reduce their workload.
3. **Session Persistence:** Ensures that successive requests from a specific user hit the same server instance to maintain session state.
4. **High Availability:** Improves availability by automatically rerouting traffic away from failed or unhealthy servers to healthy ones.
5. **Scalability:** Facilitates horizontal scaling when additional instances are added to the server pool.
6. **DDoS Mitigation:** Helps mitigate DDoS attacks through rate limiting or traffic distribution.
7. **Health Monitoring:** Continuously monitors the health and performance of server instances, removing failing servers from the pool.