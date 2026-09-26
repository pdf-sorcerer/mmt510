---
title: "ALL-LLLM Pod"
description: "An interactive AI podcast and voice-agent experiment focused on multimodal conversation, persona systems, and local speech infrastructure."
date: 2026-01-01
category: "Multimodal AI"
tags: ["Voice", "ASR", "TTS", "Diarization", "LLM"]
stars: 0
emoji: "◉"
featured: false
---

## The idea

Most AI voice products are built around a generic assistant.

ALL-LLLM Pod explores a different model: what happens when the interface is a recognizable conversational persona with continuity, voice, and its own interaction style?

The project started as an AI podcast format, but the underlying system is really about building believable, responsive voice agents.

## What it does

- Lets users speak naturally to AI personas
- Transcribes speech
- Routes conversation through local or remote language models
- Generates persona-conditioned responses
- Synthesizes speech
- Supports conversational state and multimodal interaction
- Runs across macOS and iOS

## Core loop

```text
User speech
    ↓
   ASR
    ↓
Conversation + persona context
    ↓
   LLM
    ↓
 Response text
    ↓
   TTS
    ↓
Spoken character response
