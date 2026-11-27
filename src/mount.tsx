import type { ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/libre-baskerville/latin-400.css'
import '@fontsource/libre-baskerville/latin-700.css'
import '@fontsource/ibm-plex-sans/latin-400.css'
import '@fontsource/ibm-plex-sans/latin-500.css'
import '@fontsource/ibm-plex-sans/latin-600.css'
import '@fontsource/jetbrains-mono/latin-400.css'
import './styles/site.css'

export function mount(page: ReactNode) {
  const root = document.getElementById('root')
  if (!root) throw new Error('Missing page root')

  createRoot(root).render(page)
}
