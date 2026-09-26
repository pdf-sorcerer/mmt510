---
title: "Hibi"
description: "A macOS menu-bar controller for managing local inference, cross-machine services, TTS, and supporting tools from one lightweight control surface."
date: 2026-09-01
category: "Local AI Infrastructure"
tags: ["SwiftUI", "macOS", "Local AI", "Inference"]
stars: 0
emoji: "◉"
featured: true
---

## What Hibi does

Hibi turns a scattered local-AI stack into one operable system.

Instead of manually tracking models, ports, services, and machines, it provides one place to see what is running, switch models, restart services, and control supporting tools.

## What it manages

- Mac-local LLM inference
- PC / GPU inference
- Local TTS services
- Model discovery and selection
- Runtime and service status
- Configuration and endpoint management
- Cross-device access

## Why I built it

My local AI environment had become a collection of separate runtimes, APIs, machines, and helper processes.

Hibi is the operational layer that makes that infrastructure visible and manageable without opening terminals or remembering which service lives where.

## Product decisions

- Menu-bar first rather than a full desktop app
- Service cards instead of one large settings panel
- Status visible at a glance
- Controls appear only where they matter
- Mac and PC inference treated as peer runtimes
- Operational rather than chatbot-oriented UI

## Architecture

```text
Mac / iPhone apps
        ↓
       Hibi
   ↙     ↓      ↘
oMLX   PC GPU   TTS
