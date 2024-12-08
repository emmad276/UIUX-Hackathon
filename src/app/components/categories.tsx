import Image from "next/image";
import React from "react";
import cat1 from "@/app/public/cat1.png"

import cat2 from "@/app/public/cat2.png"
import cat3 from "@/app/public/cat3.png"
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ["latin"] });
export default function Categories() {
  return (
    <div>
            <div className='w-[77.5%] mx-auto h-[44px]  my-5'>
            <h1 className={` h-[35px] ${inter.className} font-bold text-[32px] leading-[35.2px] text-[#272343]`}>Top Categories</h1>
            </div>

            <div className="flex justify-center">
            <div className="w-[77.5%] flex gap-4">
                {/* Card 1 */}
                <div
                className="relative rounded-lg shadow-lg overflow-hidden"
                style={{ height: "377px", flex: "1 1 calc(25% - 1rem)" }}
                >
                {/* Background Image */}
                <Image
                    src={cat1} // Replace with your image path
                    alt="Wing Chair"
                    layout="fill"
                    objectFit="cover"
                />
                {/* Text on Image */}
                <div className="absolute bottom-0 w-full p-4  from-black via-transparent to-transparent text-white">
                    <h3 className="font-semibold text-lg">Wing Chair</h3>
                    <p className="text-sm">3,584 Products</p>
                </div>
                </div>

                {/* Card 2 */}
                <div
                className="relative rounded-lg shadow-lg overflow-hidden"
                style={{ height: "377px", flex: "1 1 calc(25% - 1rem)" }}
                >
                <Image
                    src={cat2} // Replace with your image path
                    alt="Wing Chair"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute bottom-0 w-full p-4  from-black via-transparent to-transparent text-white">
                    <h3 className="font-semibold text-lg">Wing Chair</h3>
                    <p className="text-sm">3,584 Products</p>
                </div>
                </div>

                {/* Card 3 */}
                <div
                className="relative rounded-lg shadow-lg overflow-hidden"
                style={{ height: "377px", flex: "1 1 calc(25% - 1rem)" }}
                >
                <Image
                    src={cat3} // Replace with your image path
                    alt="Wing Chair"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute bottom-0 w-full p-4  from-black via-transparent to-transparent text-white">
                    <h3 className="font-semibold text-lg">Wing Chair</h3>
                    <p className="text-sm">3,584 Products</p>
                </div>
                </div>

                
            </div>
            </div>
    </div>
  );
}
