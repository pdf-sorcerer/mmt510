---
title: "Attribution"
description: "Signed attribution links and real-time push notifications for observing interaction with application materials."
date: 2026-07-04
category: "Product Systems"
tags: ["HMAC", "Vercel", "Supabase", "APNs", "Observability"]
stars: 0
emoji: "↗"
featured: false
---

## The goal

Job applications normally disappear into a black box after submission.

Attribution adds a narrow observability layer to résumé links so I can detect interaction with application materials without changing the destination or slowing down the person clicking.

## How it works

Each application gets unique links for resources such as my portfolio and LinkedIn profile. A click first passes through `mmt510.com`, where the attribution token is verified and the event is logged, before the visitor is immediately redirected to the intended asset.

```text
Resume link
    ↓
mmt510.com
    ↓
Signed HMAC token
    ↓
Verify + log event
    ↓
Immediate redirect
    ↓
Intended asset
