import React from 'react'
import logo1 from "@/app/public/Logo1.png"
import logo2 from "@/app/public/Logo2.png"
import logo3 from "@/app/public/Logo3.png"
import logo4 from "@/app/public/Logo4.png"
import logo5 from "@/app/public/Logo5.png"
import logo6 from "@/app/public/Logo6.png"
import logo7 from "@/app/public/Logo7.png"
import Image from 'next/image'

const Company = () => {
  return (
    <div className='w-[77.5%] mt-12 mx-auto h-[139px] flex justify-between'>
        <Image className='object-contain' src={logo1} alt='logo1'></Image>
        <Image className='object-contain' src={logo2} alt='logo2'></Image>
        <Image className='object-contain' src={logo3} alt='logo3'></Image>
        <Image className='object-contain' src={logo4} alt='logo4'></Image>
        <Image className='object-contain' src={logo5} alt='logo5'></Image>
        <Image className='object-contain' src={logo6} alt='logo6'></Image>
        <Image className='object-contain' src={logo7} alt='logo7'></Image>

    </div>
  )
}

export default Company