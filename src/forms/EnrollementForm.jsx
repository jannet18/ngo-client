import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import * as apiClient from "../apiClient";
import { appContext } from "../contexts/AppContext";

function EnrollementForm() {
  const { showToast } = useContext(appContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const [categories, setCategories] = useState([]);
  const selectedProgram = watch("program");

  const { data: programs = [] } = useQuery("programs", apiClient.fetchPrograms);

  useQuery(
    ["categories", selectedProgram],
    () => apiClient.fetchCategories(selectedProgram),
    {
      enabled: !!selectedProgram,
      onSuccess: (data) => {
        setCategories(data);
      },
    }
  );
  const mutation = useMutation(apiClient.registerStudent, {
    onSuccess: () => {
      showToast({ message: "Application Successful!", type: "SUCCESS" });
      reset();
    },
    onError: () => {
      showToast({ message: "Application Failed", type: " ERROR" });
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto m-10">
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-3xl">Enrollment Form</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start justify-center p-10 gap-6"
        >
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              className="border p-1 rounded-md outline-none"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-row gap-10">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  className="border p-1 rounded-md outline-none"
                  {...register("gender", { required: true })}
                >
                  <option value="">Find Option</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <span className="text-xs text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="date">Date</label>
                <input
                  className="border p-1 rounded-md outline-none"
                  defaultValue={new Date()
                    .toISOString()
                    .split("T")[0]
                    .substring(0, 10)}
                  {...register("date", { required: true })}
                />
                {errors.date && (
                  <span className="text-xs text-red-500">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="phone-number">Phone Number</label>
              <input
                type="text"
                className="border p-1 rounded-md outline-none"
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
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="flex md:flex-row gap-10">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="Church">Church</label>
              <input
                type="text"
                className="border p-1 rounded-md outline-none"
                {...register("church", { required: true })}
              />
              {errors.church && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="Program">Program</label>
              <select
                className="border w-full p-1 rounded-md outline-none"
                {...register("program", { required: true })}
              >
                <option value="">Select Program</option>
                {programs?.map((program, index) => (
                  <option key={index} value={program.id}>
                    {program.name}
                  </option>
                ))}
              </select>
              {errors.program && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {categories.length > 0 && (
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="Category">Category</label>
                <select
                  className="border w-full p-1 rounded-md outline-none"
                  {...register("category", { required: true })}
                >
                  <option value="">Select Category</option>
                  {categories &&
                    categories.map((category, index) => (
                      <option key={index} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                </select>
                {errors.category && (
                  <span className="text-xs text-red-500">
                    This field is required
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="border p-1 rounded-md outline-none"
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
                This field is required
              </span>
            )}
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="">
              Describe your role or responsibility in your Church
            </label>
            <textarea
              rows={4}
              className="border p-1 rounded-md outline-none"
              {...register("responsibility", { required: true })}
            ></textarea>
            {errors.responsibility && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="">
              Give a brief description of how you came to faith
            </label>
            <textarea
              rows={4}
              className="border p-1 rounded-md outline-none"
              {...register("description", { required: true })}
            ></textarea>
            {errors.description && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="">
              What is the motivation behind your service in Church
            </label>
            <textarea
              rows={4}
              className="border p-1 rounded-md outline-none"
              {...register("motivation", { required: true })}
            ></textarea>
            {errors.motivation && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="">
              What are some challenges that you have faced while serving ?
            </label>
            <textarea
              rows={4}
              className="border p-1 rounded-md outline-none"
              {...register("challenges", { required: true })}
            ></textarea>
            {errors.challenges && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="">
              Are you able to commit for a month for the Entrust Training
            </label>
            <select
              className="border p-1 rounded-md outline-none"
              {...register("availability", { required: true })}
            >
              <option value="yes">Yes</option>
              <option value="yes">No</option>
            </select>
            {errors.availability && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="">
              List any other commitments that might affect your participation
            </label>
            <textarea
              rows={4}
              className="border p-1 rounded-md outline-none"
              {...register("commitment", { required: true })}
            ></textarea>
            {errors.commitments && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="">
              What do you hope to achieve or learn through the training ?
            </label>
            <textarea
              rows={4}
              className="border p-1 rounded-md outline-none"
              {...register("achievements", { required: true })}
            ></textarea>
            {errors.achievements && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-row items-center gap-2 ">
            <input
              type="checkbox"
              {...register("accepted_terms", { required: true })}
            />
            I accept the
            <label htmlFor="" className="text-gray-700">
              <a
                href=""
                className="text-blue-500 hover:text-blue-800 hover:underline"
              >
                terms
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-blue-500 hover:text-blue-800 hover:underline"
              >
                privacy policy
              </a>
            </label>
            {errors.accepted_terms && (
              <span className="text-xs text-red-500 flex">
                You must accept the terms and conditions
              </span>
            )}
          </div>
          <button
            type="submit"
            className="text-white bg-[#0a4446] px-4 py-3 rounded-3xl text-xs font-bold uppercase hover:text-gray-800 hover:bg-[#fbd459]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EnrollementForm;
