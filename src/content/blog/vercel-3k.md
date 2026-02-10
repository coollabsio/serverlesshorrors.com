---
title: $3,000.69
description: Attention Vercel users. Be careful what you test or deploy to Vercel. I decided to try out...
tags:
  - vercel
  - bandwidth
  - wrong-implementation
author: Andras Bacsai
authorTwitter: heyandras
date: "2023-04-05T12:34:56.789Z"
image: /assets/vercel-3k.png
category: development
---

--- 

[Original post](https://twitter.com/shoeboxdnb/status/1643639119824801793)

Conclusion: Vercel CEO confirmed -> won't be charge.

--- 

tldr: Error in the code caused uncaught exception which caused subsequent requests to fail and retry, which caused a spike in bandwidth usage ($500 / hour).
