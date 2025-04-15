import { getContentBySlug } from '$lib/utils/content.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const post = await getContentBySlug('blog', params.slug);
  
  if (!post) {
    throw error(404, 'Blog post not found');
  }
  
  return {
    post
  };
}