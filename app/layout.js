import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import FirstVisitLoader from '@/components/FirstVisitLoader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ayushsonone07.dev',
  description: 'Ayush ka portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FirstVisitLoader />
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer/>
      </body>
    </html>
  )
}
