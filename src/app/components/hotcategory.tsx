import React from 'react';
import Image from 'next/image';
import itemcard1 from '@/app/public/itemcard1.png';
import itemcard2 from '@/app/public/itemcard2.png';
import itemcard3 from '@/app/public/itemcard3.png';
import itemcard4 from '@/app/public/itemcard4.png';
import itemcard5 from '@/app/public/itemcard5.png';
import { Roboto } from 'next/font/google'


export default function HotCategory() {
  return (
    <div className="w-[77.5%]  mx-auto flex gap-2 mt-28">
      {/* Left Section with Large Image and Vertical Text */}
      <div className="flex-1 relative">
        <div className="h-full bg-gray-200 flex items-center justify-center">
          <Image  src={itemcard1} alt="itemcard" />
        </div>
        <div className=" absolute left-[-10px] top-[98%] -translate-y-1/2 -rotate-90 origin-left text-lg font-normal text-[26px] leading-[39.84px] items-center flex text-center tracking-wide">
          EXPLORE NEW AND POPULAR STYLES
        </div>
      </div>

      {/* Right Section with Grid */}
      <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-2">
        <div className="bg-gray-200 flex items-center justify-center">
          <Image src={itemcard2} alt="itemcard" />
        </div>
        <div className="bg-gray-200 flex items-center justify-center">
          <Image src={itemcard3} alt="itemcard" />
        </div>
        <div className="bg-gray-200 flex items-center justify-center">
          <Image src={itemcard4} alt="itemcard" />
        </div>
        <div className="bg-gray-200 flex items-center justify-center">
          <Image src={itemcard5} alt="itemcard" />
        </div>
      </div>
    </div>
  );
}
