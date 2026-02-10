---
title: $72,000.999
description: We Burnt $72K testing Firebase + Cloud Run and almost went Bankrupt...
tags:
  - google
  - firebase
  - cloudrun
  - wrong-implementation
  - recursion
author: Andras Bacsai
authorTwitter: heyandras
date: "2020-03-27T12:34:56.789Z"
image: /assets/firebase-cloudrun-72k.png
category: development
---

--- 

Original posts: 

[1](https://dev-blog.tomilkieway.com/72k-1/), 
[2](https://dev-blog.tomilkieway.com/72k-2/)

Conclusion: Google let go of their bill as a one-time gesture.

--- 

__tldr: Infinite, exponential recursion without a break in their code. They used Google Cloud Run (with a budget of $100 per month) and Firebase (free plan). Google automatically upgraded the Firebase free plan to pay-as-you-go because Cloud Run decided to do so (haha). Google Billing, which cuts off the project if the budget/limit is reached, had a one-day delay (Firebase Dashboard as well)!__
