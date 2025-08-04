const isDevelopment = import.meta.env.DEV;

export const ghostConfig = {
  // Always use production API for content
  apiUrl: 'https://cms.punk.dev',
  contentKey: import.meta.env.VITE_GHOST_CONTENT_KEY,
  
  // Local admin for development
  adminUrl: isDevelopment ? 'http://localhost:2368' : 'https://cms.punk.dev'
};