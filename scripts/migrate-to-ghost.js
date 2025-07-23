// scripts/migrate-to-ghost.js
import fs from 'fs';
import path from 'path';
import GhostAdminAPI from '@tryghost/admin-api';

const api = new GhostAdminAPI({
  url: process.env.GHOST_URL || 'http://localhost:2368',
  key: process.env.GHOST_ADMIN_KEY,
  version: 'v5.0'
});

async function migrateContent() {
  // Read existing markdown files
  const blogDir = 'src/content/blog';
  const productsDir = 'src/content/products';
  
  // Migrate blog posts
  const blogFiles = fs.readdirSync(blogDir);
  for (const file of blogFiles) {
    if (file.endsWith('.md')) {
      const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
      const { data: frontmatter, content: body } = parseFrontmatter(content);
      
      await api.posts.add({
        title: frontmatter.title,
        mobiledoc: convertMarkdownToMobiledoc(body),
        published_at: frontmatter.date,
        excerpt: frontmatter.excerpt,
        feature_image: frontmatter.featuredImage,
        tags: frontmatter.tags?.map(tag => ({ name: tag })) || [],
        status: 'published'
      });
    }
  }
  
  // Migrate products as pages
  const productFiles = fs.readdirSync(productsDir);
  for (const file of productFiles) {
    if (file.endsWith('.md')) {
      const content = fs.readFileSync(path.join(productsDir, file), 'utf8');
      const { data: frontmatter, content: body } = parseFrontmatter(content);
      
      await api.pages.add({
        title: frontmatter.title,
        mobiledoc: convertMarkdownToMobiledoc(body),
        excerpt: frontmatter.excerpt,
        feature_image: frontmatter.featuredImage,
        tags: [
          { name: 'product' },
          { name: `price:${frontmatter.price}` },
          { name: `category:${frontmatter.category}` },
          { name: `shopify-link:${frontmatter.shopifyLink}` }
        ].filter(tag => tag.name.split(':')[1]),
        featured: frontmatter.featured || false,
        status: 'published'
      });
    }
  }
}

// Run migration
migrateContent().catch(console.error);