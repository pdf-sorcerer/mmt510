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

My Garmin watch is great at recording my swims, and I often use ChatGPT to help analyze my workouts. But copying screenshots and measurements back and forth gets tedious. So when Strava recently suggested that I—and other users—try a Claude MCP integration, I decided to build my own app instead.

Dadbod is a native iOS app built with SwiftUI, SwiftData, HealthKit, and Garmin integrations. Historical measurements remain available as individual records; the app aggregates them when a longer time horizon would otherwise make the data difficult to read.

## 01 Aura

Aura combines resting heart rate, overnight HRV, blood pressure, sleep, weight, body composition, and daily activity in one health dashboard. Interactive charts support both long-term trends and inspection of the original measurements.

## 02 Fishmaxx

Fishmaxx analyzes Garmin pool-swim activities across sessions: pacing, stroke efficiency, interval consistency, and fatigue. Targeted AI analysis looks for unusual or repeatable patterns, separates observations from hypotheses, and suggests what to test next.

## 03 Mog Log

Mog Log brings strength-training activity into the same personal fitness environment, making it easier to follow progress alongside swimming and other health measurements.

## 04 LiveWhale

Published pool hours do not always match actual availability. LiveWhale cross-references facility announcements with swim-team and water-polo schedules to flag likely conflicts before I head to the pool.

## Approach

The design favors readable trends, inspectable source records, and focused AI assistance over another collection of disconnected fitness scores. The goal is practical insight from information I already collect.
