import React from "react";
import Image from "next/image";
import imageblock from "@/app/public/Image Block.png";
import delivery from "@/app/public/Delivery.png";
import check from "@/app/public/Checkmark--outline.png";
import purchase from "@/app/public/Purchase.png";
import sprout from "@/app/public/Sprout.png";
import large from "@/app/public/Large.png";
import parent from "@/app/public/Parent.png";
import pho from "@/app/public/Photo.png";
export default function HomePage() {
  return (
    <div className="flex justify-center py-12">
      <div className="w-[77.5%]">
        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#007580] text-white p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                About Us - Comforty
              </h2>
              <p className="text-gray-200 mb-6">
                At Comforty, we believe that the right chair can transform any
                space. We deliver premium comfort, sleek design, and
                unparalleled quality. From traditional aesthetics to modern
                styles, we craft chairs that seamlessly blend style with
                functionality.
              </p>
            </div>
            <button className="bg-[#F9F9F926] w-[179px] mt-14 text-white px-6 py-2 rounded hover:bg-purple-600">
              View Collection
            </button>
          </div>
          <div className="flex justify-center items-center bg-gray-100">
            <Image src={imageblock} alt=""></Image>
          </div>
        </div>

        {/* Brand Difference Section */}
        <div className=" mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            What Makes Our Brand Different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow">
              <Image src={delivery} alt=""></Image>
              <h3 className="font-medium mb-2 mt-2">Next day as standard</h3>
              <p className="text-gray-500">
                Order before 2pm and get your chair the next day as standard.
              </p>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow">
              <Image src={check} alt=""></Image>
              <h3 className="font-medium mb-2 mt-2">Made by true artisans</h3>
              <p className="text-gray-500">
                Handmade crafted goods made with passion and craftsmanship.
              </p>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow">
              <Image src={purchase} alt=""></Image>
              <h3 className="font-medium mt-2 mb-2">Unbeatable prices</h3>
              <p className="text-gray-500">
                For a remarkable quality, you won’t find better prices anywhere.
              </p>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow">
              <Image src={sprout} alt=""></Image>
              <h3 className="font-medium mb-2 mt-2">Recycled packaging</h3>
              <p className="text-gray-500">
                We use 100% recycled materials for packaging to ensure more
                sustainability.
              </p>
            </div>
          </div>
        </div>

        {/* Popular Products Section */}
<div>
  <h2 className="text-2xl font-semibold mb-8">Our Popular Products</h2>
  <div className="flex gap-6">
    {/* First Card - Wider */}
    <div className="w-[77.5%]">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={large}
          alt="The Popular Suede Sofa"
          className="w-full rounded-lg"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium">The Popular Suede Sofa</h3>
        <p className="text-gray-500">$99.00</p>
      </div>
    </div>

    {/* Second Card */}
    <div className="w-[11.25%]">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={pho}
          alt="The Dandy Chair"
          className="w-full rounded-lg"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium">The Dandy Chair</h3>
        <p className="text-gray-500">$59.00</p>
      </div>
    </div>

    {/* Third Card */}
    <div className="w-[11.25%]">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={parent}
          alt="The Dandy Chair"
          className="w-full rounded-lg"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium">The Dandy Chair</h3>
        <p className="text-gray-500">$59.00</p>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
