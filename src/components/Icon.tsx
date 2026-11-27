const paths = {
  forward: 'M12 4 10.59 5.41 16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z',
  back: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z',
  chevron: 'm7.41 8.59 4.59 4.58 4.59-4.58L18 10l-6 6-6-6z',
  download: 'M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z',
  document: 'M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5zM8 13h8v2H8zm0 3h8v2H8z',
} as const

export function Icon({ name, className = 'size-4' }: { name: keyof typeof paths; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className + ' shrink-0'}>
      <path d={paths[name]} />
    </svg>
  )
}
