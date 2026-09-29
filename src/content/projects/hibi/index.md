---
title: "Hibi — macOS Supervisor"
description: ""
date: 2026-09-01
span: "Jul 2026–Present"
category: "Local AI Infrastructure"
tags: ["SwiftUI", "macOS", "Local AI"]
stars: 0
icon: /project-icons/hibi.png
featured: true
---

## Core idea

Hibi (日々) is Japanese for “day-to-day.” It’s also the name of an artisan keycap maker <a href="https://oblotzky.industries/cdn/shop/products/gmk_dracula_v2_hibi_01_box_eye_2048x2048.jpg?v=1641375063" style="color:#2563eb;">whose work on GMK Dracula</a> years ago inspired both the name and the logo.

Work on Hibi began because I wanted a single click to restart Console’s frontend and backend services.

Over time, its scope grew alongside my local AI stack. Local AI quickly becomes an operations problem: models, ports, services, endpoints, and supporting processes all need to be running in the right place at the right time.


## 01 UX

<div class="feature-split">
<div class="feature-copy">
<p>Hibi is designed as a lightweight operational control surface rather than a full desktop application.</p>

<ul>
<li>Menu-bar app</li>
<li>Manages cross-platform LLM inference</li>
<li>Manages virtual-environment lifecycles for supporting services</li>
<li>Uses <code>yt-dlp</code> for quick media grabs</li>
</ul>
</div>

<button type="button" class="feature-image-button hibi-ux-image" onclick="document.getElementById('hibi-ux-modal').showModal()" aria-label="Enlarge Hibi UX screenshot"></button>
</div>

<dialog id="hibi-ux-modal" class="image-modal">
<button type="button" class="image-modal-close" aria-label="Close" onclick="document.getElementById('hibi-ux-modal').close()">×</button>
<div class="image-modal-image hibi-ux-modal-image" role="img" aria-label="Hibi UX screenshot"></div>
</dialog>

## 02 Services

<div class="feature-split">
<div class="feature-copy">
<p>Supporting services are managed alongside inference rather than through separate terminals and scripts.</p>

<ul>
<li>Local TTS</li>
<li>Runtime controllers</li>
<li>Supporting APIs</li>
<li>Configuration and endpoint management</li>
</ul>
</div>

<button type="button" class="feature-image-button hibi-flow-image" onclick="document.getElementById('hibi-flow-modal').showModal()" aria-label="Enlarge Hibi services flow screenshot"></button>
</div>

<dialog id="hibi-flow-modal" class="image-modal">
<button type="button" class="image-modal-close" aria-label="Close" onclick="document.getElementById('hibi-flow-modal').close()">×</button>
<div class="image-modal-image hibi-flow-modal-image" role="img" aria-label="Hibi services flow screenshot"></div>
</dialog>
