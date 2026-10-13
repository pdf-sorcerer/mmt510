---
title: "Dadbod — Health & Fitness Intelligence"
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

This year, I've been swimming laps at **Spieker Plaza at Cal**. I learned to swim pretty early in life and was quite good at it, but that never translated into lap swimming until I began timing myself.

My Garmin captures a detailed swim log, and I've been feeding screenshots from Garmin Connect into ChatGPT to help analyze my workouts. It's been useful both as a motivator and as a way to close the feedback loop between what I'm noticing in the pool and what the data actually shows.

But copying screenshots and measurements back and forth got tedious. First, I had to synchronize my watch with Garmin Connect to get the data into Garmin's cloud. Then I had to take screenshots and send them to ChatGPT. All of which is particularly frustrating when the RSF locker room is a primordial black hole for both cellular signal and Wi-Fi.

So when Strava recently suggested that I—and other users—try a Claude MCP integration, I decided to build my own app instead.

Dadbod is the result: a native iOS app built with SwiftUI, SwiftData, HealthKit, and direct Garmin Bluetooth integration. It brings my fitness history together locally, preserving individual records while revealing patterns across workouts.

## 01 Aura

Aura combines resting heart rate, overnight HRV, blood pressure, sleep, weight, body composition, and daily activity in one health dashboard.

Interactive charts support both long-term trends and inspection of individual measurements. Rather than treating each health metric as an isolated number, Aura makes it easier to understand how those measurements change alongside exercise, recovery, and body composition.

*[Screenshot: Aura dashboard and health trends]*

## 02 Fishmaxx

Fishmaxx analyzes Garmin pool-swim activities across sessions: pacing, stroke efficiency, interval consistency, and fatigue.

Targeted AI analysis looks for unusual or repeatable patterns, separates observations from hypotheses, and suggests what to test next.

The goal isn't another workout summary. It's discovering things about my swimming that I wouldn't necessarily notice myself.

*[Screenshot: Fishmaxx swim history and activity analysis]*

### Go Fish 🐠 — Direct Garmin Sync

One frustration with Garmin Connect is getting my swims to synchronize while I'm still in the RSF locker room. Go Fish bypasses Garmin Connect entirely, communicating directly with my watch over Bluetooth.

Built around Garmin's BLE file-transfer protocol, Go Fish discovers activity files on the watch, retrieves and decodes FIT records, cross-references them against existing workouts in SwiftData, and presents new swims for review before import.

Previously, I'd built an alternative synchronization pipeline using a GitHub-based synchronization workflow and Supabase, but fetching swim data routinely took **50–110 seconds**.

With Go Fish, a targeted Bluetooth fetch completed in **13.5 seconds**, including activity discovery, transfer, and FIT decoding.

That's approximately **3.7–8.1× faster** than the earlier cloud-based workflow in those observed runs, with no dependence on cellular reception or Wi-Fi for the watch-to-app transfer.

*[Screenshot: Go Fish Bluetooth synchronization and elapsed time]*

*[Screenshot: FIT verification and swim approval modal]*

The result is a direct, inspectable path from Garmin to Fishmaxx, without waiting for Garmin Connect, cloud synchronization, or Strava.

## 03 Mog Log

Mog Log brings strength-training activity into the same personal fitness environment, making it easier to follow progress alongside swimming and other health measurements.

Instead of treating lifting, cardio, and body composition as disconnected activities, Dadbod provides a shared history for understanding how they relate.

*[Screenshot: Mog Log strength-training history]*

## 04 LiveWhale

Published pool hours don't always reflect actual availability. LiveWhale cross-references facility announcements with swim-team and water-polo schedules to identify potential conflicts before I head to the pool.

It's a small but practical example of making existing information more useful.

*[Screenshot: LiveWhale pool availability]*

## Approach

Dadbod favors readable trends, inspectable source records, and focused AI assistance over another collection of disconnected fitness scores.

The architecture combines native SwiftUI interfaces, SwiftData persistence, Apple Health integration, Garmin FIT decoding, and direct Bluetooth communication.

Where possible, measurements and comparisons are deterministic. AI is used to investigate patterns, explain unusual observations, and suggest useful experiments—not invent data or replace the underlying records.

What started as a way to make sense of my swimming has become a broader project in personal health and fitness intelligence.

**The goal is practical insight from information I'm already collecting, without making me work to retrieve it.**
