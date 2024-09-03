import HeroSection from '@/components/herosection'
import ProductsList from '@/app/detailproduct/page'
import Image from 'next/image'
import FlashSale from '@/components/flashsale'

export default function Home() {
  return (
    <main className="">
      {/* <h1 className="font-bold">Paling Populer</h1>
      <ProductsList /> */}
      <HeroSection></HeroSection>
      <FlashSale></FlashSale>
    </main>
  )
}
