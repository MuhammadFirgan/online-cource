import Image from 'next/image'
//import Hero from './Hero/page'
import Hero from './components/hero'
import Partner from './components/partner'

export default function Home() {
  return (
    <main className='mx-4 md:mx-14'>
      <Hero />
      <Partner />
    </main>
    
  )
}
