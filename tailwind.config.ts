import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0f172a',
        fg: '#f8fafc',
        muted: '#94a3b8',
        panel: '#0b1224',
        border: '#1e293b',
        accent: '#38bdf8',
      },
    },
  },
  plugins: [],
}
export default config
