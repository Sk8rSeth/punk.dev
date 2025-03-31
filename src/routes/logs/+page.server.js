// src/routes/logs/+page.server.js
import { getContentFromDirectory } from '$lib/utils/content';

export async function load() {
  const posts = await getContentFromDirectory('blog');
  
  return {
    posts
  };
}