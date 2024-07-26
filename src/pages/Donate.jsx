import React from "react";
import { IoMdPin } from "react-icons/io";
import { FaTag } from "react-icons/fa";
import Hero from "../components/Hero";

function Donate() {
  return (
    <div>
      <Hero />
      <div className="flex items-center justify-center m-10">
        <h1 className="text-[#01715d] text-2xl font-bold">Support Now</h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 p-4 gap-6">
        <div className="">
          <div className="flex flex-col gap-6 bg-white p-6">
            <button className="bg-[#f9f4e8] p-2.5 rounded-2xl">Ksh. 100</button>
            <button className="bg-[#f9f4e8] p-2.5 rounded-2xl">Ksh. 200</button>
            <button className="bg-[#f9f4e8] p-2.5 rounded-2xl">Ksh. 500</button>
            <button className="bg-[#f9f4e8] p-2.5 rounded-2xl">
              Ksh. 1000
            </button>
            <button className="bg-[#f9f4e8] p-2.5 rounded-2xl">
              Ksh. 2000
            </button>
            <button className="bg-[#f9f4e8] p-2.5 rounded-2xl">
              Custom Amount
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Select Payment Method</h2>
            <h1 className="font-bold text-2xl">Personal Info</h1>
          </div>
          <form className="grid grid-cols-1 gap-3">
            <div className="flex flex-col gap-3">
              <label htmlFor="First Name">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="outline-none bg-[#f9f4e8] p-2.5 rounded-2xl"
              />
              <label htmlFor="Last Name">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="outline-none bg-[#f9f4e8] p-2.5 rounded-2xl"
              />
            </div>
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              placeholder="Email"
              className="outline-none bg-[#f9f4e8] p-2.5 rounded-2xl"
            />
            <p className="font-bold text-xl">
              Total Donation: <span className="text-gray-600"> $250</span>
            </p>
            <button className="bg-[#fbd459] w-fit text-xs uppercase p-4 font-bold rounded-3xl">
              Donate Now
            </button>
          </form>
        </div>
        <div className="grid grid-cols-1 gap-10">
          <img
            src="https://media.istockphoto.com/id/1218490893/vector/happy-young-employees-giving-support-and-help-each-other.jpg?s=612x612&w=0&k=20&c=qPm0yTkBcz3bl6lq1RyHRcZOGcZFZIrm9GkRqGZKEDA="
            alt=""
            className="object-cover w-full h-[250px]"
          />
          <h2 className="font-bold text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            iste accusantium commodi officiis sed eaque culpa minima quaerat
            iusto adipisci pariatur qui quod laudantium quidem vitae sapiente
            praesentium, rerum blanditiis!
          </p>
          <div className="bg-[#f9f4e8] p-10 rounded-3xl">
            <p className="border-b-8 border-[#01715d]"></p>
            <div className="flex items-center justify-between">
              <span>Raised</span>
              <span>Goal</span>
            </div>
          </div>
          <div className="bg-[#f9f4e8] flex items-center gap-3 p-10 rounded-3xl">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">The Entrust </h2>
              <span className="font-bold text-xl">Initiative</span>
            </div>
            <div>
              <h2 className="text-sm text-gray-50">Created 10 Sep</h2>
              <h1 className="font-bold">Organizer:</h1>
              <p className="text-[#01715d] font-bold">Jess Doe</p>
              <p className="flex items-center gap-2 text-gray-700">
                <FaTag className="text-[#fbd459]" />
                Charity
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <IoMdPin className="text-[#fbd459]" />
                Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
