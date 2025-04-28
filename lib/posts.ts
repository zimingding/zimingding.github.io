// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content');

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => ({
    //   params: {
        slug: fileName.replace(/\.md$/, '')
    //   }
    }));
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Use gray-matter to parse the post metadata
  const { data, content } = matter(fileContents);
  
  // Use remark to convert markdown into HTML
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content);
    
  const contentHtml = processedContent.toString();
  
  return {
    slug,
    frontMatter: {
      ...data,
      date: data.date.toString()
    },
    content: contentHtml
  };
}

export async function getAllPosts() {
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(
    slugs.map(async ({ slug }) => {
      const post = await getPostBySlug(slug);
      return post;
    })
  );
  
  // Sort posts by date
  return posts.sort((post1, post2) => 
    (new Date(post1.frontMatter.date) > new Date(post2.frontMatter.date) ? -1 : 1)
  );
}