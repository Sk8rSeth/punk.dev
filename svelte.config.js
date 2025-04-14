// svelte.config.js
import adapter from '@sveltejs/adapter-static';
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
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      strict: true
    }),
    paths: {
      // Required for GitHub Pages - your repo name
      base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
    }
  }
};

export default config;