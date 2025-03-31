// svelte.config.js
import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svx'],
  
  preprocess: [
    mdsvex({
      extensions: ['.md', '.svx'],
      layout: {
        blog: 'src/lib/layouts/LogPost.svelte',
        product: 'src/lib/layouts/Product.svelte',
        branch: 'src/lib/layouts/Branch.svelte'
      }
    })
  ],

  kit: {
    adapter: adapter()
  }
};

export default config;