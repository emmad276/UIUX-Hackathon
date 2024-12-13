import React from "react";
import Image from "next/image";
import vector from "@/app/public/Vector.png";
import phone from "@/app/public/bxs_phone.png";
import clock from "@/app/public/bi_clock-fill.png";
import trophy from "@/app/public/trophy 1.png";
import group from "@/app/public/Group.png";
import support from "@/app/public/customer-support.png";

const ContactUs = () => {
  return (
    <div className="container mx-auto max-w-[77.5%] px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12  w-[644px] mx-auto">
        <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
        <p className="text-gray-500">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap lg:flex-nowrap gap-12 w-[77.5%] mx-auto mt-20">
        {/* Contact Details */}
        <div className="w-full  lg:w-1/2 space-y-8">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div>
              <Image
                src={vector}
                alt="Address Icon"
                className="h-[27.59px] w-[22px]"
              ></Image>
            </div>
            <div className="w-[212px] h-[57px]">
              <h4 className="font-semibold text-lg">Address</h4>
              <p className="text-gray-600">
                203 St. Mountain Avenue, New York, NY 10010, United States
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 pt-12 ">
            <div>
              <Image src={phone} alt="Phone Icon" className="h-6 w-6"></Image>
            </div>
            <div className="w-[212px] h-[57px]">
              <h4 className="font-semibold text-lg">Phone</h4>
              <p className="text-gray-600">Mobile: +880 546 9789</p>
              <p className="text-gray-600">Hotline: +880 456 9798</p>
            </div>
          </div>

          {/* Working Time */}
          <div className="flex items-start gap-4 pt-12">
            <div>
              <Image src={clock} alt="Clock Icon" className="h-6 w-6"></Image>
            </div>
            <div className="w-[212px] h-[57px]">
              <h4 className="font-semibold text-lg">Working Time</h4>
              <p className="text-gray-600">Monday - Friday: 9:00 - 20:00</p>
              <p className="text-gray-600">Saturday - Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className=" lg:w-1/2">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex-col">
                <h1>Your Name</h1>
                <input
                  type="text"
                  placeholder="Your name"
                  className=" w-[528.75px] h-[65px] mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <br />
              <div className="flex-col mt-4">
                <h2>Email Address</h2>
                <input
                  type="email"
                  placeholder="Email address"
                  className="mt-2 w-[528.75px] h-[65px]  p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
            <div className="flex-col mt-4">
              <h1>Subject</h1>
              <input
                type="text"
                placeholder="Subject (optional)"
                className="mt-2 w-[528.75px] h-[65px] p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="flex-col mt-4">
                <h1 className="w-[115.5px] h-[24px] font-medium text-[16px] leading-[24px]">Message</h1>
              <textarea
                placeholder="Message"
                rows="4"
                className="mt-2 w-[528.75px] h-[120px] p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 rounded hover:bg-teal-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Features */}
      <div className="mt-20 bg-[#F4F4F4] h-[200px] items-center flex flex-wrap  justify-around ">
        {/* Feature 1 */}
        <div className=" flex">
          <div>
            <Image
              src={trophy}
              alt="High Quality"
              className="mx-auto mb-2"
            ></Image>
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">High Quality</h4>
            <p className="text-gray-500">Crafted from top materials</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className=" flex">
          <div>
            <Image
              src={group}
              alt="Warranty Protection"
              className="mx-auto mb-2"
            ></Image>
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">Warranty Protection</h4>
            <p className="text-gray-500">Over 2 years</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className=" flex text-start">
          <div>
            <Image
              src={support}
              alt="24/7 Support"
              className="mx-auto mb-2"
            ></Image>
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">24/7 Support</h4>
            <p className="text-gray-500">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
