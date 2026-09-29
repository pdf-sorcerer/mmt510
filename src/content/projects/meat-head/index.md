---
title: "Meat Head — Local-First AI"
description: ""
date: 2026-09-01
span: "Sep 2026–Present"
category: "Local AI"
tags: ["Swift", "LLM", "Codegen", "ASR", "TTS"]
stars: 0
icon: /project-icons/meathead.png
featured: false
---

## Core idea

Meat Head is a work in progress aimed at building a serviceable replacement for cloud chat and code-generation tools using local models and user-owned infrastructure under tight hardware constraints. It builds on what I learned from ALL-LLLM, Hibi, and Console.

<button type="button" class="meat-head-hero-image" onclick="document.getElementById('meat-head-image-modal').showModal()" aria-label="Enlarge Meat Head image"></button>

<dialog id="meat-head-image-modal" class="image-modal">
<button type="button" class="image-modal-close" aria-label="Close" onclick="document.getElementById('meat-head-image-modal').close()">×</button>
<div class="image-modal-image meat-head-modal-image" role="img" aria-label="Muse versus Meat Head"></div>
</dialog>


## 01 UX

<div class="feature-split">
<div class="feature-copy">
<p>Meat Head presents the underlying inference stack as one consistent interface, regardless of which machine or model is serving the request.</p>
<ul>
<li>General-purpose AI chat</li>
<li>Code generation and editing</li>
<li>Conversation history and personas</li>
<li>Voice input and speech output</li>
<li>Multimodal workflows</li>
<li>macOS and iPhone access</li>
</ul>
</div>
<div class="feature-image-button meat-head-ux-video-button" role="button" tabindex="0" aria-label="Play Meat Head UX video" onclick="const v=this.querySelector('video');if(v.paused){v.play();this.classList.add('is-playing')}else{v.pause();this.classList.remove('is-playing')}"><video class="meat-head-ux-video" src="/zuck.mp4" preload="metadata" playsinline controls></video><span class="meat-head-video-play" aria-hidden="true">▶</span></div>
</div>

## 02 NVIDIA RTX 4070S vs. Mac M4 32GB

| Platform | Model | Quant | Generation | Memory |
| :-- | :-- | :-- | :-- | :-- |
| **4070S** | Qwen3.8-27B EXL3 | 2.00 bpw | **37.21 token/s** | 11.5 GB |
| **Mac M4** | Qwen3.8-27B MLX | 2-bit | **11.95 token/s** | 8.85 GB |
| **Mac M4** | Qwen3.8-27B MLX | 3-bit | **7.55 token/s** | 12.4 GB |
| **Mac M4** | Qwen3.8-27B MLX | 4-bit | **6.17 token/s** | 14.33 GB |

