---
title: "Console — Job Search Automation"
description: ""
date: 2026-09-27
span: "Apr 2026–Present"
category: "Product Systems"
tags: ["Electron", "React", "Node", "Supabase", "ATS", "AI"]
stars: 0
icon: /project-icons/console.png
featured: true
---


## Core idea

Job hunting is a numbers game. Automate the tedium of discovery, tracking, autofill, and status monitoring, and focus your attention on what matters most: creating high-intent applications.

Console covers similar territory to <a href="https://simplify.jobs/copilot" style="color:#2563eb;">Simplify Copilot</a>, but I built it as a self-contained system around my own workflow, local inference, and post-application observability for a couple of reasons. One, I don’t like paying for things I can build myself. Two, this material is fun and provides useful experience building with generative AI.

Optional, but I also have some thoughts on using generative AI in job applications — <button type="button" class="restraint-note-trigger" onclick="document.getElementById('restraint-note').showModal()">click here if you want to know more</button>.


<dialog id="restraint-note" class="restraint-note-modal">
  <button type="button" class="restraint-note-close" aria-label="Close" onclick="document.getElementById('restraint-note').close()">×</button>

  <h3>Restraint</h3>

  <p>I’ve kept generative AI use minimal, reflecting my belief that I need to understand and trust my local LLM before I can responsibly delegate work to it. That’s a high bar, especially in a hiring environment that Greenhouse CEO Daniel Chait called an <a href="https://www.greenhouse.com/newsroom/an-ai-trust-crisis-70-of-hiring-managers-trust-ai-to-make-faster-and-better-hiring-decisions-only-8-of-job-seekers-call-it-fair#:~:text=%E2%80%9CUnfortunately%2C%20although%20all,on%20both%20sides.%E2%80%9D" style="color:#2563eb;">“AI doom loop”</a>.</p>

  <p>My ultimate goal is to get a job. Console helps me apply ethically while capturing most of the practical gains from automation. But a very close second is understanding generative AI well enough to defend how the system works: learning from where it fails, deciding what should remain human, and being able to explain exactly what it is and isn’t allowed to do.</p>
</dialog>

## 01 Feed

<div class="feature-split">
<div class="feature-copy">
<p>Aggregates live job postings from more than 18,000 companies across major ATS platforms, including Greenhouse, Ashby, Lever, BambooHR, Breezy, Teamtailor, Workday, and Workable, into a single searchable feed.</p>
</div>

<button type="button" class="feature-image-button feature-feed-image" onclick="document.getElementById('feed-image-modal').showModal()" aria-label="Enlarge Console Feed screenshot"></button>
</div>

<dialog id="feed-image-modal" class="image-modal">
<button type="button" class="image-modal-close" aria-label="Close" onclick="document.getElementById('feed-image-modal').close()">×</button>
<div class="image-modal-image image-modal-feed" role="img" aria-label="Console Feed screenshot"></div>
</dialog>

## 02 Apps

<div class="feature-split">
<div class="feature-copy">
<p>Tracks each application using multiple independent signals rather than relying on a single status field:</p>
<ul>
<li>Posting state</li>
<li>Application history</li>
<li>Rejection emails detected through Gmail</li>
<li>Résumé engagement detected through signed attribution links</li>
</ul>
<p>Console also supports <strong>probes</strong> for informal outreach that is not tied to a formal application.</p>
</div>

<button type="button" class="feature-image-button feature-apps-image" onclick="document.getElementById('apps-image-modal').showModal()" aria-label="Enlarge Console Apps screenshot"></button>
</div>

<dialog id="apps-image-modal" class="image-modal">
<button type="button" class="image-modal-close" aria-label="Close" onclick="document.getElementById('apps-image-modal').close()">×</button>
<div class="image-modal-image image-modal-apps" role="img" aria-label="Console Apps screenshot"></div>
</dialog>

## 03 Résumé

<div class="feature-split">
<div class="feature-copy">
<p>Keeps the base résumé static. For each role, Console:</p>
<ul>
<li>Extracts relevant keywords from the job description</li>
<li>Interprets those keywords in the context of the role</li>
<li>Maps them against evidence in my existing résumé</li>
<li>Generates only a tailored <strong>“Why I’m applying”</strong> section using a local LLM</li>
</ul>
<p>The model can reframe existing experience and connect it to the role, but it cannot invent qualifications.</p>
</div>

<button type="button" class="feature-image-button feature-resume-image" onclick="document.getElementById('resume-image-modal').showModal()" aria-label="Enlarge Console Résumé screenshot"></button>
</div>

> ***Example***
>
> *“I’m applying because {COMPANY_NAME} Product Builder role sits directly at the intersection of my experience leading API and platform products, building hands-on prototypes, and developing AI workflows.”*

<dialog id="resume-image-modal" class="image-modal">
<button type="button" class="image-modal-close" aria-label="Close" onclick="document.getElementById('resume-image-modal').close()">×</button>
<div class="image-modal-image image-modal-resume" role="img" aria-label="Console Résumé screenshot"></div>
</dialog>



## Other features

- **Reusable autofill:** previously entered answers can be reused across applications, including standard voluntary demographic fields. These values are explicitly supplied by the user and are never inferred or generated.
- **Résumé attribution:** signed links can trigger a push notification when an employer opens their résumé, providing a small amount of visibility into an otherwise opaque hiring process.
- **Local LLM agent — ama_Car:** a parody of Jensen Huang’s statement on Dwarkesh, <a href="https://www.youtube.com/shorts/Xh_NHiveLzo" style="color:#2563eb;">“we are not a car.”</a> I carried over Jensen’s assets from ALL-LLLM Pod and turned him into ama_Car, where he exists as a head in a bubble. Like Microsoft’s Clippy, he offers occasional helpful remarks and uses synthetic speech to call attention to useful information.
