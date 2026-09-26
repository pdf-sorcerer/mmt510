---
title: "Meat Head"
description: "A work-in-progress local-first replacement for everyday AI chat and code generation."
date: 2026-09-01
category: "Local AI"
tags: ["Swift", "LLM", "Codegen", "ASR", "TTS"]
stars: 0
emoji: "◍"
featured: false
---

## The goal

Meat Head is a work-in-progress attempt to build a serviceable replacement for cloud chat and code-generation tools using local models and user-owned infrastructure.

The target is not frontier-model parity.

The target is a dependable system that is good enough for routine coding, chat, voice, and multimodal work.

## What it is becoming

- General-purpose AI chat
- Code generation and editing
- Local model selection
- Conversation history and personas
- Voice input and speech output
- Multimodal workflows
- macOS and iOS access
- Multiple local inference backends

## Why build it

Most AI interfaces bundle the model, runtime, data layer, UI, and vendor relationship into one product.

Meat Head separates those pieces.

The interface can remain stable while the underlying model changes.

## Current architecture

```text
        Meat Head
      macOS / iOS
           ↓
     inference API
       ↙       ↘
 Mac / oMLX    RTX GPU
       ↘       ↙
        ASR / TTS
