import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f8f1eb',
          100: '#f1e6dd',
          200: '#e1cbb8',
          300: '#d0af8e',
          400: '#b78f5d',
          500: '#9b6d3d',
          600: '#734d2d',
          700: '#4f3623',
          800: '#2f2219',
          900: '#1a120e'
        }
      },
      boxShadow: {
        luxury: '0 20px 50px rgba(64, 38, 20, 0.15)'
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at top, rgba(180, 130, 90, 0.28), transparent 45%)'
      }
    }
  },
  plugins: []
};

export default config;
