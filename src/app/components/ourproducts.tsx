import React from 'react';
import Image from 'next/image';
import card1 from "@/app/public/card1.png"
import card2 from "@/app/public/card2.png"
import card3 from "@/app/public/card3.png"
import card4 from "@/app/public/card4.png"
import { Inter } from 'next/font/google'
import addcart1 from "@/app/public/addcart1.png"
import addcart2 from "@/app/public/addcart2.png"


const inter = Inter({ subsets: ["latin"] });

const OurProducts = () => {
  return (
    
    <div>
        <div className='w-[77.5%] mx-auto h-auto my-5 text-center mt-20'>
            <h1 className={` h-[35px] ${inter.className} font-bold text-[32px] leading-[35.2px] text-[#272343]`}>Our Products</h1>
        </div>
        
        <div className="flex justify-center mt-10">
        <div className="w-[77.5%] flex justify-between flex-wrap">
            {/* Card 1 */}
            <div className="w-[23%] h-[377px] rounded-lg  overflow-hidden">
            <div className="relative h-2/3">
                <Image
                src={card1}
                alt="Library Stool Chair"
                className="w-full h-full object-cover"
                ></Image>
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                New
                </span>
            </div>
            <div className="flex ">
                    <div className='w-[81%]'>
                    <h3 className={`mt-3 ${inter.className} font-normal text-[16px] leading-[20.08px] text-[#007580] h-[21px]`}>Library Stool Chair</h3>
                    <p className={`mt-2 w-[35px] h-[20px] gap-[4px] ${inter.className} text-[18px] leading-[19.8px] font-bold text-[#272343] `}>$20</p>
                    </div>
                    <div>
                        <Image className='mt-3' src={addcart1} alt='add cart1'></Image>
                    </div>
            </div>
            
            </div>

        {/* Card 2 */}
        <div className="w-[23%] h-[377px]  rounded-lg  overflow-hidden">
            <div className="relative h-2/3">
                <Image
                src={card2}
                alt="Library Stool Chair"
                className="w-full h-full object-cover"
                ></Image>
                <span className="absolute top-2 left-2 bg-[#F5813F] text-white text-xs font-semibold px-2 py-1 rounded-full">
                Sales
                </span>
            </div>
            <div className="flex ">
                    <div className='w-[81%]'>
                    <h3 className={`mt-3 ${inter.className} font-normal text-[16px] leading-[20.08px]  h-[21px]`}>Library Stool Chair</h3>
                    <p className={`mt-2 w-[35px] h-[20px] gap-[4px] ${inter.className} text-[18px] leading-[19.8px] font-bold `}>$20</p>
                    </div>
                    <div>
                        <Image className='mt-3' src={addcart2} alt='add cart1'></Image>
                    </div>
            </div>
            
            </div>
            {/* Card 3 */}
            <div className="w-[23%] h-[377px]  rounded-lg  overflow-hidden">
            <div className="relative h-2/3">
                <Image
                src={card3}
                alt="Library Stool Chair"
                className="w-full h-full object-cover"
                ></Image>
                
            </div>
            <div className="w-[81%]">
                    
                    <h3 className={`mt-3 ${inter.className} font-normal text-[16px] leading-[20.08px] h-[21px]`}>Library Stool Chair</h3>
                    <p className={`mt-2 w-[35px] h-[20px] gap-[4px] ${inter.className} text-[18px] leading-[19.8px] font-bold  `}>$20</p>
                    
                    
            </div>
            
            </div>
            {/* Card 4 */}
            <div className="w-[23%] h-[377px]  rounded-lg overflow-hidden">
            <div className="relative h-2/3">
                <Image
                src={card4}
                alt="Library Stool Chair"
                className="w-full h-full object-cover"
                ></Image>
                
            </div>
            <div className="w-[81%]">
                <h3 className={`mt-3 ${inter.className} font-normal text-[16px] leading-[20.08px] h-[21px]`}>Library Stool Chair</h3>
                <p className={`mt-2 w-[35px] h-[20px] gap-[4px] ${inter.className} text-[18px] leading-[19.8px] font-bold  `}>$20</p>
            </div>
            
            </div>
        </div>
        </div>


        <div className="flex justify-center mt-10">
        <div className="w-[77.5%] flex justify-between flex-wrap">
            {/* Card 1 */}
            <div className="w-[23%] h-[377px] rounded-lg  overflow-hidden">
            <div className="relative h-2/3">
                <Image
                src={card1}
                alt="Library Stool Chair"
                className="w-full h-full object-cover"
                ></Image>
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                New
                </span>
            </div>
            <div className="flex ">
                    <div className='w-[81%]'>
                    <h3 className={`mt-3 ${inter.className} font-normal text-[16px] leading-[20.08px] h-[21px]`}>Library Stool Chair</h3>
                    <p className={`mt-2 w-[35px] h-[20px] gap-[4px] ${inter.className} text-[18px] leading-[19.8px] font-bold  `}>$20</p>
                    </div>
                    <div>
                        <Image className='mt-3' src={addcart1} alt='add cart1'></Image>
                    </div>
            </div>
            
            </div>

        {/* Card 2 */}
        <div className="w-[23%] h-[377px]  rounded-lg  overflow-hidden">
            <div className="relative h-2/3">
                <Image
                src={card2}
                alt="Library Stool Chair"
                className="w-full h-full object-cover"
                ></Image>
                <span className="absolute top-2 left-2 bg-[#F5813F] text-white text-xs font-semibold px-2 py-1 rounded-full">
                Sales
                </span>
            </div>
            <div className="flex ">
                    <div className='w-[81%]'>
                    <h3 className={`mt-3 ${inter.className} font-normal text-[16px] leading-[20.08px]  h-[21px]`}>Library Stool Chair</h3>
                    <p className={`mt-2 w-[35px] h-[20px] gap-[4px] ${inter.className} text-[18px] leading-[19.8px] font-bold `}>$20</p>
                    </div>
                    <div>
                        <Image className='mt-3' src={addcart2} alt='add cart1'></Image>
                    </div>
            </div>
            
            </div>
            {/* Card 3 */}
            <div className="w-[23%] h-[377px]  rounded-lg  overflow-hidden">
            <div className="relative h-2/3">
                <Image
                src={card3}
                alt="Library Stool Chair"
                className="w-full h-full object-cover"
                ></Image>
                
            </div>
            <div className="w-[81%]">
                    
                    <h3 className={`mt-3 ${inter.className} font-normal text-[16px] leading-[20.08px] h-[21px]`}>Library Stool Chair</h3>
                    <p className={`mt-2 w-[35px] h-[20px] gap-[4px] ${inter.className} text-[18px] leading-[19.8px] font-bold  `}>$20</p>
                    
                    
            </div>
            
            </div>
            {/* Card 4 */}
            <div className="w-[23%] h-[377px]  rounded-lg overflow-hidden">
            <div className="relative h-2/3">
                <Image
                src={card4}
                alt="Library Stool Chair"
                className="w-full h-full object-cover"
                ></Image>
                
            </div>
            <div className="w-[81%]">
                <h3 className={`mt-3 ${inter.className} font-normal text-[16px] leading-[20.08px] h-[21px]`}>Library Stool Chair</h3>
                <p className={`mt-2 w-[35px] h-[20px] gap-[4px] ${inter.className} text-[18px] leading-[19.8px] font-bold  `}>$20</p>
            </div>
            
            </div>
        </div>
        </div>
    </div>
  )
}

export default OurProducts