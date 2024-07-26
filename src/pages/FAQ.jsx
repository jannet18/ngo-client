import React from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

function FAQ() {
  return (
    <div className="bg-[#f9f4e8] p-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
        <div className="flex flex-col gap-4">
          <h3 className="text-[#01715d] italic font-bold text-xl">
            Recently Asked Questions
          </h3>
          <p className="font-bold text-2xl">Frequently Asked Questions</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste porro
            sunt similique perspiciatis, nihil atque minima animi cumque
            voluptatibus? Neque a quaerat quo quis labore numquam tempora
            debitis fugit accusamus.
          </p>
          <button className="bg-[#fbd459] w-fit hover:bg-gray-800 hover:text-white p-4 rounded-full uppercase font-bold text-sm">
            Learn how to get help
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="border bg-white flex items-center justify-center relative rounded-3xl p-10">
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              nesciunt aperiam sit, quaerat alias quod veniam porro corrupti
              nostrum ipsa, tempore, fuga architecto laudantium similique
              voluptatibus esse! Qui, quo. Eligendi?
            </p>
            <button className="bg-[#f9f4e8] active:bg-[#fbd459] border p-3 rounded-full absolute top-4 right-8">
              <span className="active:bg-[#fbd459]">
                <FiPlusCircle />
                {/* <FiMinusCircle /> */}
              </span>
            </button>
          </div>
          <div className="border bg-white flex items-center justify-center relative rounded-3xl p-10">
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              nesciunt aperiam sit, quaerat alias quod veniam porro corrupti
              nostrum ipsa, tempore, fuga architecto laudantium similique
              voluptatibus esse! Qui, quo. Eligendi?
            </p>
            <button className="bg-[#f9f4e8] active:bg-[#fbd459] border p-3 rounded-full absolute top-4 right-8">
              <span className="active:bg-[#fbd459]">
                <FiPlusCircle />
                {/* <FiMinusCircle /> */}
              </span>
            </button>
          </div>
          <div className="border bg-white flex items-center justify-center relative rounded-3xl p-10">
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              nesciunt aperiam sit, quaerat alias quod veniam porro corrupti
              nostrum ipsa, tempore, fuga architecto laudantium similique
              voluptatibus esse! Qui, quo. Eligendi?
            </p>
            <button className="bg-[#f9f4e8] active:bg-[#fbd459] border p-3 rounded-full absolute top-4 right-8">
              <span className="active:bg-[#fbd459]">
                <FiPlusCircle />
                {/* <FiMinusCircle /> */}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
