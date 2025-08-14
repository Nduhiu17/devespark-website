import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/pages');
  const files = fs.readdirSync(dir);
  return files.map((file) => ({ slug: file.replace(/\.md$/, '') }));
}

export default async function Page({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/pages', `${slug}.md`);
  if (!fs.existsSync(filePath)) return <div>Page not found</div>;
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <main className="prose mx-auto py-16">
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}
