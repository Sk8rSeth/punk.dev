// src/lib/services/ghost.js
import { browser } from '$app/environment';

const GHOST_URL = import.meta.env.VITE_GHOST_URL || 'http://localhost:2368';
const GHOST_CONTENT_KEY = import.meta.env.VITE_GHOST_CONTENT_KEY;

class GhostAPI {
  constructor() {
    this.baseUrl = `${GHOST_URL}/ghost/api/content`;
    this.key = GHOST_CONTENT_KEY;
  }

  async makeRequest(endpoint, params = {}) {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    url.searchParams.append('key', this.key);
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, value);
      }
    });

    try {
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`Ghost API error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Ghost API request failed:', error);
      throw error;
    }
  }

  // Get all posts (blog content)
  async getPosts(params = {}) {
    const defaultParams = {
      include: 'tags,authors',
      formats: 'html,plaintext',
      limit: 'all',
      ...params
    };
    
    const response = await this.makeRequest('/posts/', defaultParams);
    return response.posts || [];
  }

  // Get single post by slug
  async getPostBySlug(slug) {
    const response = await this.makeRequest(`/posts/slug/${slug}/`, {
      include: 'tags,authors',
      formats: 'html,plaintext'
    });
    return response.posts?.[0] || null;
  }

  // Get all pages (for products, branches, etc.)
  async getPages(params = {}) {
    const defaultParams = {
      include: 'tags',
      formats: 'html,plaintext',
      limit: 'all',
      ...params
    };
    
    const response = await this.makeRequest('/pages/', defaultParams);
    return response.pages || [];
  }

  // Get single page by slug
  async getPageBySlug(slug) {
    const response = await this.makeRequest(`/pages/slug/${slug}/`, {
      include: 'tags',
      formats: 'html,plaintext'
    });
    return response.pages?.[0] || null;
  }

  // Get pages by tag (for products, branches)
  async getPagesByTag(tag, params = {}) {
    const allPages = await this.getPages({
      filter: `tag:${tag}`,
      ...params
    });
    return allPages;
  }

  // Get settings
  async getSettings() {
    const response = await this.makeRequest('/settings/');
    return response.settings || {};
  }
}

export const ghostAPI = new GhostAPI();

// Utility functions for your existing code structure
export async function getContentFromDirectory(directory) {
  try {
    switch (directory) {
      case 'blog':
        const posts = await ghostAPI.getPosts();
        return posts.map(transformGhostPost);
      
      case 'products':
        const products = await ghostAPI.getPagesByTag('product');
        return products.map(transformGhostPage);
      
      case 'branches':
        const branches = await ghostAPI.getPagesByTag('branch');
        return branches.map(transformGhostPage);
      
      default:
        return [];
    }
  } catch (error) {
    console.error(`Failed to get content from ${directory}:`, error);
    return [];
  }
}

export async function getContentBySlug(directory, slug) {
  try {
    if (directory === 'blog') {
      const post = await ghostAPI.getPostBySlug(slug);
      return post ? transformGhostPost(post) : null;
    } else {
      const page = await ghostAPI.getPageBySlug(slug);
      return page ? transformGhostPage(page) : null;
    }
  } catch (error) {
    console.error(`Failed to get content by slug ${slug}:`, error);
    return null;
  }
}

// Transform Ghost data to match your existing structure
function transformGhostPost(post) {
  return {
    slug: post.slug,
    title: post.title,
    date: post.published_at,
    excerpt: post.excerpt,
    featuredImage: post.feature_image,
    tags: post.tags?.map(tag => tag.name) || [],
    content: post.html,
    plaintext: post.plaintext,
    Content: createHTMLComponent(post.html)
  };
}

function transformGhostPage(page) {
  return {
    slug: page.slug,
    title: page.title,
    excerpt: page.excerpt,
    featuredImage: page.feature_image,
    tags: page.tags?.map(tag => tag.name) || [],
    content: page.html,
    plaintext: page.plaintext,
    Content: createHTMLComponent(page.html),
    // Extract custom fields from page content or use tags
    price: extractCustomField(page, 'price'),
    category: extractCustomField(page, 'category'),
    shopifyLink: extractCustomField(page, 'shopify-link'),
    featured: page.featured || false
  };
}

// Create a Svelte component for HTML content
function createHTMLComponent(html) {
  return function HTMLContent() {
    return {
      render: () => ({ html })
    };
  };
}

// Extract custom fields from Ghost content
function extractCustomField(page, fieldName) {
  // You can extract from tags or use Ghost's custom fields
  const tag = page.tags?.find(tag => tag.name.startsWith(`${fieldName}:`));
  return tag ? tag.name.split(':')[1] : '';
}