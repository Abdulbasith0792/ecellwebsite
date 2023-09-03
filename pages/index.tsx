import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/home/header'
import Banner from '@/components/home/banner'
import Navbar from '@/components/home/navbar'
import Footer from '@/components/home/footer'
import About from '@/components/home/about'
import Footers from '@/components/home/footer2'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      
      <Header />
      <Banner />
      <Navbar />
      <About />
      <Footer />
      <Footers />
    </div>
  )
}
