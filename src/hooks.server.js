// src/hooks.server.js
import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // Protect admin routes
  if (event.url.pathname.startsWith('/admin')) {
    // In production environments, add authentication
    if (process.env.NODE_ENV === 'production') {
      // Get authorization header
      const authHeader = event.request.headers.get('authorization');
      
      // Basic auth implementation
      if (!authHeader || !authHeader.startsWith('Basic ')) {
        return new Response('Authentication required', {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="Admin Area"'
          }
        });
      }
      
      // Decode credentials
      const base64Credentials = authHeader.split(' ')[1];
      const credentials = atob(base64Credentials);
      const [username, password] = credentials.split(':');
      
      // Check against environment variables
      const validUsername = process.env.ADMIN_USERNAME || 'admin';
      const validPassword = process.env.ADMIN_PASSWORD || 'password';
      
      if (username !== validUsername || password !== validPassword) {
        return new Response('Invalid credentials', {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="Admin Area"'
          }
        });
      }
    }
  }
  
  const response = await resolve(event);
  return response;
}