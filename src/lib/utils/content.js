import { getContentFromDirectory as getGhostContent, getContentBySlug as getGhostBySlug } from '../services/ghost.js';

// Replace your existing functions with Ghost API calls
export const getContentFromDirectory = getGhostContent;
export const getContentBySlug = getGhostBySlug;

// Keep your existing getSiteConfig for local config
export async function getSiteConfig() {
  // You can store site config in Ghost settings or keep local
  const configs = await import('../../content/config/config.json');
  return configs.default || {};
}







// export async function getContentFromDirectory(directory) {
//   const contentFiles = import.meta.glob('/src/content/**/*.{md,json}', { eager: true });
  
//   const items = Object.entries(contentFiles)
//     .filter(([path]) => path.includes(`/src/content/${directory}/`))
//     .map(([path, module]) => {
//       const slug = path.split('/').pop().replace(/\.(md|json)$/, '');
      
//       if (path.endsWith('.json')) {
//         return module.default;
//       }
      
//       // Handle Decap CMS frontmatter structure
//       const frontmatter = module.metadata || {};
//       const Content = module.default;
      
//       return {
//         slug,
//         ...frontmatter,
//         Content
//       };
//     });
  
//   // Sort by date if available (most recent first)
//   if (items.length > 0 && items[0].date) {
//     return items.sort((a, b) => new Date(b.date) - new Date(a.date));
//   }
  
//   return items;
// }

// export async function getContentBySlug(directory, slug) {
//   const items = await getContentFromDirectory(directory);
//   return items.find(item => item.slug === slug);
// }

// export async function getSiteConfig() {
//   const configs = await getContentFromDirectory('config');
//   return configs[0] || {};
// }