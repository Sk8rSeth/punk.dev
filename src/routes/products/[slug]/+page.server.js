import { getContentBySlug } from '$lib/utils/content.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const post = await getContentBySlug('products', params.slug);
  
  if (!post) {
    throw error(404, 'Product not found');
  }
  
  return {
    post
  };
}