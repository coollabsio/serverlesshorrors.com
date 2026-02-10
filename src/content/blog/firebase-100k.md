---
title: $100,000.420
description: I ran a semi popular WebGL games uploading site that was hit bad by a DoS and I got a single day firebase bill for $100k...
tags:
  - google
  - storage
  - firebase
author: Andras Bacsai
authorTwitter: heyandras
date: "2025-05-03T12:34:56.789Z"
image: /assets/firebase-100k.png
category: development
---

---

[Original post](https://www.reddit.com/r/selfhosted/comments/1kdxqwj/burned_by_cloud_100k_looking_at_self_hosting)

Conclusion: Never let your Firebase project alone!

Fun Fact: <img src="/assets/firebase-fun-fact.png" alt="Firebase Storage" >

---

From the original post:

> I had cloudflare in front of my stuff. Hacker found an uncached object and hit it 100M+ times. I stopped that and then they found my origin bucket and hit that directly.

> CF Workers can access private bucket storage to keep that more secure but workers are billed per instance/minute.

> I think I needed rate limiting too which doesn’t seem to be default.

> I can’t risk making a minor config mistake and having it cost me 100k.

> Done with cloud.

---

This is an update from the guy who got hit (my name is Rocco). 

Google refunded the bill. But my website supporting 140,000 game developers is gone. I refunded $10,000 in user subscriptions.

Cool to see this site (serverless horrors)--great initiative from Andras!

RIP [simmer.io](https://simmer.io). 

2017-2025.

