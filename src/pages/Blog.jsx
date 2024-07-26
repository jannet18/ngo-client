import React from "react";
import { CiUser } from "react-icons/ci";
import { IoMdShare } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaComments } from "react-icons/fa6";

function Blog() {
  return (
    <div>
      <div className="max-w-7xl mx-auto space-y-20 m-20">
        <div className="flex flex-col items-center justify-center">
          <h3 className="italic capitalize text-[#01715d] font-bold text-xl">
            Blog & Articles
          </h3>
          <p className="font-bold text-2xl">
            Directly from the latest news and Articles
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 relative p-3 gap-6">
          <div className="grid space-y-4 border overflow-hidden rounded-3xl">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="object-cover w-full h-[300px] rounded-t-3xl overflow-hidden "
            />
            <div className="absolute md:top-[56%] top-[58%] left-4 ">
              <span className="border w-fit p-2 rounded-full bg-white text-[#01715d] font-bold italic">
                23/07/24
              </span>
            </div>
            <div className="space-x-3">
              <p className="flex items-center gap-2">
                <CiUser className="text-[#fbd459] w-6 h-6" />
                <span className="text-gray-600 hover:text-[#01715d]">
                  LayerDrops
                </span>
              </p>
              <p className="flex items-center gap-2">
                <FaComments className="text-[#fbd459] w-6 h-6" />
                <span className="text-gray-600 hover:text-[#01715d]">
                  2 Comments
                </span>
              </p>
              <p className="text-gray-800 hover:text-[#01715d]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              </p>
            </div>

            <div className="flex items-center justify-between p-3 border-t">
              <button className="flex items-center gap-2 hover:text-[#01715d]">
                <IoIosArrowRoundForward />
                Read More
              </button>
              <button className="flex items-center gap-2 hover:text-[#01715d]">
                <IoMdShare />
              </button>
            </div>
          </div>
          <div className="grid space-y-4 border overflow-hidden rounded-3xl">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="object-cover w-full h-[300px] rounded-t-3xl overflow-hidden "
            />
            <div className="absolute md:top-[56%] top-[58%] left-4 ">
              <span className="border w-fit p-2 rounded-full bg-white text-[#01715d] font-bold italic">
                23/07/24
              </span>
            </div>
            <div className="space-x-3">
              <p className="flex items-center gap-2">
                <CiUser className="text-[#fbd459] w-6 h-6" />
                <span className="text-gray-600 hover:text-[#01715d]">
                  LayerDrops
                </span>
              </p>
              <p className="flex items-center gap-2">
                <FaComments className="text-[#fbd459] w-6 h-6" />
                <span className="text-gray-600 hover:text-[#01715d]">
                  2 Comments
                </span>
              </p>
              <p className="text-gray-800 hover:text-[#01715d]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              </p>
            </div>

            <div className="flex items-center justify-between p-3 border-t">
              <button className="flex items-center gap-2 hover:text-[#01715d]">
                <IoIosArrowRoundForward />
                Read More
              </button>
              <button className="flex items-center gap-2 hover:text-[#01715d]">
                <IoMdShare />
              </button>
            </div>
          </div>
          <div className="grid space-y-4 border overflow-hidden rounded-3xl">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="object-cover w-full h-[300px] rounded-t-3xl overflow-hidden "
            />
            <div className="absolute md:top-[56%] top-[58%] left-4 ">
              <span className="border w-fit p-2 rounded-full bg-white text-[#01715d] font-bold italic">
                23/07/24
              </span>
            </div>
            <div className="space-x-3">
              <p className="flex items-center gap-2">
                <CiUser className="text-[#fbd459] w-6 h-6" />
                <span className="text-gray-600 hover:text-[#01715d]">
                  LayerDrops
                </span>
              </p>
              <p className="flex items-center gap-2">
                <FaComments className="text-[#fbd459] w-6 h-6" />
                <span className="text-gray-600 hover:text-[#01715d]">
                  2 Comments
                </span>
              </p>
              <p className="text-gray-800 hover:text-[#01715d]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              </p>
            </div>
            <div className="flex items-center justify-between p-3 border-t">
              <button className="flex items-center gap-2 hover:text-[#01715d]">
                <IoIosArrowRoundForward />
                Read More
              </button>
              <button className="flex items-center gap-2 hover:text-[#01715d]">
                <IoMdShare />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
