'use client';
import { useState } from "react";

interface FAQVisibility {
  faq1: boolean;
  faq2: boolean;
  faq3: boolean;
  faq4: boolean;
  faq5: boolean;
  faq6: boolean;
}

export default function FAQSection() {
  const [visible, setVisible] = useState<FAQVisibility>({
    faq1: false,
    faq2: false,
    faq3: false,
    faq4: false,
    faq5: false,
    faq6: false,
  });

  const toggleVisibility = (faqKey: keyof FAQVisibility) => {
    setVisible((prev) => ({ ...prev, [faqKey]: !prev[faqKey] }));
  };

  return (
    <div className="flex justify-center py-12">
      <div className="w-[77.5%]">
        <h2 className="text-center text-3xl font-semibold mb-4">Questions Looks Here</h2>
        <p className="text-center text-gray-500 mb-8">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* FAQ 1 */}
          <div className="border border-gray-300 bg-[#F7F7F7] p-4 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center ]">
              <h3 className="font-semibold">What types of chairs do you offer?</h3>
              <button
                className="text-gray-500"
                onClick={() => toggleVisibility("faq1")}
              >
                {visible.faq1 ? "-" : "+"}
              </button>
            </div>
            {visible.faq1 && (
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
                veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam
                quidem?
              </p>
            )}
          </div>

          {/* FAQ 2 */}
          <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow bg-[#F7F7F7]">
            <div className="flex justify-between items-center ">
              <h3 className="font-semibold">How can we get in touch with you?</h3>
              <button
                className="text-gray-500"
                onClick={() => toggleVisibility("faq2")}
              >
                {visible.faq2 ? "-" : "+"}
              </button>
            </div>
            {visible.faq2 && (
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
                veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam
                quidem?
              </p>
            )}
          </div>

          {/* FAQ 3 */}
          <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow bg-[#F7F7F7]">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Do your chairs come with a warranty?</h3>
              <button
                className="text-gray-500"
                onClick={() => toggleVisibility("faq3")}
              >
                {visible.faq3 ? "-" : "+"}
              </button>
            </div>
            {visible.faq3 && (
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
                veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam
                quidem?
              </p>
            )}
          </div>

          {/* FAQ 4 */}
          <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow bg-[#F7F7F7]">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">What will be delivered? And When?</h3>
              <button
                className="text-gray-500"
                onClick={() => toggleVisibility("faq4")}
              >
                {visible.faq4 ? "-" : "+"}
              </button>
            </div>
            {visible.faq4 && (
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
                veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam
                quidem?
              </p>
            )}
          </div>

          {/* FAQ 5 */}
          <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow bg-[#F7F7F7]">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Can I try a chair before purchasing?</h3>
              <button
                className="text-gray-500"
                onClick={() => toggleVisibility("faq5")}
              >
                {visible.faq5 ? "-" : "+"}
              </button>
            </div>
            {visible.faq5 && (
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
                veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam
                quidem?
              </p>
            )}
          </div>

          {/* FAQ 6 */}
          <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow bg-[#F7F7F7]">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">How do I clean and maintain my Comforty chair?</h3>
              <button
                className="text-gray-500"
                onClick={() => toggleVisibility("faq6")}
              >
                {visible.faq6 ? "-" : "+"}
              </button>
            </div>
            {visible.faq6 && (
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
                veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam
                quidem?
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
