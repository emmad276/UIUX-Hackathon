import React from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import bin from "@/app/public/bin.png";
import card3 from "@/app/public/card3.png";
import cat1 from "@/app/public/cat1.png";

const CartPage = () => {
  return (
    <div className="container mx-auto px-6 py-8 gap-5 w-[77.5%]">
      <div className="flex flex-col lg:flex-row gap-10 justify-between">
        {/* Bag Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6">Bag</h2>

          {/* Product 1 */}
          <div className="flex justify-between border-b">
            <div className="flex pb-4 mb-4">
              <Image
                src={card3} // Replace with your first product image source
                alt="Product 1"
                className="w-[150px] h-[150px] rounded-md"
              ></Image>

              <div className=" ml-4  flex-col justify-between ">
                <div className="">
                  <h3 className=" font-normal text-[16px] leading-[20.08px]">Library Stool Chair</h3>
                  <p className="text-[15px]  text-[#757575] font-normal mt-3">
                    Ashen Slate/Cobalt Bliss
                  </p>
                  <p className="text-[15px]  text-[#757575] font-normal">
                    Size: L &nbsp; | &nbsp; Quantity: 1
                  </p>
                </div>
                <div className="mt-3 flex space-x-3 text-gray-600">
                  <IoMdHeartEmpty  className="w-[24px] h-[24px] text-black" />
                  <Image src={bin} alt=""></Image>
                </div>
                
              </div>
              
            </div>
            
            <div>
              <p className="text-[15px] font-semibold">MRP: $99</p>
            </div>
            
          </div>
          
          

          {/* Product 2 */}
          <div className="flex justify-between  mt-7 border-b">
            <div className="flex ">
              <Image
                src={cat1} // Replace with your first product image source
                alt="Product 1"
                className="w-[150px] h-[150px] rounded-md"
              ></Image>

              <div className="flex-1 ml-4 flex-col justify-between">
                <div className="">
                  <h3 className="font-normal text-[16px] leading-[20.08px]">Library Stool Chair</h3>
                  <p className="text-[15px]  text-[#757575] font-normal mt-3">
                    Ashen Slate/Cobalt Bliss
                  </p>
                  <p className="text-[15px]  text-[#757575] font-normal">
                    Size: L &nbsp; | &nbsp; Quantity: 1
                  </p>
                </div>
                <div className="mt-3 flex space-x-3 text-gray-600">
                  <IoMdHeartEmpty  className="w-[24px] h-[24px] text-black"/>
                  <Image src={bin} alt=""></Image>
                </div>
              </div>
              
            </div>
            <div>
              <p className="text-[15px] font-semibold">MRP: $99</p>
            </div>
          </div>
          
        </div>

        {/* Summary Section */}
        <div className="w-full lg:w-1/3  rounded-lg ">
          <h2 className="text-[21px] font-semibold mb-6">Summary</h2>
          <div className="flex justify-between mb-2">
            <p className="text-gray-600">Subtotal</p>
            <p className="font-medium">$198.00</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="font-normal text-[15px] text-black">Estimated Delivery & Handling</p>
            <p className="font-normal text-[15px] text-black">Free</p>
          </div>
          <div className="flex justify-between text-lg font-semibold mt-4">
            <p className="font-normal text-[15px] text-black">Total</p>
            <p className="font-normal text-[15px] text-black">$198.00</p>
          </div>
          <button className="mt-6 w-full bg-[#029FAE] text-white py-3 rounded-full font-medium">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
