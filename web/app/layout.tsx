import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import ScrollAnimations from '@/components/ui/ScrollAnimations'
import WhatsappButton from '@/components/ui/WhatsappButton'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sofalor.es'),
  title: {
    default: 'Sofalor | Portfolio de Antonio Romero',
    template: '%s | Sofalor',
  },
  description:
    'Sofalor, portfolio profesional de Antonio Romero, desarrollador web junior. Proyectos reales, diseño moderno, frontend, backend y desarrollo web con enfoque profesional.',
  keywords: [
    'Sofalor',
    'Antonio Romero',
    'portfolio desarrollador web',
    'desarrollador web junior',
    'Next.js portfolio',
    'frontend',
    'backend',
    'desarrollador full stack junior',
    'portfolio moderno',
    'programador web',
  ],
  authors: [{ name: 'Antonio Romero' }],
  creator: 'Antonio Romero',
  applicationName: 'Sofalor',
  category: 'technology',
  manifest: '/site.webmanifest',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sofalor | Portfolio de Antonio Romero',
    description:
      'Portfolio profesional moderno de Antonio Romero. Proyectos reales, diseño impactante y enfoque profesional.',
    url: 'https://sofalor.es',
    siteName: 'Sofalor',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sofalor | Portfolio de Antonio Romero',
    description:
      'Portfolio profesional moderno de Antonio Romero. Proyectos reales, diseño impactante y enfoque profesional.',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#081120',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        <ScrollAnimations />

        <a href="#contenido" className="skip-link">
          Saltar al contenido principal
        </a>

        <main id="contenido" tabIndex={-1}>
          {children}
        </main>

        <WhatsappButton />
      </body>
    </html>
  )
}