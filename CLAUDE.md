# ServerlessHorrors.com

Astro static site (Tailwind CSS, Svelte components) deployed on Vercel.

## Adding a New Serverless Horror Story

### 1. Create the post file

Create `src/content/blog/{service}-{amount}.md` (e.g. `vercel-46k.md`).

Frontmatter schema:

```yaml
---
title: $46,485.99           # The bill amount (max 100 chars)
description: Short summary of the horror story...
tags:
  - vercel                   # Service name + relevant tags (bandwidth, ddos, etc.)
  - bandwidth
author: Andras Bacsai
authorTwitter: heyandras
date: "2026-02-10T12:34:56.789Z"  # ISO date string
image: /assets/{service}-{amount}.{ext}  # Local image in public/assets/
category: development
isNew: true                  # Shows "New" badge on homepage
---
```

### 2. Add the post image

Save the screenshot/image to `public/assets/{service}-{amount}.{ext}` (png/jpg/webp).

All images must be local — never use external URLs in frontmatter `image:` fields. The `BaseHead.astro` component automatically converts relative paths to absolute URLs for `og:image` and `twitter:image` meta tags.

### 3. Write the post body

Follow this pattern:

```markdown
---

[Original post](https://x.com/user/status/123456)

Conclusion: Brief takeaway. Note if refunded.

---

__tldr: One-sentence summary of what happened.__
```

Optional sections: Fun Fact with `<img>` (use local paths), extended quotes/context.

### 4. Update the previous "new" post

Find the previous post with `isNew: true` and set it to `isNew: false`.

### 5. No other config needed

Astro automatically handles routing (`/all/{slug}`), RSS feed, and homepage listing sorted by date.

## Project Structure

- `src/content/blog/*.md` — Blog posts (Astro Content Collections)
- `src/content/config.ts` — Content schema
- `src/config.ts` — Site metadata (name, URL, author, default image)
- `src/components/BaseHead.astro` — Meta tags (og:image, twitter:image)
- `src/pages/index.astro` — Homepage
- `src/pages/all/[slug].astro` — Individual post pages
- `src/layouts/post.astro` — Post layout
- `public/assets/` — All local images (post images, blog cover, etc.)
