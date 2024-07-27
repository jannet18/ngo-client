import React, { useContext, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";
import Hero from "../components/Hero";
import { useForm } from "react-hook-form";
import * as apiClient from "../apiClient";
import { useMutation } from "react-query";
import { appContext } from "../contexts/AppContext";

function Volunteer() {
  const { showToast } = useContext(appContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [responseMessage, setResponseMessage] = useState("");

  const mutation = useMutation(apiClient.registerVolunteer, {
    onSuccess: () => {
      setResponseMessage(
        "Thank you, we have received your registration. We will contact you soon."
      );
      showToast({ message: "Registration Success!", type: "SUCCESS" });
      reset();
    },
    onError: () => {
      showToast({ message: "Failed to Register", type: "ERROR" });
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
  };
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
          <form
            className="grid grid-cols-1 gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-[#f9f4e8] p-2 rounded-xl outline-none cursor-pointer text-gray-600"
                {...register("fullname", { required: true })}
              />
              {errors.firstname && (
                <span className="text-xs text-red-500">
                  Full Name is required
                </span>
              )}
            </div>
            <div className="flex flex-col md:flex-row gap-6 ">
              <input
                type="text"
                placeholder="Email"
                className="bg-[#f9f4e8] p-2 rounded-xl outline-none cursor-pointer text-gray-600"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-xs text-red-500">
                  Email Address is required
                </span>
              )}
              <input
                type="text"
                placeholder="Phone Number"
                className="bg-[#f9f4e8] p-2 rounded-xl outline-none cursor-pointer text-gray-600"
                {...register("contact", {
                  required: true,
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Enter a valid phone number",
                  },
                })}
              />
              {errors.contact && (
                <span className="text-xs text-red-500">
                  Phone Number is required
                </span>
              )}
            </div>
            <select
              placeholder="Area of interest"
              className="bg-[#f9f4e8] p-2 rounded-xl outline-none cursor-pointer text-gray-600"
              {...register("area_of_interest", { required: true })}
            >
              <option value="" className="text-gray-600">
                Select Area of Interest
              </option>
              <option value="worship-team" className="text-gray-600">
                Worship Team
              </option>
              <option value="sound-team" className="text-gray-600">
                Sound Team
              </option>
              <option value="hospitality" className="text-gray-600">
                Hospitality
              </option>
              <option value="media" className="text-gray-600">
                Media
              </option>
              <option value="ushering" className="text-gray-600">
                Ushering
              </option>
            </select>
            {errors.area_of_interest && (
              <span className="text-xs font-medium text-red-600">*</span>
            )}
            <input
              type="text"
              placeholder="Occupation"
              className="bg-[#f9f4e8] p-2 rounded-xl outline-none cursor-pointer text-gray-600"
              {...register("occupation", { required: true })}
            />
            {errors.occupation && (
              <span className="text-xs text-red-500">
                Occupation is required
              </span>
            )}
            <textarea
              rows={10}
              placeholder="Write a Message"
              className="bg-[#f9f4e8] p-2 rounded-xl outline-none cursor-pointer text-gray-600"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-xs text-red-500">Message is required</span>
            )}
            <button
              type="submit"
              className="bg-[#fbd459] p-4 w-fit rounded-3xl uppercase text-xs font-bold hover:bg-gray-700 hover:text-white"
            >
              Volunteer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
