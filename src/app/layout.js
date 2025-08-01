import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Labubu Maker - AI-powered Labubu Creative Platform',
  description: 'Create amazing Labubu-themed artwork with our advanced AI-powered creative platform. Generate wallpapers, travel scenes, remove backgrounds, and swap poses effortlessly.',
  keywords: 'labubu-maker, AI labubu, labubu creator, labubu wallpaper, labubu art generator, AI-powered Labubu creative platform',
  openGraph: {
    title: 'Labubu Maker - AI-powered Labubu Creative Platform',
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
      </body>
    </html>
  )
}