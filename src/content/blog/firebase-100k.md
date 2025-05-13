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
image: https://d3e0luujhwn38u.cloudfront.net/resized/8GtQMGxQ0kxD84V_Wcd2Zohmey392OW69c56gd88on4/s:1200/plain/s3://typefully-user-uploads/img/original/10070/abdf7229-d194-4b8d-b6e3-685e195cc021.png__edited
category: development
isNew: true
---

---

[Original post](https://www.reddit.com/r/selfhosted/comments/1kdxqwj/burned_by_cloud_100k_looking_at_self_hosting)

Conclusion: Never let your Firebase project alone!

Fun Fact: <img src="https://d3e0luujhwn38u.cloudfront.net/resized/qIQXsE93cF-dR0O6oSkXDG7eX_k-OATJYUGWF4LL9NI/s:1200/plain/s3://typefully-user-uploads/img/original/10070/b071861a-8c31-4a6e-9cd2-9921bde538e8.png__edited" alt="Firebase Storage" >

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

Also might start my own blog / advocacy group at stopuncappedbilling.com. 

Looking into Coolify now. It seems cool as the name implies. Here are some tips to [protect yourself](https://www.reddit.com/r/indiehackers/comments/1khusk5/protect_yourself_and_your_indie_project_what_i/) that I typed up for indie developers.

RIP [simmer.io](https://simmer.io). 

2017-2025.

