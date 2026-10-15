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

I've been swimming laps at **Spieker Plaza at Cal** this year. I learned to swim young and was pretty good at it, but I never got into lap swimming until I started timing myself.

My Garmin records each swim in detail. I started sharing Garmin Connect screenshots with ChatGPT to make sense of the numbers, and it turned out to be a useful way to connect what I felt in the pool with what the data showed.

The process was clumsy: sync my watch to Garmin Connect, wait for the data to reach the cloud, take screenshots, then upload them for analysis.

When Strava suggested trying a Claude MCP integration, I decided I'd rather build the app I actually wanted.

**Dab Bod** is a native iOS app built with SwiftUI, SwiftData, HealthKit, and direct Garmin Bluetooth connectivity. It brings the records together locally so I can explore my progress without constantly moving data between apps.

## 01 Aura

<div class="dab-multi-panel dab-multi-aura" aria-label="aura screenshots">
  <a href="/projects/dadbod/aura.png" target="_blank" rel="noopener" aria-label="Enlarge Aura health dashboard"><img src="/projects/dadbod/aura.png" alt="Aura health dashboard" loading="lazy" /></a>
  <a href="/projects/dadbod/aura-expanded.png" target="_blank" rel="noopener" aria-label="Enlarge Aura expanded health view"><img src="/projects/dadbod/aura-expanded.png" alt="Aura expanded health view" loading="lazy" /></a>
</div>



Aura brings heart rate, HRV, blood pressure, sleep, weight, body composition, and daily activity into one place.

I can look at the longer-term trends or inspect a single reading, then see how it lines up with training and recovery.


## 02 Fishmaxx

<div class="dab-multi-panel dab-multi-fishmaxx" aria-label="fishmaxx screenshots">
  <a href="/projects/dadbod/fishmaxx-progress.png" target="_blank" rel="noopener" aria-label="Enlarge Fishmaxx weekly progress"><img src="/projects/dadbod/fishmaxx-progress.png" alt="Fishmaxx weekly progress" loading="lazy" /></a>
  <a href="/projects/dadbod/fishmaxx-history.png" target="_blank" rel="noopener" aria-label="Enlarge Fishmaxx swim history"><img src="/projects/dadbod/fishmaxx-history.png" alt="Fishmaxx swim history" loading="lazy" /></a>
  <a href="/projects/dadbod/fishmaxx-activity.png" target="_blank" rel="noopener" aria-label="Enlarge Fishmaxx individual swim statistics"><img src="/projects/dadbod/fishmaxx-activity.png" alt="Fishmaxx individual swim statistics" loading="lazy" /></a>
</div>

Fishmaxx compares my Garmin swims over time in a denser interface, with far less jumping between screens than Strava or Garmin Connect.

I can track pace, stroke efficiency, consistency, and where fatigue starts to show—which, frankly, seems to be both everywhere and nowhere. I'm still learning how to breathe properly, and so far, that's been my biggest limitation.

Instead of asking AI for another workout recap, I use it to investigate patterns, distinguish what the data shows from what might explain it, and suggest something worth testing next.

The point is to notice changes I might otherwise miss.

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

## 03 Mog Log

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



Mog Log is a visual journal of how my body changes over time. Before COVID, progress selfies were a surprisingly strong motivation to keep exercising.

The trouble was finding those photos later and figuring out when I'd taken them. Mog Log puts them in one chronological record, alongside my swimming, strength training, and health measurements.


## 04 LiveWhale

<div class="dab-livewhale-pair">
  <a href="/projects/dadbod/livewhale-plan.png" target="_blank" rel="noopener noreferrer">
    <img src="/projects/dadbod/livewhale-plan.png" alt="Pool schedule" loading="lazy">
  </a>
  <a href="/projects/dadbod/livewhale.png" target="_blank" rel="noopener noreferrer">
    <img src="/projects/dadbod/livewhale.png" alt="LiveWhale availability" loading="lazy">
  </a>
</div>







Published pool hours don't always mean there's room to swim. LiveWhale checks facility announcements against swim-team and water-polo schedules to flag possible conflicts before I head over.

It's a small feature, but it solves a very real annoyance.
