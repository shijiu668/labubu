import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Labubu Maker | AI Generator for Labubu Wallpaper & Images',
  description: 'The ultimate AI generator for all Labubu fans. Instantly create cute Labubu Wallpaper in 4K, design custom Labubu Travels scenes, Remove Backgrounds for transparent PNGs, and use Pose Swap to perfect your images.',
  keywords: 'labubu-maker, AI labubu, labubu creator, labubu wallpaper, labubu art generator, AI-powered Labubu creative platform',
  openGraph: {
    title: 'Labubu Maker | AI Generator for Labubu Wallpaper & Images',
    description: 'Create amazing Labubu-themed artwork with our advanced AI-powered creative platform.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-EREDZ5N339"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-EREDZ5N339');
          `}
        </Script>
      </body>
    </html>
  )
}