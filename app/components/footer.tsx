import { footerLinks } from "../constans";
import { FaComputer, FaInstagram, FaYoutube, FaGithub, FaFacebook } from "react-icons/fa6";
import { NextFont } from "next/dist/compiled/@next/font";
import { Caveat_Brush, Poppins } from "next/font/google";
import Link from 'next/link'

export const caveat_brush : NextFont = Caveat_Brush({
    weight: '400',
    subsets: ['latin']
  })

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center py-5 border-t-2 border-gray-200 text-sm md:px-14 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1">
                <FaComputer className="text-2xl text-emerald-500" />
                <h1 className={`text-3xl text-black ${caveat_brush.className}`}>C4U</h1>
            </div>
            <div className="flex flex-col gap-2 text-2xl items-center text-gray-500">
              <div className="flex gap-4">
                <Link href='/'>
                  <FaInstagram />
                </Link>
                <Link href='/'>
                  <FaYoutube/>
                </Link>
                <Link href='/'>
                  <FaFacebook/>
                </Link>
                <Link href='/'>
                  <FaGithub/>
                </Link>
              </div>
              <div className="text-base">
                All Right Reserved
              </div>
            </div>
        </div>
        <div className='flex justify-center gap-4 mt-4'>
          <div className="flex gap-4 md:gap-6">
            {footerLinks.map((footerLink, i) => (
              <div key={i} className="flex flex-col text-gray-500 ">
                <h3 className="font-semibold text-gray-700 text-base">{footerLink.title}</h3>
                <div className="flex flex-col ">
                  {footerLink.links.map(link => (
                    <Link key={link.title} href={link.url} >{link.title}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className='text-gray-500'>
            <div className="flex flex-col">
              <h3 className='font-semibold text-gray-700'>CopyRight</h3>
              <Link href=''>Privacy & Policy</Link>
              <Link href=''>Terms & Condition</Link>
            </div>
          </div>
        </div>
    </footer>
  )
}
