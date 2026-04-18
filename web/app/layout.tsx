import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import AosInit from '@/components/ui/AosInit'
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
  metadataBase: new URL('https://antonioromero.dev'),
  title: {
    default: 'Antonio Romero | Desarrollador Web Junior',
    template: '%s | Antonio Romero',
  },
  description:
    'Portfolio profesional de Antonio Romero, desarrollador web junior. Proyectos reales, diseño moderno, frontend, backend y desarrollo web con enfoque profesional.',
  keywords: [
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
  applicationName: 'Antonio Romero Portfolio',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Antonio Romero | Desarrollador Web Junior',
    description:
      'Portfolio profesional moderno de Antonio Romero. Proyectos reales, diseño impactante y enfoque profesional.',
    url: 'https://antonioromero.dev',
    siteName: 'Antonio Romero Portfolio',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antonio Romero | Desarrollador Web Junior',
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
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
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
        <AosInit />

        <a href="#contenido" className="skip-link">
          Saltar al contenido principal
        </a>

        {children}
      </body>
    </html>
  )
}