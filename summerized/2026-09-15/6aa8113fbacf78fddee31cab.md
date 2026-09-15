# Four Retrieval Techniques for Video Search

### Why frame rate, change detection, temporal hierarchy, and targeted rewatching fail in different ways

**By [Damien Benveniste](https://substack.com/@damienbenveniste)** | Sep 14

---

Video looks like one input, but an AI cannot inspect it as one indivisible object. A two-hour recording is a sequence of changing images, sound, speech, and timestamps. Before a model can answer a question, some system has to decide which pieces of that sequence deserve space in its limited working context.

The surprising part is that a longer context window does not remove this decision. Each retained frame expands into many pieces the model must process, each second of audio adds more, and the relationships across time still have to be computed. Keeping more evidence can preserve a brief event, but it can also bury that event inside thousands of irrelevant moments.

Google's September 2026 agentic video mode now lets a model search a timeline and adjust frame rate, resolution, and modality around promising moments, making evidence selection a practical product choice rather than a hidden preprocessing detail.

So the useful question is: **How can an AI answer a precise question about hours of video without placing every frame in context?**

The compact answer is to treat long video as a budgeted search for evidence. Fixed-rate sampling buys predictable coverage. Change-aware sampling keeps moments when the picture moves or cuts. A temporal hierarchy narrows a long recording to a few candidate intervals. Query-adaptive rewatching then spends dense frames, higher resolution, or audio only where the question needs them.

![A two-hour warehouse timeline is narrowed to a tiny evidence window at 10:04.3 before selected frames enter an evidence packet.](https://substackcdn.com/image/fetch/$s_!3K6W!,w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F996c8990-8097-419c-998b-fab946454f22_2043x770.png)

*Long-video understanding begins by deciding which tiny part of the timeline deserves detailed inspection.*

We will follow one realistic request through all four techniques. A warehouse camera records aisle 7 for two hours. A worker enters at 10:00. A red forklift first touches shelf B at 10:04.3, then backs away. The question is not merely whether both objects appeared. It is: **When did the forklift first touch the shelf after the worker entered?**

That wording matters. The answer needs an identity, an order, and a brief physical relation. A transcript may confirm that a worker called for help. A single frame may show the forklift beside the shelf. Only a short sequence can establish the first contact.

## A video becomes a budgeted evidence packet

A **frame** is one still image from the video timeline. In a common transformer-based path, a vision encoder splits that image into patches and converts the patches into numerical representations the language model can process. I will call those representations **visual tokens**. One frame is therefore not one token; it expands into a small field of spatial evidence.

![One warehouse video frame is divided into image patches and converted into many visual tokens aligned to a timestamp.](https://substackcdn.com/image/fetch/$s_!udbN!,w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3ebea03d-0ad5-4465-b004-0952a2058e1f_2020x778.png)

*A frame expands into multiple visual tokens, so retaining one more image consumes more than one context position.*

Video adds a second requirement. The model must connect what appears in one frame with what changes in later frames. That temporal relationship distinguishes "forklift near shelf" from "forklift moves toward shelf, makes contact, then reverses." The model's attention mechanism can compare retained visual tokens across time, but it cannot reconstruct a moment that the input pipeline never kept.

Audio and transcripts form separate evidence streams. Audio preserves nonverbal signals such as a metallic impact. A transcript is cheaper to search and excellent for spoken names or instructions, but it omits silent motion. Timestamps align the streams so a clue in one can point to a region in another.

![Frames, audio, and transcript appear as aligned evidence tracks connected by shared timestamps.](https://substackcdn.com/image/fetch/$s_!eKqq!,w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F342bd03d-9eae-4c21-8509-de128b053d32_1774x887.png)

*Timestamps let a clue in one modality point the system toward evidence in another.*

Now imagine sampling the warehouse video once each second. The system keeps frames at 10:04.0 and 10:05.0. The actual touch at 10:04.3 may fall between them. Raising the rate to ten frames per second makes the event much more likely to appear, but it multiplies the visual evidence for the entire two-hour recording.

This is the first useful insight: **temporal detail is purchased with context.** The family of techniques differs mainly in who decides where to spend that detail, and when.

![The same long video is represented with sparse low-detail samples or dense high-detail samples under a fixed context budget.](https://substackcdn.com/image/fetch/$s_!Ha22!,w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4a7f5a07-d2a6-4e54-81cb-8b8046b99118_1774x887.png)

*Temporal detail is purchased with context, so the budget must be concentrated somewhere...*