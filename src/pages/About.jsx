import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Testimonial from "./Testimonial";

function About() {
  return (
    <div>
      <div className="p-12 md:p-20 max-w-7xl mx-auto">
        <div className="relative grid grid-cols-1 justify-items-center text-center md:grid-cols-2 gap-10 md:gap-32">
          <div className="relative">
            <div className="border-4 rounded-3xl p-20 w-[200px] h-[300px] md:w-[300px] md:h-[450px] border-[#fbd459]"></div>
            <img
              src="https://media.istockphoto.com/id/1350203222/vector/different-hands-reach-out-to-the-heart-vector-concept-illustration-for-sharing-love-helping.jpg?s=612x612&w=0&k=20&c=XQDXWRLuCSdIK_vG4Dv0x4CS9Ao7_10SIwglxL8NqqA="
              alt=""
              className="absolute top-[-15%] right-[70%] object-cover rounded-3xl w-[200px] h-[200px] md:w-[350px] md:h-[350px] z-10"
            />
            <img
              src="https://media.istockphoto.com/id/1363108156/vector/love-and-compassion-hands.jpg?s=612x612&w=0&k=20&c=GoOIYkFWo_mCpcWRo58VBPrFmUZF9MlN2Bg3TMF1JC0="
              alt=""
              className="absolute bottom-[-10%] left-[20%] object-cover rounded-3xl w-[200px] h-[200px] md:w-[350px] md:h-[350px] z-10"
            />
          </div>
          <div className="flex flex-col items-start gap-6">
            <div className="">
              <h2 className="text-lg font-bold text-[#01715d] italic">
                About The Entrust Initiative
              </h2>
              <h6 className="font-bold text-2xl">
                Get to know about our organization
              </h6>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, tempora deserunt fuga sequi illum eveniet voluptates
              provident similique hic velit dolor eaque incidunt molestias cum
              itaque maiores veniam! Expedita, magni.
            </p>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#fbd459]" />
                <span>Proin sed magna vel mi suscipit commodo.</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#fbd459]" />
                <span>Proin sed magna vel mi suscipit commodo.</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#fbd459]" />
                <span>Proin sed magna vel mi suscipit commodo.</span>
              </div>
            </div>
            <button className="bg-[#fbd459] text-xs uppercase p-5 border rounded-full font-bold hover:bg-gray-600 hover:text-white">
              Discover more
            </button>
          </div>
        </div>
        <Testimonial />
      </div>
    </div>
  );
}

export default About;
