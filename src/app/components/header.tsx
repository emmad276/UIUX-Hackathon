import React from 'react'
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";
import bg from "@/app/public/Product Image.png" 
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ["latin"] });
const Header = () => {
  return (
    <div className='bg-[#F0F2F3] w-[77.5%] mx-auto h-[600px] top-[204px] left-[300px] flex items-center gap-24'>
        <div className='w-[557px] h-[337px] ml-12'>
            <h1 className={`leading-[14px] tracking-[12%] text-[#272343] ${inter.className} font-normal text-[14px]`}>WELCOME TO CHAIRY</h1>
            <h1 className={`mt-2 ${inter.className} font-bold text-[60px] leading-[66px] text-[#272343] w-[557px] h-[198] top-[267px] left-[70px] `}>Best Furniture
              Collection for your
              interior.
            </h1>
            <div className='mt-6 text-white items-center flex w-[171px] h-[52px]  rounded-lg py-[14px] px-[24px] gap-[20px] bg-[#029FAE]'>
          <h1>Shop Now</h1>
          <FaArrowRightLong  />


        </div>
        </div>
        <div className='mr-12'>
            <Image className='' src={bg} alt=''></Image>
        </div>
       

    </div>
  )
}

export default Header