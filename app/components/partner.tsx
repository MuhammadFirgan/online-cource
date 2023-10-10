import React from 'react'
import Image from 'next/image';

export default function Partner() {
  return (
    <section className='w-screen'>
        <span className='text-xl text-emerald-500 font-semibold md:text-2xl'>Trusted by over 14,400 companies <br />and millions of learners around the world</span>
        <div className="flex ju">
            <Image src='/google.png' alt='partner' width='90' height='90' className='md:w-72'/>
            <Image src='/netflix.png' alt='partner' width='90' height='90' className='md:w-72' />
            <Image src='/amazon.png' alt='partner' width='90' height='90' className='md:w-72' />
            <Image src='/meta.png' alt='partner' width='90' height='90' className='md:w-72' />
        </div>
    </section>
  )
}
