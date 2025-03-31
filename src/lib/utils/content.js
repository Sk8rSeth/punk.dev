// src/lib/utils/content.js
export async function getContentFromDirectory(directory) {
    // Use Vite's import.meta.glob to get all markdown files
    const contentFiles = import.meta.glob('/src/content/**/*.{md,json}', { eager: true });
    
    // Filter files from the specified directory and process them
    const items = Object.entries(contentFiles)
      .filter(([path]) => path.includes(`/src/content/${directory}/`))
      .map(([path, module]) => {
        // Extract slug from path
        const slug = path.split('/').pop().replace(/\.(md|json)$/, '');
        
        // For JSON files (like config), just return the module default
        if (path.endsWith('.json')) {
          return module.default;
        }
        
        // For markdown files, process the metadata and content
        const metadata = module.metadata || {};
        const Content = module.default;
        
        return {
          slug,
          ...metadata,
          Content
        };
      });
    
    // Sort by date if available, most recent first
    if (items.length > 0 && items[0].date) {
      return items.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    }
    
    return items;
  }
  
  export async function getContentBySlug(directory, slug) {
    const items = await getContentFromDirectory(directory);
    return items.find(item => item.slug === slug);
  }
  
  export async function getSiteConfig() {
    const configs = await getContentFromDirectory('config');
    return configs[0] || {};
  }