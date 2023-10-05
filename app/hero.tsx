'use-client'
import Navbar from './components/navbar' 

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className='container mx-auto px-4 py-6'>
        <h1 className='text-4xl mb-2 text-emerald-500 font-semibold'>Learn Your Own Future</h1>
        <span className='block text-base md:max-w-sm'>Education is the key to controlling the future. We allow you to design your education according to your goals and dreams.</span>
      </section>
    </>
  )
}
