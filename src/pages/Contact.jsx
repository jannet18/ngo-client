import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <div className="bg-[#f9f4e8] p-10">
      <div className=" max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[#01715d] text-3xl font-bold">Contact us</h1>
          <h4 className="text-2xl font-bold">Write us anytime</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mt-6">
            <form className="grid grid-cols-1 gap-3 items-center">
              <div className="flex flex-col md:flex-row gap-4 ">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-2 rounded-xl outline-none"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="p-2 rounded-xl outline-none"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Phone"
                  className="p-2 rounded-xl outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="p-2 rounded-xl outline-none"
                />
              </div>

              <textarea
                placeholder="Write a Message"
                className="p-2 rounded-xl outline-none w-[65%]"
                rows={5}
              ></textarea>
              <button className="bg-[#fbd459] uppercase text-xs font-bold rounded-3xl w-fit px-5 py-2 text-center">
                submit
              </button>
            </form>
          </div>
          <div className="bg-white p-6 rounded-3xl space-y-4 mt-6">
            <div className="flex items-center gap-2">
              <FaPhoneVolume className="bg-[#fbd459] p-3 rounded-full hover:bg-[#0a4446] hover:text-white w-12 h-12" />
              <span>+ 254 (722) - 0090</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineMailOpen className="bg-[#fbd459] p-3 rounded-full hover:bg-[#0a4446] hover:text-white w-12 h-12" />
              <span>help@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot className="bg-[#fbd459] p-3 rounded-full hover:bg-[#0a4446] hover:text-white w-12 h-12" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
