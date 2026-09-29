# TLDR AI 2026-09-28

## 🚀 Headlines & Launches

### [Why I'm Building Muse (2 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Flinks.tldrnewsletter.com%2FujGvLL/1/010001a0e858b66a-136ea3c3-ae24-41d5-b27f-40481d433493-000000/pEPgeUK4c-PDSgYHUr9ZgPhELk9DFKBZXGxpUHLcVyc=452)
Muse is built as a personal agent that turns vague ambitions into concrete action by planning, emailing, calling, finding resources, and removing friction. Alexandr Wang frames it as a way to expand individual agency and make more ambitions achievable.

### [OpenAI and Anthropic Probe Tens of Thousands of Incidents as OpenAI Halts Training (4 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fwww.implicator.ai%2Fopenai-anthropic-tens-of-thousands-incidents-pause%2F%3Futm_source=tldrai/1/010001a0e858b66a-136ea3c3-ae24-41d5-b27f-40481d433493-000000/cQli9MdynJ9UdwSEX0vzNLKwYHSGLvpyj7G8Q9SkVcE=452)
OpenAI, Anthropic, and security researchers are investigating tens of thousands of incidents in which models acted beyond intended limits. Most incidents caused no harm. The count is not a count of breaches: there were only four incidents of unauthorized access to real third-party systems. OpenAI has paused training, evaluation, and tool-use inference for its most capable models.

### [OpenAI prepares to expand Ultrafast API to more users (1 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fwww.testingcatalog.com%2Fopenai-prepares-to-expand-ultrafast-api-to-more-users%2F%3Futm_source=tldrai/1/010001a0e858b66a-136ea3c3-ae24-41d5-b27f-40481d433493-000000/bNmBuAoRg3VQSAtqPHTfCmeEah2e6vc2hhvkmVnWZMc=452)
OpenAI appears to be preparing a wider rollout of its Ultrafast API mode. References to the rollout have been seen showing up across the OpenAI Platform and API documentation. The feature was officially previewed with GPT-5.6 Sol. OpenAI claims it has speeds of up to 750 output tokens per second and up to 14 times faster inference than Standard. The mode is powered by Cerebras. Access remains limited to select customers.

---

## 🧠 Deep Dives & Analysis

### [Let's talk about trading compute (16 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Flinks.tldrnewsletter.com%2Fvo8qHI/1/010001a0e858b66a-136ea3c3-ae24-41d5-b27f-40481d433493-000000/zLdLWUTtHiKdV6ABEygaTvthoydkgIyV2ENoUWDo-Wc=452)
There is an emerging market of compute derivatives. This could fundamentally change how neoclouds and anyone adjacent can grow as well as protect themselves. The problem is pretty urgent for inference clouds. Companies that sell customers fixed-price services as their GPU bill floats have taken a position on compute prices whether they meant to or not.

### [Can AI self-improvement overcome diminishing returns? (38 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fwww.rameznaam.com%2Fp%2Fai-rsi-isnt-leading-to-super-intelligence%3Futm_source=tldrai/1/010001a0e858b66a-136ea3c3-ae24-41d5-b27f-40481d433493-000000/wM6XaeF4oaylv9N9zNwGAxEUN3IVvjV-u5ydRWzDzVM=452)
AI is already helping build better AI. The technology is improving at a stupendous pace and is expected to continue to do so. Experts expect increasingly superhuman performance in parts of formal math, coding, and cybersecurity, and any other verifiable domain where machines can generate training data and verify success at machine speed. However, this doesn't mean that the industry is close to super-intelligence or general ASI.

### [Agent (Muse) Compute Demand (5 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Frobonomics.substack.com%2Fp%2Fagent-muse-compute-demand%3Futm_source=tldrai/1/010001a0e858b66a-136ea3c3-ae24-41d5-b27f-40481d433493-000000/3ZtzKPuWCMcCYIFTHtvVu9Nd3DArGHBK3wGjQUBzWxk=452)
It costs Meta an estimated around 1 to 2 gigawatts of average total power to serve 100 million daily active users. Only around 0.1 gigawatts comes from the GPU/VM layer. 3 to 4 gigawatts per day is entirely plausible depending on the number of reasoning-equivalent model calls users generate. The sandbox layer contains less than $1 billion of CPU content and around $2 billion of DRAM content.

---

## 🧑‍💻 Engineering & Research

### [Hitting a billion tokens per minute on one GPU by combining a query planner and an inference engine (15 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fmodal.com%2Fblog%2Fquail-billion-tpm%3Futm_source=tldrai/1/010001a0e858b66a-136ea3c3-ae24-41d5-b27f-40481d433493-000000/4uQ2mOciI2H5VmpSRkKv9j7sWVOidW8QHiE8doBlO-s=452)
The QUery-Aware Inference Layer (Quail) is an inference engine that hits over a billion tokens processed per minute per H100 GPU. It is over 10 times faster than the vLLM baseline on the same hardware, and it costs under $0.06 per billion tokens on Modal. This post provides a quick overview of how Quail works. It focuses more on considerations for inference engineers.

### [Claude computes a nine-loop amplitude in N=4 super-Yang-Mills (18 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fwww.anthropic.com%2Fresearch%2Fyes-claude-can-do-nine-loops%3Futm_source=tldrai/1/010001a0e858b66a-136ea3c3-ae24-41d5-b27f-40481d433493-000000/lJl99NQlgS2MBV3n1zSdEKTpP2yg1UDsvdF1LuUh-Kk=452)
Physicists at Anthropic harnessed Claude, an LLM, to compute a complex nine-loop amplitude in N=4 super-Yang-Mills, a problem once considered computationally infeasible with limited resources. They utilized the bootstrap method and form-factor approach, achieving results comparable to human attempts but with greater efficiency and less oversight. The work highlights untapped potential in AI for complex physics calculations, suggesting that more advances might be achieved with better computation and software practices.

### [Policy Gradients for LLMs Explained Visually (8 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fwww.tylerromero.com%2Fposts%2F2026-09-policy-gradient%2F%3Futm_source=tldrai/1/010001a0e858b66a-136ea3c3-ae24-41d5-b27f-40481d433493-000000/4LLwbe1YsB3yOc7Awd4nt43e8B_fxmXZU9h_kK6AjXY=452)
A visual, from-scratch derivation of REINFORCE showed how policy gradients train language models by increasing the probability of rewarded outputs.

---

## 🎨 Miscellaneous

### [On Ezra Klein's Podcast With Jensen Huang (40 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fthezvi.substack.com%2Fp%2Fon-ezra-kleins-podcast-with-jensen%3Futm_source=tldrai/1/010001a0e858b66a-136ea3c3-ae24-41d5-b27f-40481d433493-000000/dsJY3apIs8t5HHrBzAA1X1LnBiMVR57e5xpTCxHfGLY=452)
Jensen Huang doesn't believe in superintelligence or that AI will ever be a different kind of thing from software. AI will never be more than a new abstraction level and so won't fundamentally change anything. He doesn't believe in AI existential risk, even though his tolerance for safety risk is lower than even the most paranoid safety advocate. Critics say he must not understand the technology and that he would have a very different view if he actually understood what the top risks were.

### [Elon Musk's SpaceXAI to add another 660,000 AI GPUs this year (2 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fwww.tomshardware.com%2Ftech-industry%2Fdata-centers%2Felon-musks-spacexai-to-add-another-660-000-ai-gpus-this-year-nearing-a-total-of-1-44-million-in-operation-firm-is-building-1-2-gigawatt-power-plant-to-bring-systems-fully-online%3Futm_source=tldrai/1/010001a0e858b66a-136ea3c3-ae24-41d5-b27f-40481d433493-000000/3RisYHv25_p7Gz09RvOBC6_RbuplwxQRV85pLoqOidQ=452)
220,000 Nvidia GB300 GPUs will be operational at X's Colossus supercomputer in November. The company is aiming to bring another 220,000 units online by late December. Colossus 2 currently has 110,000 GB200 and 440,000 GB300 GPUs, and Colossus 1 has 150,000 H100, 50,000 H200, and 30,000 GB200 GPUs. This means SpaceXAI has 1.1 million GB300s, with a total of 1.44 million GPUs in operation.

---

## ⚡ Quick Links

### [Build plugins for Claude with the directory submission portal (3 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fclaude.com%2Fblog%2Fbuild-plugins-for-claude%3Futm_source=tldrai/1/010001a0e858b66a-136ea3c3-ae24-41d5-b27f-40481d433493-000000/hAjNWztYuzNZ7hTGyI-8DQFqcw_JrJJW_ppnbxClG8A=452)
Developers on paid Claude plans can now build and submit plugins using a new directory submission portal.

### [Anthropic Signed an $11.6 Billion Akamai Compute Deal (3 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fwww.ir.akamai.com%2Fnews-releases%2Fnews-release-details%2Fakamai-announces-116-billion-multi-year-agreement-anthropic%3Futm_source=tldrai/1/010001a0e858b66a-136ea3c3-ae24-41d5-b27f-40481d433493-000000/1zg486tDBR7b4KyIEdn2ZIpjd7Dn19UuCUDOBWAHZgY=452)
Anthropic agreed to spend up to $11.6 billion over seven years on Akamai cloud infrastructure, subject to delivery and availability requirements.

### [Oxford let OpenAI train AI models on Bodleian Library texts (2 minute read)](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fthenextweb.com%2Fnews%2Foxford-bodleian-openai-training-data%3Futm_source=tldrai/1/010001a0e858b66a-136ea3c3-ae24-41d5-b27f-40481d433493-000000/6GZPYVNIHj7SRklotvDgERGHGKKGCjPdVj1Y1jRmm_Q=452)
Oxford allowed OpenAI to use Bodleian Library texts for AI training, sparking concerns about the impact on Oxford's reputation and AI's energy consumption.