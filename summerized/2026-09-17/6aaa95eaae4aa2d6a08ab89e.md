# Getting started with AI governance 🔒

A primer on how you should think about governing people, agents, tools, and actions.

By [Luca Rossi](https://substack.com/@refactoring) · Sep 16

***

Hey there, Luca here!

Lately I have been talking with both software engineers *and* security people about this moment in **AI rollout**, and it’s interesting how they feel it from opposite ends.

At first glance, there seems to be a real tradeoff between making AI useful, and keeping it safe:

*   On one side, the best stories about AI impact always involve **connecting it to pretty much everything** you got: tickets, docs, CRM, Slack, telemetry, and more.
*   On the other side, this creates a **big surface for threat** that [even the latest models are extremely vulnerable to](https://substack.com/redirect/d41dd1b3-d668-4998-bc9d-425de6e50eca?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios).

As of today, most agent setups I see are still completely ungoverned. What can this agent touch (MCP servers, browser, data, ...)? Who connected it? What customer data can actually leave the building?

Many teams are conflicted about putting real governance in place because that’s **perceived as a *brake***, in a moment in time where you are expected to *accelerate* instead.

I have a contrarian take on this, that I want to discuss today.

In 2006, Peter Summerlin, a professor in Landscape Architecture in Mississippi, ran [a simple study](https://substack.com/redirect/3c999191-8c8e-4595-9793-6531c06540ed?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) about kids’ behavior in playgrounds:

> *A simple study was conducted to discover **the effects of a fence around a playground** and the consequent impact it would have on preschool children. Teachers were to take their children to a local playground in which there was no fence during their normal recess hour. The kids were to play as normal. The same group was to be taken to a comparable playground in which there was a defined border designated by a fence.*
> 
> *In the first scenario, the children remained huddled around their teacher, fearful of leaving out of her sight. The later scenario exhibited drastically different results, with the children feeling free to explore within the given boundaries.*

So, in playgrounds with fences, **kids actually used *more* space**.

I believe good governance *can* be an accelerant. Like kids, once people know where fences are, people can be empowered to do more *within* them. But that’s only if governance is *good,* which is a big if!

Today I will try to explore what this looks like, in the context of AI. Here is what we will cover:

*   🛠️ **Bounded freedom** — why governance speeds AI rollout, instead of killing it.
*   🧩 **What you should actually govern** — people, agents, data, tools, and actions.
*   🔒 **AI operates on a subset of human trust** — the analogy between human and AI governance only goes so far.

Let’s dive in!

***

## 🛠️ Bounded freedom

A lot of ambitious teams that I know *delay* governance and compliance, with the idea of going AI-native first, and cleaning up later. In my experience, this order is backwards.

Without clarity, people react in two possible ways:

*   **They freeze** — they are unsure about being punished for this or that, and they just go the safe route, doing with AI much less than they would be able to.
*   **They go underground** — I was on a train once, and a guy in the seat in front of me was using his company laptop with one hand, and ChatGPT on his personal phone with the other hand, copy-pasting stuff between the two. You don’t want that to happen, obviously.

There is a [study by Google Cloud](https://substack.com/redirect/633bbe2f-92fe-474a-a13c-00b9aad35c3a?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios) from late 2025 that confirms this. Teams with clear governance in place get much farther, and faster, on agentic adoption than those without:

*   Teams with **full governance** → 46% adoption
*   Teams with **partial governance** → 25% adoption
*   Teams with **“still in development”** governance → 12% adoption

Of course, correlation is not causation, but it still makes it hard to look at governance as only a tax.

And when you think about it, that’s already what happens in specific domains, like coding. We talk about *guardrails* for AI coding all the time, and I even published my own approach with [guides, gates, and guards](https://substack.com/redirect/b1bc6f29-2f3e-4939-941d-d7b634c0b8e3?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios), which is, admittedly, quite strict.

Having strict guardrails is what allows me to be **more liberal** with the tasks I give to my agents, and what they can ship.

So if good governance is guardrails for data, tools, and people, what does this look like? Let’s try to figure out.

***

## 🧩 What you should actually govern

Working from first principles, what is it that you should actually govern? To me, it looks like four things:

1.  **People** — who may use which AI client or gateway (by role, team, seniority). E.g. engineers get the coding setup, interns do not get production CRM tools, etc.
2.  **Agents / clients** — which AI surfaces are approved at all. Company Claude yes, personal ChatGPT no, and so on.
3.  **Data & tools** — what the agent can see (and call). Drive folders, Slack channels, Jira projects, databases, CRM, MCP servers.
4.  **Actions** — what it may *do* once it is connected. Read, write, delete, open a PR, message a customer.

It’s interesting to note that this looks exactly like the same line of reasoning we should apply to people, even without AI. And I would argue that we should start with **governance for people first**, and address AI later, because the opposite is impossible...