// app/[slug]/page.tsx
import { format } from 'date-fns';
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import Link from 'next/link';

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export default async function Post({ params }: { params: Promise<{slug: string}> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  return (
    <article className="post">
      <header>
        {/* 
// @ts-expect-error: Ignore */}
        <h1>{post.frontMatter.title}</h1>
        <div className="post-date">
          {format(new Date(post.frontMatter.date), 'MMMM d, yyyy')}
        </div>
      </header>
      
      <div 
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
      
      <footer>
        <Link href="/">← All posts</Link>
      </footer>
    </article>
  );
}