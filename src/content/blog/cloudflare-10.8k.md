---
title: $10,811.41
description: A vibe-coded Durable Object alarm got stuck in an infinite loop and did 6 trillion reads and writes. Cloudflare sent a $10,811.41 bill and gave no refund...
tags:
  - cloudflare
  - durable-objects
  - vibe-coding
  - billing
author: Andras Bacsai
authorTwitter: heyandras
date: "2026-10-08T05:03:51.000Z"
image: /assets/cloudflare-10.8k.jpg
category: development
isNew: true
---

---

[Original post](https://x.com/shmily7/status/2107481028726251762)

[Follow-up](https://x.com/shmily7/status/2108060782302990699)

> Hit by a Cloudflare bill assassin: a $10k bill. The cause was a Durable Object alarm in an infinite loop in one project, which did 6 trillion reads and writes. Vibe coding failed me.

Update from the author:

- Paid the full Cloudflare bill (US$10,811.41) — "the second most expensive lesson of my life".
- The support ticket for a reduction only got bot replies in a loop.
- Cloudflare staff contacted on X and other channels said they could only "take a look", nothing more.
- All projects will move off Cloudflare to self-hosted VPS.

Conclusion: One vibe-coded Durable Object alarm kept rescheduling itself forever. Cloudflare has no hard spending limit, so the loop ran until the invoice came. Not refunded — the author paid in full.

---

__tldr: An infinite loop in a Durable Object alarm did 6 trillion reads/writes and caused a $10,811.41 Cloudflare bill that was not refunded.__
