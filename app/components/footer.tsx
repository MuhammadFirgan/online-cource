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
    <footer className="flex flex-col justify-center items-center px-4 py-5 md:px-14 md:flex-row">
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1">
                <FaComputer className="text-2xl text-emerald-500" />
                <h1 className={`text-3xl text-black ${caveat_brush.className}`}>C4U</h1>
            </div>
            <div className="flex gap-4 text-2xl text-gray-500">
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
        </div>
        <div>
          {/* <ul>
          {footerLinks.map((footerLink, i) => (
            <li>{footerLink.title}</li>
          ))}
          </ul>
          <ul>
          {footerLinks.links.map((link, i) => (
            <li key={i}>{link.title}</li>
              
          ))}

          </ul> */}
        </div>
    </footer>
  )
}
