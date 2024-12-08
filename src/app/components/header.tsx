import React from 'react'
import Image from 'next/image'
import rbg from "@/app/public/r-bg.png"
import bg from "@/app/public/BG.png" 
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ["latin"] });
const Header = () => {
  return (
    <div className='bg-[#F0F2F3] w-[77.5%] mx-auto h-[800px] top-[204px] left-[300px] flex items-center'>
        <div className='w-[557px] h-[337px] '>
            <h1 className={`${inter.className} font-normal text-[14px]`}>Welcome to chairy</h1>
        </div>
        <div>
            <Image src={bg} alt=''></Image>
        </div>

    </div>
  )
}

export default Header