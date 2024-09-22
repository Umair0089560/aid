import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { RiUserHeartLine } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
const SHeader = () => {
  return (
    <header className="relative w-full h-auto max-lg:hidden">
    <nav className="w-full transition bg-white z-20 p-3">
      <div className="container-fluid mx-auto py-1 flex justify-between items-center">
        <div className="flex items-center md:gap-4 xl:gap-8 w-2/3">
          <div className="w-1/3 h-auto">
            <Link href="/">
              <div className="aidSvg__wrap w-[200px] m-auto logo" id="aidSvgWrapBlue">
              <Image
      src="/logo.svg"
      width={180}
      height={180}
      alt="Picture of the author"
    />
              </div>
            </Link>
          </div>
          <div className="h-6 w-px border-l-2 border-gray-200"></div>
          <div className="w-2/3 text-lg font-semibold pr-8 flex justify-between items-center text-black-50">
            <Link href="/story" className="whitespace-nowrap font-bold nav_links">Our Story</Link>
            <Link href="/appeals" className="font-bold nav_links">Appeals</Link>
            <Link href="/zakat" className="font-bold nav_links">Zakat</Link>
            <Link href="/fundraiser" className="font-bold nav_links whitespace-nowrap">Start Fundraiser</Link>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-end w-auto">
          <div className="dropdown dropdown-hover">
            <div className="hover-button text-sm font-semibold flex justify-center items-center gap-2 cursor-pointer hover:text-sblue icon">
            <IoIosContact />
              <span>Sign In</span>
            </div>
          </div>
          <button className="relative notification cursor-pointer icon">
          <RiUserHeartLine />
          </button>
          <button className="relative transition-transform duration-300 ease-in-out transform hover:scale-[1.005] hover:shadow-3xl text-dblue button-glow hover:text-white font-semibold text-sm border-sblue border-2 hover:bg-sblue rounded-lg px-4 py-2">
            <span className="transition-transform transform hover:scale-0.2">DONATE NOW</span>
          </button>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default SHeader