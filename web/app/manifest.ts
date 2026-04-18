import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Antonio Romero Portfolio',
    short_name: 'Antonio Romero',
    description:
      'Portfolio profesional de Antonio Romero, desarrollador web junior.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#081120',
    lang: 'es',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}