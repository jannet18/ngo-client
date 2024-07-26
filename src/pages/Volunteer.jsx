import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";
import Hero from "../components/Hero";

function Volunteer() {
  const { register } = useForm();
  return (
    <div className="m-14">
      <Hero />
      <div className="flex flex-col items-center justify-center ">
        <h3 className="italic text-[#01715d] font-bold text-xl">
          Register with us
        </h3>
        <span className="font-bold text-2xl mb-20">
          Join our community to become a volunteer
        </span>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 border rounded-3xl overflow-hidden ">
        <div className="bg-[#f9f4e8] p-10 grid grid-cols-1 gap-4">
          <img
            src="https://cdn.pixabay.com/photo/2015/02/27/16/55/volunteer-652383_640.jpg"
            alt=""
            className="object-cover w-full h-[350px] rounded-3xl overflow-hidden"
          />
          <h3 className="font-bold text-2xl">Requirements</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            repudiandae nihil iusto unde debitis eum, reiciendis molestias
            saepe! Totam assumenda autem quaerat eaque commodi explicabo
            suscipit, ut et earum eius!
          </p>
          <span className="flex items-center gap-2">
            <FaCheckCircle className="text-[#01715d]" />
            Make a difference
          </span>
          <span className="flex items-center gap-2">
            <FaCheckCircle className="text-[#01715d]" />
            Make someone smile
          </span>
          <div className="flex items-center gap-3">
            <span>
              <FaComments className="w-10 h-10 text-[#fbd459]" />
            </span>
            <div className="flex flex-col items-center">
              <p className="italic font-bold text-[#01715d]">Call Anytime</p>
              <p className="hover:text-[#01715d]">+25472354089</p>
            </div>
          </div>
        </div>
        <div className="p-10">
          <form className="grid grid-cols-1 gap-6 ">
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="bg-[#f9f4e8] p-2 rounded-xl outline-none cursor-pointer text-gray-600"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#f9f4e8] p-2 rounded-xl outline-none cursor-pointer text-gray-600"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-6 ">
              <input
                type="text"
                placeholder="Email"
                className="bg-[#f9f4e8] p-2 rounded-xl outline-none cursor-pointer text-gray-600"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="bg-[#f9f4e8] p-2 rounded-xl outline-none cursor-pointer text-gray-600"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="bg-[#f9f4e8] p-2 rounded-xl outline-none cursor-pointer text-gray-600"
            />
            <input
              type="text"
              placeholder="Date of Birth"
              className="bg-[#f9f4e8] p-2 rounded-xl outline-none cursor-pointer text-gray-600"
            />
            <input
              type="text"
              placeholder="Occupation"
              className="bg-[#f9f4e8] p-2 rounded-xl outline-none cursor-pointer text-gray-600"
            />
            <textarea
              type=""
              rows={5}
              placeholder="Write a Comment"
              className="bg-[#f9f4e8] p-2 rounded-xl outline-none cursor-pointer text-gray-600"
            />
            <button className="bg-[#fbd459] p-4 w-fit rounded-3xl uppercase text-xs">
              Send a Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
