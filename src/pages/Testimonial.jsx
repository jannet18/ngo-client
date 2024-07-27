import React from "react";
import { FaStar } from "react-icons/fa";

function Testimonial() {
  return (
    <div className="p-16 md:p-24 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-xl text-[#01715d] font-bold italic">
          Testimonials
        </h2>
        <h4 className="font-bold text-3xl ">
          What they're saying about The Entrust Initiative
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="flex flex-col items-center gap-8 justify-center relative">
          <img
            src="https://media.istockphoto.com/id/1471845315/photo/happy-portrait-or-business-woman-taking-a-selfie-in-office-building-for-a-social-media.jpg?s=612x612&w=0&k=20&c=AOylBL01joI0zphCAFr6YVrsOgp_jd2XtVUychLXYho="
            alt=""
            className="object-cover w-[250px] h-[250px] rounded-full"
          />
          <div className="border-4 border-[#f9f4e8] rounded-3xl flex flex-col items-center justify-center p-6 gap-3 relative">
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              amet officia debitis aperiam magni necessitatibus maiores alias
              temporibus, distinctio nulla ut cupiditate optio recusandae vitae,
              doloribus praesentium nihil libero reprehenderit.
            </p>
            <h3 className="text-xl font-bold capitalize">Kevin Martin</h3>
            <span className="font-bold text-[#01715d] italic">Volunteer</span>
          </div>
          <div>
            <button className="bg-[#fbd459] rounded-full p-5 flex items-center gap-1 absolute bottom-0.5 right-[25%]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 justify-center relative">
          <img
            src="https://media.istockphoto.com/id/1471845315/photo/happy-portrait-or-business-woman-taking-a-selfie-in-office-building-for-a-social-media.jpg?s=612x612&w=0&k=20&c=AOylBL01joI0zphCAFr6YVrsOgp_jd2XtVUychLXYho="
            alt=""
            className="object-cover rounded-full w-[250px] h-[250px]"
          />
          <div className="border-4 border-[#f9f4e8] rounded-3xl flex flex-col items-center justify-center p-6 gap-3">
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              amet officia debitis aperiam magni necessitatibus maiores alias
              temporibus, distinctio nulla ut cupiditate optio recusandae vitae,
              doloribus praesentium nihil libero reprehenderit.
            </p>
            <h3 className="text-xl font-bold capitalize">Kevin Martin</h3>
            <span className="font-bold text-[#01715d] italic">Volunteer</span>
          </div>
          <div>
            <button className="bg-[#fbd459] rounded-full p-5 flex items-center gap-1 absolute bottom-0.5 right-[25%]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 justify-center relative">
          <img
            src="https://media.istockphoto.com/id/1471845315/photo/happy-portrait-or-business-woman-taking-a-selfie-in-office-building-for-a-social-media.jpg?s=612x612&w=0&k=20&c=AOylBL01joI0zphCAFr6YVrsOgp_jd2XtVUychLXYho="
            alt=""
            className="object-cover rounded-full w-[250px] h-[250px]"
          />
          <div className="border-4 border-[#f9f4e8] rounded-3xl flex flex-col items-center justify-center p-6 gap-3">
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              amet officia debitis aperiam magni necessitatibus maiores alias
              temporibus, distinctio nulla ut cupiditate optio recusandae vitae,
              doloribus praesentium nihil libero reprehenderit.
            </p>
            <h3 className="text-xl font-bold capitalize">Kevin Martin</h3>
            <span className="font-bold text-[#01715d] italic">Volunteer</span>
          </div>
          <div>
            <button className="bg-[#fbd459] rounded-full p-5 flex items-center gap-1 absolute bottom-0.5 right-[25%]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
