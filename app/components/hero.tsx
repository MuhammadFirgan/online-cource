'use-client'
import Image from "next/image";

export default function Hero() {
  return (

    <section className='flex flex-col gap-3 items-center overflow-x-hidden md:min-h-[500px] md:flex-row md:justify-between'>
      <div className='relative'>
        <h1 className='text-4xl mb-2 text-emerald-500 font-semibold md:text-6xl'>Learn Your Own Future</h1>
        <span className='block text-base my-3 md:max-w-sm md:text-lg'>Education is the key to controlling the future. We allow you to design your education according to your goals and dreams.</span>
        <button className='px-6 py-2 bg-emerald-500 text-white rounded-lg'>Study Now</button>
      </div>
      <div className="w-full flex justify-end items-end md:h-screen relative">

        <Image src="/man.png" alt="hero image" width="700" height="0" className="drop-shadow-md md:w-[550px] z-10"/>
        {/* <Image src="/hero_bg.png" alt="hero image" fill className='absolute top-0 -right-40 w-full md:h-screen'/> */}
        
      </div>
    </section>

  )
}
