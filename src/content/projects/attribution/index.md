---
title: "Résumé Engagement and Observability"
description: ""
date: 2026-07-04
category: "Product Systems"
tags: ["HMAC", "Vercel", "Supabase", "Apple Push Notifications", "Observability"]
stars: 0
icon: /project-icons/attribution.png
featured: false
---

<button type="button" onclick="document.getElementById('attribution-image-modal').showModal()" aria-label="Enlarge résumé engagement image" style="display:block;max-width:860px;margin:0 auto;padding:0;border:0;background:none;cursor:zoom-in;outline:3px solid rgba(0,0,0,0.48);outline-offset:0;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.55),0 5px 16px rgba(0,0,0,0.18);border-radius:10px;overflow:hidden;">
  <img src="/console_updated.png" alt="Résumé engagement and observability dashboard" style="width:100%;height:auto;display:block;border-radius:10px;" />
</button>

<dialog id="attribution-image-modal" class="image-modal">
  <button type="button" class="image-modal-close" aria-label="Close" onclick="document.getElementById('attribution-image-modal').close()">×</button>
  <img src="/console_updated.png" alt="Résumé engagement and observability dashboard" style="display:block;max-width:95vw;max-height:90vh;width:auto;height:auto;margin:auto;" />
</dialog>

## TL;DR

Every job application in <a href="/projects/console/"><code style="color:#2563eb;font-weight:700">Console</code></a> gets its own uniquely attributable résumé links (LinkedIn, GitHub, etc.). When someone clicks one, the destination loads normally for the visitor, and I get an Apple push notification tied to that event.


## Rationale

Throughout my job search, LinkedIn profile activity has been one of the few visible signals that an application may have reached a human. If I applied to a company and then saw someone from that company view my profile, that at least suggested some downstream engagement.

That signal has become much less useful. About 98% of my profile viewers are anonymous to some degree, and roughly 78% of all views are fully private.

I’m fine with the anonymity. The problem is attribution: I can’t tell whether those interactions are connected to companies I’ve applied to or are just unrelated traffic.

My solution: <a href="https://en.wikipedia.org/wiki/HMAC"><code style="color:#2563eb;font-weight:700">Hash-Based Message Authentication Code (HMAC)</code></a> attribution tokens.

<a href="https://www.youtube.com/watch?v=MKn3cxFNN1I"><code style="color:#2563eb;font-weight:700">Short HMAC explainer</code></a>

## UX

<div class="feature-split">

<div class="feature-copy">

<p style="margin-bottom:1rem;">Every link on the résumé is tracked. Each click triggers a push notification showing which link was opened and which probe it came from.</p>

<p>The app also infers whether the click was human, automated, or something else. No real names are exposed.</p>

</div>

<div class="feature-image" style="display:flex;justify-content:flex-end;">

<button type="button" onclick="document.getElementById('console-readout-modal').showModal()" aria-label="Enlarge Console attribution readout" style="display:block;width:100%;max-width:520px;padding:0;border:0;background:none;cursor:zoom-in;outline:3px solid rgba(0,0,0,0.48);outline-offset:0;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.55),0 5px 16px rgba(0,0,0,0.18);border-radius:10px;overflow:hidden;">
  <img src="/Console-readout.PNG" alt="Console attribution push notification readout" style="display:block;width:100%;height:auto;border-radius:10px;" />
</button>

</div>

</div>

<dialog id="console-readout-modal" class="image-modal">
  <button type="button" class="image-modal-close" aria-label="Close" onclick="document.getElementById('console-readout-modal').close()">×</button>
  <img src="/Console-readout.PNG" alt="Console attribution push notification readout" style="display:block;max-width:95vw;max-height:90vh;width:auto;height:auto;margin:auto;" />
</dialog>


## How it works

Each application gets its own tracked résumé links.

```text
Résumé LinkedIn link → click
                         ↓
                     mmt510.com
                    ↙          ↘
               redirect     Supabase lookup
                  ↓               ↓
              LinkedIn      Push notification to iPhone
```

The visitor lands where they expected. I get a notification tied to the originating application.
