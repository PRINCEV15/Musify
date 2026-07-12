import type { Config } from 'tailwindcss';
const config: Config = { darkMode: ['class'], content: ['./src/**/*.{ts,tsx}'], theme: { extend: { fontFamily: { sans: ['var(--font-geist-sans)', 'Inter', 'sans-serif'] }, colors: { border: 'hsl(var(--border))', background: 'hsl(var(--background))', foreground: 'hsl(var(--foreground))', primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' } }, boxShadow: { glow: '0 24px 80px rgba(94, 92, 255, .25)' } } }, plugins: [require('tailwindcss-animate')] };
export default config;
