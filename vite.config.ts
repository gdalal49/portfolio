import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { projects } from './src/content/projects'

const resolvePage = (path: string) => fileURLToPath(new URL(path, import.meta.url))
const projectPages = projects.flatMap((project) => {
  if (!project.detail) return []
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug)) {
    throw new Error('Invalid public project slug: ' + project.slug)
  }
  const file = resolvePage('./projects/' + project.slug + '/index.html')
  if (!existsSync(file)) throw new Error('Missing case study entry: ' + file)
  return [file]
})

export default defineConfig({
  base: './',
  appType: 'mpa',
  plugins: [react(), tailwindcss()],
  server: { fs: { deny: ['.env', '.env.*', '*.{crt,pem}', '**/.git/**', '**/stitch-reference/**'] } },
  build: {
    rollupOptions: {
      input: [resolvePage('./index.html'), resolvePage('./profile/index.html'), ...projectPages],
    },
  },
})
