import { Inter } from 'next/font/google'
import './globals.css'
import TransitionProvider from '@/components/transitionProvider'

const inter = Inter({ subsets: ['latin'] })

/* How do I use and opengraph-image and twitter-image here? https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image */

export const metadata = {
  title: 'Manuel Dev Portfolio App',
  description: 'Animated portfolio page',
  openGraph: {
    images: [
      {
        url: '/opengraph-image.png',
        width: 800,
        height: 600,
        alt: 'Manuel Dev Portfolio App',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    images: [
      {
        url: '/twitter-image',
        width: 800,
        height: 600,
        alt: 'Manuel Dev Portfolio App',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  )
}
