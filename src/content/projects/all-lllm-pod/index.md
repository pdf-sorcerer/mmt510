---
title: "ALL-LLLM Pod"
description: "Persona-based chatbots. AI transcription, diarization, HITL tools, and TTS."
date: 2026-01-01
span: "Jun 2025–Jun 2026"
category: "Multimodal AI"
tags: ["WhisperX", "NeMo", "TTS", "LLM"]
stars: 0
icon: /project-icons/all-lllm.png
featured: false
---

## TL;DR

The chatbot is the visible product, built around the All-In Podcast hosts.

What matters is the iterative discovery loop: read, build, test, and feed the results back into the system. The work spans ASR, diarization, transcript forensics, persona training, local inference, and voice synthesis.

<div class="feature-split">

<div class="feature-copy">

| **Source material** | **Scale** |
| :-- | :-- |
| Episodes, clips, and shorts | 563 |
| Training examples | 75k+ |
| Bestie audio | 400+ hours |

</div>

<div class="feature-image" style="align-self:stretch;">

<button type="button" class="feature-image-button trailer-card" aria-label="Play ALL-LLLM POD trailer" onclick="document.getElementById(&quot;all-lllm-trailer-modal&quot;).showModal()" style="display:block;width:100%;padding:0;cursor:pointer;position:relative;overflow:hidden;">
  <video src="/final_final_besties.mp4#t=0.1" muted playsinline preload="metadata" style="display:block;width:100%;height:auto;"></video>
  <span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:3rem;color:white;text-shadow:0 1px 6px rgba(0,0,0,.8);">▶</span>
</button>

</div>

</div>

<dialog id="all-lllm-trailer-modal" class="image-modal">
  <button type="button" class="image-modal-close" aria-label="Close" onclick="const d=document.getElementById(&quot;all-lllm-trailer-modal&quot;);d.querySelector(&quot;video&quot;).pause();d.close()">×</button>
  <video src="/final_final_besties.mp4" controls playsinline preload="metadata" style="display:block;max-width:95vw;max-height:90vh;width:auto;height:auto;margin:auto;"></video>
</dialog>


## 1. UX

<div class="feature-split">

<div class="feature-copy">

<p style="margin:0 0 1.25rem;">A thin SwiftUI client presents the personas as FaceTime-style conversational agents.</p>

<p style="margin:0 0 1.25rem;">The phone handles interaction rather than inference: capturing speech, displaying transcripts, streaming synthesized voice, and animating each persona — poorly.</p>

- 1:1 text and streaming voice conversations
- Group conversations
- Persona-specific voices and behavior
- Runtime telemetry including latency, tokens, and time-to-first-audio

</div>

<div class="feature-image">

<a href="/projects/all-lllm-pod/ux/" class="feature-image-button" aria-label="Open ALL-LLLM Pod UX" style="display:flex;height:100%;">
  <img src="/all-lllm-pod/ux/main.PNG" alt="ALL-LLLM Pod UX" style="display:block;width:100%;height:100%;object-fit:cover;object-position:top;" />
</a>

</div>

</div>

## 2. Runtime

ALL-LLLM runs entirely on consumer hardware and has gone through three major architectures, each reflecting a step forward in how I build with AI and understand the systems underneath it.

<div class="feature-split" style="align-items:flex-start;">

<div>

- **v1 — Mistral 7B + F5-TTS:** local-inference and synthesized-voice prototype
- **v2 — Qwen3.6-30B:** PC handled speech and runtime services; M4 MacBook Pro handled LLM inference through oMLX
- **v3 — Qwen3.8-27B:** LLM inference moved back to the PC GPU; Mac handles Pocket-TTS and Hibi; iPhone handles ASR

</div>

<div class="feature-image" style="align-self:stretch;">
  <a href="/all-lllm-pod/runtime/v3-all-lllm.png" target="_blank" style="display:flex;height:100%;background:#f5f2e9;border:3px solid #777772;border-radius:14px;padding:10px;overflow:hidden;box-shadow:0 6px 14px rgba(0,0,0,0.14);">
    <img src="/all-lllm-pod/runtime/v3-all-lllm.png" alt="ALL-LLLM Pod v3 architecture" style="width:100%;height:100%;object-fit:contain;object-position:top;border-radius:8px;" />
  </a>
</div>

</div>

## 3. Transcript Intelligence

The source transcripts became a project of their own — and were by far the most enjoyable and challenging part of the project.

<div class="feature-split" style="align-items:flex-start;">

<div>

- **WhisperX** provided the canonical words and timestamps
- **NVIDIA NeMo** decided who spoke inside those boundaries by majority vote
- **Human-in-the-loop tooling** handled review and repair

[**🌐 View transcript intelligence →**](/projects/all-lllm-pod/transcript-intelligence/)

</div>
<div style="display:flex;flex-direction:column;gap:16px;">

<a href="#transcript-modal" style="display:block;padding:8px;background:#f5f2e9;border:3px solid #777772;border-radius:14px;overflow:hidden;box-shadow:0 6px 14px rgba(0,0,0,0.14);cursor:zoom-in;">
  <img
    src="/all-lllm-pod/transcript-intelligence/transcript.png"
    alt="WhisperX, NVIDIA NeMo RTTM, and labeled transcript example"
    style="display:block;width:100%;height:auto;border-radius:8px;"
  />
</a>

<div style="padding:8px;background:#f5f2e9;border:3px solid #777772;border-radius:14px;overflow:hidden;box-shadow:0 6px 14px rgba(0,0,0,0.14);">
  <video
    controls
    preload="metadata"
    style="display:block;width:100%;height:auto;border-radius:8px;"
  >
    <source src="https://pdf-sorcerer.github.io/alp/ex1.mp4" type="video/mp4" />
  </video>
</div>

</div>

</div>

<div id="transcript-modal" class="transcript-modal">
  <a href="#" class="transcript-modal-backdrop" aria-label="Close expanded image"></a>

  <div class="transcript-modal-card">
    <a href="#" class="transcript-modal-close" aria-label="Close">×</a>
    <img
      src="/all-lllm-pod/transcript-intelligence/transcript.png"
      alt="Expanded WhisperX, NVIDIA NeMo RTTM, and labeled transcript example"
    />
  </div>
</div>

<style>
.transcript-modal {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 9999;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.transcript-modal:target {
  display: flex;
}

.transcript-modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.78);
}

.transcript-modal-card {
  position: relative;
  z-index: 1;
  width: min(1500px, 95vw);
  max-height: 94vh;
  padding: 10px;
  background: #f5f2e9;
  border: 3px solid #777772;
  border-radius: 14px;
  box-shadow: 0 20px 70px rgba(0,0,0,0.45);
  overflow: auto;
}

.transcript-modal-card img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.transcript-modal-close {
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 2;
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: rgba(0,0,0,0.75);
  color: white;
  font-size: 26px;
  line-height: 1;
  text-decoration: none;
}

.all-lllm-media-card {
  appearance: none;
  width: 100%;
  padding: 0;
  cursor: pointer;
  text-align: left;
}

.all-lllm-media-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  background: rgba(13, 17, 23, 0.96);
}

.all-lllm-media-modal.is-open {
  display: flex;
}

.all-lllm-media-modal video {
  max-width: min(1100px, 92vw);
  max-height: 82vh;
  width: auto;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.5);
}

.all-lllm-media-modal-label {
  font-family: monospace;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
}

.all-lllm-media-close {
  position: absolute;
  top: 20px;
  right: 24px;
  padding: 7px 12px;
  border: 1px solid rgba(255,255,255,0.28);
  border-radius: 6px;
  background: transparent;
  color: rgba(255,255,255,0.8);
  cursor: pointer;
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}


.all-lllm-media-card {
  position: relative;
}

.all-lllm-media-card::after {
  content: "▶";
  position: absolute;
  left: 50%;
  top: 38%;
  transform: translate(-50%, -50%);
  color: rgba(255,255,255,0.78);
  font-size: 2rem;
  pointer-events: none;
}

.media-thumb-video {
  pointer-events: none;
}


.all-lllm-media-modal[hidden] {
  display: none !important;
}


#all-lllm-media-modal-video {
  display: none !important;
}

.all-lllm-media-modal.is-open #all-lllm-media-modal-video {
  display: block !important;
}

</style>

## 4. Media

<div class="all-lllm-media-grid">

  <button class="all-lllm-media-card" type="button" data-media-src="https://pdf-sorcerer.github.io/alp/jcal_v0.mp4" data-media-label="Jason Calacanis">
    <video class="media-thumb-video" src="https://pdf-sorcerer.github.io/alp/jcal_v0.mp4#t=0.1" muted playsinline preload="metadata"></video>
    <span>Jason Calacanis</span>
  </button>

  <button class="all-lllm-media-card" type="button" data-media-src="https://pdf-sorcerer.github.io/alp/chamathv0.mp4" data-media-label="Chamath Palihapitiya">
    <video class="media-thumb-video" src="https://pdf-sorcerer.github.io/alp/chamathv0.mp4#t=0.1" muted playsinline preload="metadata"></video>
    <span>Chamath Palihapitiya</span>
  </button>

  <button class="all-lllm-media-card" type="button" data-media-src="https://pdf-sorcerer.github.io/alp/friedbergv0.mp4" data-media-label="David Friedberg">
    <video class="media-thumb-video" src="https://pdf-sorcerer.github.io/alp/friedbergv0.mp4#t=0.1" muted playsinline preload="metadata"></video>
    <span>David Friedberg</span>
  </button>

  <button class="all-lllm-media-card" type="button" data-media-src="https://pdf-sorcerer.github.io/alp/sacks_v0.mp4" data-media-label="David Sacks">
    <video class="media-thumb-video" src="https://pdf-sorcerer.github.io/alp/sacks_v0.mp4#t=0.1" muted playsinline preload="metadata"></video>
    <span>David Sacks</span>
 
<div class="all-lllm-media-modal" id="all-lllm-media-modal" aria-hidden="true" hidden>
  <button class="all-lllm-media-close" type="button" aria-label="Close media">Close ×</button>
  <video id="all-lllm-media-modal-video" controls playsinline></video>
  <div class="all-lllm-media-modal-label" id="all-lllm-media-modal-label"></div>
</div>

 </button>

</div>

<style>
.all-lllm-media-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 24px;
}

.all-lllm-media-card {
  display: block;
  overflow: hidden;
  border: 1px solid #d8d2c5;
  border-radius: 10px;
  background: #0d1117;
  text-decoration: none;
}

.all-lllm-media-card video {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background: #000;
}

.all-lllm-media-card span {
  display: block;
  padding: 11px 14px;
  color: #8d9094;
  font-family: monospace;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 800px) {
  .all-lllm-media-grid {
    grid-template-columns: 1fr;
  }
}
</style>


<script is:inline>
  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('all-lllm-media-modal');
    const video = document.getElementById('all-lllm-media-modal-video');
    const label = document.getElementById('all-lllm-media-modal-label');
    const close = modal?.querySelector('.all-lllm-media-close');

    if (!modal || !video || !label || !close) return;

    const closeModal = () => {
      video.pause();
      video.removeAttribute('src');
      video.load();
      modal.classList.remove('is-open');
      modal.hidden = true;
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    document.querySelectorAll('.all-lllm-media-card').forEach((card) => {
      card.addEventListener('click', () => {
        video.src = card.dataset.mediaSrc || '';
        label.textContent = card.dataset.mediaLabel || '';
        modal.hidden = false;
        modal.hidden = false;
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        video.play();
      });
    });

    close.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  });
</script>

