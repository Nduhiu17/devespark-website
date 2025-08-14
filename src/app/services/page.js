import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function ServicesList() {
  const dir = path.join(process.cwd(), 'content/services');
  const files = fs.readdirSync(dir);
  const services = files.map((file) => {
    const filePath = path.join(dir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return {
      slug: file.replace(/\.md$/, ''),
      title: data.title || file.replace(/\.md$/, ''),
    };
  });

  return (
    <main className="prose mx-auto py-16">
      <h1>Our Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.slug}>
            <Link href={`/services/${service.slug}`}>
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
