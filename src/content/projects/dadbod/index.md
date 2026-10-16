---
title: "Dab Bod — Health & Fitness Intelligence"
description: "Connects Garmin and Apple Health data to reveal fitness patterns over time."
date: 2026-10-10
span: "Oct 2026–Present"
category: "Health & Fitness Intelligence"
tags: ["SwiftUI", "HealthKit", "Garmin", "AI"]
stars: 0
icon: /project-icons/dadbod.png
featured: true
---

## Core idea

I’ve been swimming a bunch at Cal’s Spieker Pool. Dab Bod brings together health and fitness data scattered across Apple Health, Garmin Connect, and Strava in an interface I've designed around how I want to use it, with the option to share data with ChatGPT or my local LLM for analysis and feedback.

<div class="dab-core-images">
  <a href="/projects/dadbod/core-logo.png" target="_blank" rel="noopener noreferrer">
    <img src="/projects/dadbod/core-logo.png" alt="Dab Bod logo" loading="lazy" />
  </a>
  <a href="/projects/dadbod/core-pool.webp" target="_blank" rel="noopener noreferrer">
    <img src="/projects/dadbod/core-pool.webp" alt="Swimming pool" loading="lazy" />
  </a>
</div>

<p style="text-align:right;font-size:0.75rem;color:#888;margin-top:-1rem;">Photo: Jay Adwere-Boamah</p>

## 01 Aura

<div class="dab-multi-panel dab-multi-aura" aria-label="aura screenshots">
  <a href="/projects/dadbod/aura.png" target="_blank" rel="noopener" aria-label="Enlarge Aura health dashboard"><img src="/projects/dadbod/aura.png" alt="Aura health dashboard" loading="lazy" /></a>
  <a href="/projects/dadbod/aura-expanded.png" target="_blank" rel="noopener" aria-label="Enlarge Aura expanded health view"><img src="/projects/dadbod/aura-expanded.png" alt="Aura expanded health view" loading="lazy" /></a>
</div>

Aura is the app's landing page, bringing HRV, blood pressure, sleep, weight, body composition, and daily activity into one place. Until recently, these measurements relied on daily synchronization between Garmin and Apple Health, introducing delays and unnecessary friction.

Thanks to the open-source <a href="https://github.com/gwerneckp/garmin-ble" target="_blank" rel="noopener noreferrer" style="color:#2563eb;text-decoration:none;"><code style="color:inherit;">garmin-ble</code></a> project, I'm beginning to retrieve wellness measurements directly from my watch over Bluetooth. What started as days of playing Marco Polo with my Garmin has turned into immediate results, with heart rate, stress, and Body Battery now reporting in-app on launch.

## 02 Fishmaxx

<div class="dab-multi-panel dab-multi-fishmaxx" aria-label="fishmaxx screenshots">
  <a href="/projects/dadbod/fishmaxx-progress.png" target="_blank" rel="noopener" aria-label="Enlarge Fishmaxx weekly progress"><img src="/projects/dadbod/fishmaxx-progress.png" alt="Fishmaxx weekly progress" loading="lazy" /></a>
  <a href="/projects/dadbod/fishmaxx-history.png" target="_blank" rel="noopener" aria-label="Enlarge Fishmaxx swim history"><img src="/projects/dadbod/fishmaxx-history.png" alt="Fishmaxx swim history" loading="lazy" /></a>
  <a href="/projects/dadbod/fishmaxx-activity.png" target="_blank" rel="noopener" aria-label="Enlarge Fishmaxx individual swim statistics"><img src="/projects/dadbod/fishmaxx-activity.png" alt="Fishmaxx individual swim statistics" loading="lazy" /></a>
</div>

Fishmaxx presents my Garmin swims in a denser interface, with less jumping between screens than other apps.

Metrics like average pace, stroke count, and consistency are intended to reveal where fatigue begins to affect performance. 

I've also added a button that copies my swim and daily health data into a format I can paste into ChatGPT or, eventually, feed into my local LLM for text and text-to-speech responses. I plan to reuse my earlier ALL-LLLM work on WebSocket-based voice interaction so I can speak directly to my local machine and get a response. Fun times.

The most interesting finding so far is that my opening 25-yard length is often significantly slower than subsequent lengths. Whether that's a genuine pacing pattern or an artifact of Garmin's lap-detection algorithm remains an open question.

## 03 Mog Log

<div class="dab-side-panel dab-side-panel--mog">
<div class="dab-mog-triptych">
  <a href="/projects/dadbod/mog-log.png" target="_blank" rel="noopener noreferrer">
    <img src="/projects/dadbod/mog-log.png" alt="Mog Log physique history" loading="lazy">
  </a>
  <a href="/projects/dadbod/mog-log-day.png" target="_blank" rel="noopener noreferrer">
    <img src="/projects/dadbod/mog-log-day.png" alt="Mog Log daily progress" loading="lazy">
  </a>
  <a href="/projects/dadbod/mog-log-third.png" target="_blank" rel="noopener noreferrer">
    <img src="/projects/dadbod/mog-log-third.png" alt="Mog Log additional progress view" loading="lazy">
  </a>
</div>
</div>







Mog Log is a visual journal of how my body changes over time. Before COVID, progress selfies were a surprisingly strong motivation to keep exercising.

The trouble was finding those photos later and figuring out when I'd taken them. Mog Log puts them in one chronological record, alongside my swimming, strength training, and health measurements.


## 04 LiveWhale

<div class="dab-side-panel dab-side-panel--livewhale">
<div class="dab-livewhale-pair">
  <a href="/projects/dadbod/livewhale-plan.png" target="_blank" rel="noopener noreferrer">
    <img src="/projects/dadbod/livewhale-plan.png" alt="Pool schedule" loading="lazy">
  </a>
  <a href="/projects/dadbod/livewhale.png" target="_blank" rel="noopener noreferrer">
    <img src="/projects/dadbod/livewhale.png" alt="LiveWhale availability" loading="lazy">
  </a>
</div>
</div>











LiveWhale is the calendar platform UC Berkeley uses to coordinate campus events and facility schedules.

UC Berkeley publishes [lap swim hours](https://recwell.berkeley.edu/schedules-reservations/lap-swim/), but those hours don't always account for other activities taking place in the pool. A facility can technically be open for lap swimming without having much room to swim.

So I integrated the published hours with known swim-team and water-polo schedules, along with facility announcements, to flag potential conflicts before I head over.

It's a small feature, but it solves a real inconvenience—and, ironically, it's the one thing that hasn't broken throughout app development.

## 05 Technical

### Go Fish 🐠 — Direct Garmin Sync

The RSF locker room is a primordial black hole for cellular signal and Wi-Fi. Normally, I have to wait 5–10 minutes until I'm back inside the gym before I can review my swim logs.

**No longer!**

<div class="dab-connectivity-table">
  <div class="dab-connectivity-column">
    <h4>v1 — Garmin Cloud</h4>
    <p>My original GitHub Actions and Supabase pipeline worked, but retrieving a swim took <strong>50–110 seconds</strong> and required an internet connection.</p>
    <a href="/projects/dadbod/garmin-cloud.png" target="_blank" rel="noopener noreferrer">
      <img src="/projects/dadbod/garmin-cloud.png" alt="v1 Garmin cloud synchronization log" loading="lazy">
    </a>
  </div>
  <div class="dab-connectivity-column">
    <h4>v2 — Go Fish 🐠</h4>
    <p>Direct Garmin Bluetooth synchronization, bypassing Garmin Connect. One transfer took <strong>13.5 seconds</strong>, including discovery, transfer, and FIT decoding—approximately <strong>3.7–8.1× faster</strong> in the observed runs.</p>
    <a href="/projects/dadbod/go-fish.png" target="_blank" rel="noopener noreferrer">
      <img src="/projects/dadbod/go-fish.png" alt="v2 Go Fish direct Bluetooth synchronization" loading="lazy">
    </a>
  </div>
</div>

Using Garmin's BLE file-transfer protocol, Go Fish finds activity files, decodes FIT records, checks for duplicates in SwiftData, and lets me review new swims before importing them.

The BLE connection is still brittle, and there's plenty of work ahead. I'm also exploring direct access to other Garmin measurements, including heart rate, stress, and Body Battery.
