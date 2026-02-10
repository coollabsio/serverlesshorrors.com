---
title: $1,300.69
description: Imagine you create an empty, private AWS S3 bucket in a region of your preference...
tags:
  - aws
  - s3
  - security
  - ddos
author: Andras Bacsai
authorTwitter: heyandras
date: "2024-04-29T12:34:56.789Z"
image: /assets/aws-1.3k.webp
category: development
---

--- 

[Original post](https://medium.com/@maciej.pocwierz/how-an-empty-s3-bucket-can-make-your-aws-bill-explode-934a383cb8b1)

Conclusion: Never let your empty, private S3 bucket alone.

--- 

__tldr: AWS S3 charges for unauthorized incoming requests, so anyone who knows your bucket name, could ddos you and make your bill go brrrr (huge)!__
