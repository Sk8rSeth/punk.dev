/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        gridTemplateColumns: {
          'main': 'repeat(24, 1fr)',
        },
        gridTemplateRows: {
          'main': 'repeat(10, 1fr)',
        },
      },
    },
    plugins: [],
  }
  