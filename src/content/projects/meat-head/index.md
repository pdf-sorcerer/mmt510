---
title: "Meat Head — Local-First AI"
description: ""
date: 2026-09-01
category: "Local AI"
tags: ["Swift", "LLM", "Codegen", "ASR", "TTS"]
stars: 0
icon: /project-icons/meathead.png
featured: false
---

A local-first replacement for everyday AI chat and code generation, inspired by Meta Muse. Meat Head runs Qwen3.8-27B on a remote RTX 4070 Super, with an M4 local-LLM fallback and macOS and iPhone clients.

<button type="button" class="meat-head-hero-image" onclick="document.getElementById('meat-head-image-modal').showModal()" aria-label="Enlarge Meat Head image"></button>

<dialog id="meat-head-image-modal" class="image-modal">
<button type="button" class="image-modal-close" aria-label="Close" onclick="document.getElementById('meat-head-image-modal').close()">×</button>
<div class="image-modal-image meat-head-modal-image" role="img" aria-label="Muse versus Meat Head"></div>
</dialog>

## Core idea

Meat Head is a work in progress aimed at building a serviceable replacement for cloud chat and code-generation tools using local models and user-owned infrastructure under tight hardware constraints. It builds on what I learned from ALL-LLLM, Hibi, and Console.

## 01 UX

Meat Head presents the underlying inference stack as one consistent interface, regardless of which machine or model is serving the request.

- General-purpose AI chat
- Code generation and editing
- Conversation history and personas
- Voice input and speech output
- Multimodal workflows
- macOS and iPhone access

## 02 NVIDIA GPU vs. Apple Silicon

Running Qwen3.8-27B EXL3 at 2.00 bpw on the RTX 4070 Super uses roughly 11.3–11.5 GiB of its 11.99 GiB of VRAM — about 94–96% utilization. To preserve headroom, I use a Q4 KV cache and cap context at 8,192 tokens. Performance, however, is fast: roughly 25–45 tokens per second.

The Mac serves as a fallback at approximately 6–8 tokens per second. Ironically, Qwen3.8-27B has a smaller memory footprint than Qwen3.6-35B on the M4, but the generation-speed tradeoff makes it a less attractive primary runtime.
