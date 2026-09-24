# Design Engineering with Maggie Appleton

Maggie Appleton on what engineers can learn from designers, working with AI agents, and why human judgment still matters.

![Design Engineering with Maggie Appleton](https://substackcdn.com/image/fetch/$s_!XLTi!,w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3f6c431d-310a-45a0-90fe-3dc43354ef38_1100x220.png)

### In this episode

What can everyone else learn from designers and design engineers? As it turns out, there’s plenty, as I discovered when one of the best design engineers in the industry, [Maggie Appleton](https://maggieappleton.com), came onto the Pragmatic Engineer Podcast. She’s a staff research engineer at [GitHub Next](https://githubnext.com), where she builds prototypes to explore how software engineers might collaborate with AI in new ways. Maggie is at the intersection of design, anthropology, and web development, and was the first designer hired by AI startup Elicit, and Lead Design engineer at AI startup, Normally.

Today’s episode is more visual than usual because Maggie brought her notebook along, so there are peeks inside its pages of prototypes and more:

![Where the design process starts: pages in Maggie's notebook](https://substackcdn.com/image/fetch/$s_!msmf!,w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2e9a5e8c-85bb-4994-9d02-1cc53d71cfac_2000x1600.png)

We got into designers’ work and how their design processes are adapting to and changing with AI. We explore why Maggie starts projects with pens and notebooks, what distinguishes design engineers from other designers, and why understanding engineering constraints leads to better collaboration with engineers.

We also discuss how Maggie uses jigs to gain more control over AI agents, why human judgment and style still matter when models can generate designs, and how inconsistent AI capabilities can mislead us.

### Takeaways from the conversation with Maggie

1. **Post-graduation, one potential career path led to a job inventing torture techniques for the US army.** Maggie said ‘no thanks’ and resolved to work in tech instead. Maggie studied cultural anthropology and her background has helped her through her tech career to date. Software is built by people and relationships matter.

2. **Maggie got a frontend engineering education from illustrating React tutorials.** She spent four years as an illustrator at the developer education company [Egghead](https://egghead.io), rising to art director. To illustrate the lessons, it was necessary to understand what she was drawing: React components, useEffect, and JavaScript functions. *Note from Gergely: I followed Maggie’s work after her excellent illustrations work on Dan Abramov’s [Just JavaScript course](https://substack.com/redirect/fced61db-cca8-4b1f-889e-bc57149302ba?j=eyJ1IjoiOTI4ejYxIn0.tSgkqY3JYQitX21MR6bNgb_LPnkIwNwTgbZDYVmbios). Here’s an animated explainer by her for that course:*

![Just JavaScript Explainer](https://substackcdn.com/image/fetch/$s_!dn7v!,w_394,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1548e56b-dc1e-4c77-90b0-54c88ebd020e_394x270.jpeg)

3. **Some folks believe the best UI interface already exists.** In 2021, the AI startup where Maggie worked was trying to launch a new interface to speed up scientific research using LLMs – a year before ChatGPT was released. Months of intense work went into a “new UI for AI”, but it turned out that scientific researchers didn’t want innovations like infinite canvases with cards, composable Notion-like documents, and more. They wanted the same, simple tables they were deeply familiar and comfortable with! Maggie says the experience taught her that starting with a familiar primitive is sensible – even when innovating.

4. **The nomenclature matters! Also, problem solving is at the heart of design – just like in engineering.** Maggie sees design and software engineering as related by being about problem solving. The difference lies in the materials. Coming up with the names and verbs to describe new things which will then be adopted and used by people can be hard work. Easy when building an online sneakers store, harder when building a new product for AWS.

5. **Notebooks are an important part of the designer’s toolkit.** Maggie often starts her projects by sketching out ideas. She finds it faster to sketch out an idea by hand than to describe it to a tool like Claude Code. Plus, when you sketch out an idea physically, it will still be there in the notebook the next day. In contrast, if it gets put into a tool instead, it’s a lot harder to go back to it, dozens of prompts later!

6. **Maggie regularly builds her personal Figma called “Jigs,”** which is also the name of a woodworking device that helps with a specific job. She regularly asks a coding agent to build a prototype that has sliders and color pickers so she can tweak it in realtime, like having a personal Figma!

![A jig: interactive prototype where colors, sizes, and animation speed can be tweaked](https://substackcdn.com/image/fetch/$s_!ugH3!,w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F77c15294-a9a1-487c-a0de-8833850383e9_1588x998.png)

7. **Maggie has stopped looking at the code at work.** When a PR is generated, she doesn’t look at the code, and this approach fits when building prototypes. Once she knows what to build, she composes a detailed spec, listing out how the agent will verify its work. Previously, she did keep an eye on the code, but that’s not needed with the new generation of models.

8. **Planning with AI agents breaks when there’s too much text.** “I have this theory that planning is a really bad experience at the moment,” Maggie says. “An agent grills you with a set of choice A, B, or C questions a hundred times over. By question 20, you’re quite tired and your brain starts shutting down [because] you can’t make this many decisions in this short of time. Also, it told you A is recommended. Then you just start being like, ‘Yep, enter A, I agree with you.’”

9. **“Capability gaslighting” is when frontier models convince users they’re an expert but fail the same task the next day.** Maggie coined the term “capability gaslighting” for how models impress users before failing badly soon afterward. Too often, we keep believing in models because we’re convinced they’re capable. The same is true for agents, so we should be vigilant when working with LLMs.

10. **We need new types of artifacts for humans and agents to work better together, Maggie believes**: “There’s this world that agents live in: there’s weights and models and skills and MCPs,” she says. “Then you have your human side: it is physicality and texture and light and materials and all these things agents don’t understand. Trying to find artifacts that allow us to meet in the middle and create stuff together is a really hard challenge because you’ve got two totally different types. I just find myself frustrated that agents cannot look over my shoulder, looking at my notebook and understanding what I’m drawing, and how they cannot help me move my ideas along.”

11. **Engineers should try treating the AI agent as a patient tutor when learning about design:** As engineers, we can ask AI agents to teach us about design: they’re good at explaining things like when to change up line height, what a good sidebar looks like, or how many characters to squeeze into a line, etc. In the past, acquiring product design skills was hard, but AI agents make it a bit easier