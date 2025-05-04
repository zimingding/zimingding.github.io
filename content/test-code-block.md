---
title: "Test Code Block"
date: 2025-05-04
description: "My first post exploring some ideas"
---

```js
export default async function Post({
     params }: { params: Promise<{slug: string}> })
```

```js
<h2>
    <Link href={`/${post.slug}`}>
    {/* 
// @ts-expect-error: Ignore */}
    {post.frontMatter.title}
    </Link>
</h2>
```