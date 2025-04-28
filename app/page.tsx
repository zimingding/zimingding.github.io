// app/page.tsx
import Link from 'next/link';
import { format } from 'date-fns';
import { getAllPosts } from '@/lib/posts';

export default async function Home() {
  const posts = await getAllPosts();
  
  return (
    <main>
      <h1>My Blog</h1>
      <p className="intro">
        Personal thoughts on programming, philosophy, and more.
      </p>
      
      <div className="posts">
        {posts.map((post) => (
          <article key={post.slug}>
            <h2>
              <Link href={`/${post.slug}`}>
                {/* 
// @ts-expect-error: Ignore */}
                {post.frontMatter.title}
              </Link>
            </h2>
            <div className="post-date">
              {format(new Date(post.frontMatter.date), 'MMMM d, yyyy')}
            </div>
            <p>
                {/* 
// @ts-expect-error: Ignore */}
                {post.frontMatter.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}