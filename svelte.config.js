import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svx'],
  
  preprocess: [
    mdsvex({
      extensions: ['.md', '.svx'],
      layout: {
        log: 'src/lib/layouts/LogPost.svelte',
        product: 'src/lib/layouts/Product.svelte',
        branch: 'src/lib/layouts/Branch.svelte'
      }
    })
  ],

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      strict: true
    }),
	paths: {
		base: '', // Correct for custom domain
		assets: '' // Make sure assets path is correct
	}
  }
};

export default config;