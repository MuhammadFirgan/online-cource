'use client'
import { NextFont } from "next/dist/compiled/@next/font";
import { Caveat_Brush, Poppins } from "next/font/google";
import { FaComputer, FaBars } from "react-icons/fa6";
import Link from "next/link";
import { useState } from 'react'

export const caveat_brush : NextFont = Caveat_Brush({
  weight: '400',
  subsets: ['latin']
})

export const poppins: NextFont = Poppins({
  weight: ['400', '600'],
  subsets: ['latin']
})


export default function Navbar() {
  const [show, setShow] = useState<boolean>(false)
  
  const handleNavbar = () => {
    setShow(!show)
    console.log(show)
  }

  return (
    <div className="w-screen px-4 my-5 shadow-lg md:flex md:items-center md:my-2 md:shadow-none md:justify-between md:px-14">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <FaComputer className="text-2xl text-emerald-500" />
          <h1 className={`text-3xl text-black ${caveat_brush.className}`}>C4U</h1>
        </div>
        <button className="md:hidden" onClick={handleNavbar} >
          <FaBars className="cursor-pointer"/>
        </button>

      </div>
      <ul className={`flex flex-col gap-3 transition-all ease-in-out delay-150 ${show ? 'h-3/5' : 'hidden'} text-black ${poppins.className} md:flex md:flex-row md:align-center md:gap-x-3`}>
        <li><Link href="">Home</Link></li>
        <li><Link href="">Course</Link></li>
        <li><Link href="">Bootcamp</Link></li>
        <li className="flex items-center gap-3 md:gap-x-3">
          <Link href="" className="px-3 py-1 border-2 border-emerald-500 rounded-lg md:py-0">Login</Link>
          <Link href="" className="px-3 py-1 rounded-lg bg-emerald-500 text-white">Register</Link>
        </li>
      </ul>
      
    </div>
  )
}
