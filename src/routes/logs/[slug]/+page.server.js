import { getContentBySlug } from '$lib/utils/content.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const post = await getContentBySlug('log', params.slug);
  
  if (!post) {
    throw error(404, 'Log post not found');
  }
  
  return {
    post
  };
}