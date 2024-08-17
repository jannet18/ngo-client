// import React, { useContext, useState } from "react";
// import { FaCheckCircle } from "react-icons/fa";
// import { FaComments } from "react-icons/fa6";
// import Hero from "../components/Hero";
// import { useForm } from "react-hook-form";
// import * as apiClient from "../apiClient";
// import { useMutation } from "react-query";
// import { appContext } from "../contexts/AppContext";

// function Volunteer() {
//   const { showToast } = useContext(appContext);
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();
//   const [responseMessage, setResponseMessage] = useState("");

//   const mutation = useMutation(apiClient.registerVolunteer, {
//     onSuccess: () => {
//       setResponseMessage(
//         "Thank you, we have received your registration. We will contact you soon."
//       );
//       showToast({ message: "Registration Success!", type: "SUCCESS" });
//       reset();
//     },
//     onError: () => {
//       showToast({ message: "Failed to Register", type: "ERROR" });
//     },
//   });
//   const onSubmit = (data) => {
//     // console.log(data);
//     mutation.mutate(data);
//   };
//   return (
//     <div className="m-10 p-10">
//       {/* <Hero /> */}
//       <div className="flex flex-col items-center justify-center">
//         <h3 className="italic text-[#01715d] font-bold text-4xl">
//           Volunteer with us
//         </h3>
//         <span className="font-bold text-3xl mb-20">
//           Join our community to become a volunteer
//         </span>
//       </div>
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 border rounded-3xl overflow-hidden ">
//         <div className="bg-[#f9f4e8] p-10 grid grid-cols-1 gap-4">
//           <img
//             src="https://cdn.pixabay.com/photo/2015/02/27/16/55/volunteer-652383_640.jpg"
//             alt=""
//             className="object-cover w-full h-[350px] rounded-3xl overflow-hidden"
//           />
//           <h3 className="font-bold text-2xl">Requirements</h3>
//           <p className="text-sm text-gray-600">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
//             repudiandae nihil iusto unde debitis eum, reiciendis molestias
//             saepe! Totam assumenda autem quaerat eaque commodi explicabo
//             suscipit, ut et earum eius!
//           </p>
//           <span className="flex items-center gap-2">
//             <FaCheckCircle className="text-[#01715d]" />
//             Make a difference
//           </span>
//           <span className="flex items-center gap-2">
//             <FaCheckCircle className="text-[#01715d]" />
//             Make someone smile
//           </span>
//           <div className="flex items-center gap-3">
//             <span>
//               <FaComments className="w-10 h-10 text-[#fbd459]" />
//             </span>
//             <div className="flex flex-col items-center">
//               <p className="italic font-bold text-[#01715d]">Call Anytime</p>
//               <p className="hover:text-[#01715d]">+25472354089</p>
//             </div>
//           </div>
//         </div>
//         <div className="p-10">
//           <form
//             className="grid grid-cols-1 gap-3"
//             onSubmit={handleSubmit(onSubmit)}
//           >
//             <div className="flex flex-col gap-2">
//               <label htmlhtmlFor="fullname">Full Name</label>
//               <input
//                 type="text"
//                 className="bg-[#f9f4e8] p-2 rounded-xl outline-none cursor-pointer text-gray-600"
//                 {...register("fullname", { required: true })}
//               />
//               {errors.fullname && (
//                 <span className="text-xs text-red-500">
//                   Full Name is required
//                 </span>
//               )}
//             </div>
//             <div className="flex flex-col gap-2 ">
//               <label htmlhtmlFor="email">Email</label>
//               <input
//                 type="text"
//                 className="bg-[#f9f4e8] p-2 rounded-xl outline-none cursor-pointer text-gray-600"
//                 {...register("email", {
//                   required: true,
//                   pattern: {
//                     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                     message: "Enter a valid email address",
//                   },
//                 })}
//               />
//               {errors.email && (
//                 <span className="text-xs text-red-500">
//                   Email Address is required
//                 </span>
//               )}
//               <label htmlhtmlFor="contact">Phone Number</label>
//               <input
//                 type="text"
//                 className="bg-[#f9f4e8] p-2 rounded-xl outline-none cursor-pointer text-gray-600"
//                 {...register("contact", {
//                   required: true,
//                   pattern: {
//                     value: /^\d{10}$/,
//                     message: "Enter a valid phone number",
//                   },
//                 })}
//               />
//               {errors.contact && (
//                 <span className="text-xs text-red-500">
//                   Phone Number is required
//                 </span>
//               )}
//             </div>
//             <div className="relative flex flex-col gap-3">
//               <label htmlhtmlFor="fullname">Area of Interest</label>
//               <select
//                 className="bg-[#f9f4e8] p-2 rounded-xl outline-none cursor-pointer text-gray-600 relative"
//                 {...register("area_of_interest", { required: true })}
//               >
//                 <option value="" className="text-gray-600">
//                   Option
//                 </option>
//                 <option value="worship-team" className="text-gray-600">
//                   Worship Team
//                 </option>
//                 <option value="sound-team" className="text-gray-600">
//                   Sound Team
//                 </option>
//                 <option value="hospitality" className="text-gray-600">
//                   Hospitality
//                 </option>
//                 <option value="media" className="text-gray-600">
//                   Media
//                 </option>
//                 <option value="ushering" className="text-gray-600">
//                   Ushering
//                 </option>
//               </select>
//               {errors.area_of_interest && (
//                 <span className="text-xs font-medium text-red-600 absolute inset-0 top-2 left-32">
//                   *
//                 </span>
//               )}
//             </div>
//             <label htmlhtmlFor="church">Church</label>
//             <input
//               type="text"
//               className="bg-[#f9f4e8] p-2 rounded-xl outline-none cursor-pointer text-gray-600"
//               {...register("church", { required: true })}
//             />
//             {errors.church && (
//               <span className="text-xs text-red-500">Church is required</span>
//             )}
//             <textarea
//               rows={10}
//               placeholder="Write a Message"
//               className="bg-[#f9f4e8] p-2 rounded-xl outline-none cursor-pointer text-gray-600"
//               {...register("message", { required: true })}
//             />
//             {errors.message && (
//               <span className="text-xs text-red-500">Message is required</span>
//             )}
//             <div className="flex flex-row items-center gap-2 ">
//               <input
//                 type="checkbox"
//                 {...register("accepted_terms", { required: true })}
//               />
//               I accept the
//               <label htmlhtmlFor="" className="text-gray-700">
//                 <a
//                   href=""
//                   className="text-blue-500 hover:text-blue-800 hover:underline"
//                 >
//                   terms
//                 </a>{" "}
//                 and{" "}
//                 <a
//                   href="#"
//                   className="text-blue-500 hover:text-blue-800 hover:underline"
//                 >
//                   privacy policy
//                 </a>
//               </label>
//               {errors.accepted_terms && (
//                 <span className="text-xs text-red-500 flex">
//                   You must accept the terms and conditions
//                 </span>
//               )}
//             </div>
//             <button
//               type="submit"
//               className="bg-[#fbd459]  text-[#01715d] p-4 w-fit rounded-3xl uppercase text-xs font-bold hover:bg-[#f9f4e8]"
//             >
//               Volunteer
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// // export default Volunteer;
// import React from "react";
import React from "react";
import { LuCheckCircle } from "react-icons/lu";
import { RiBloggerLine } from "react-icons/ri";

function Volunteer() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-center flex-col space-y-6">
        <h1 className="text-3xl font-bold">
          Volunteer at The Entrust Intiative
        </h1>
        <p className="text-xl font-bold">
          Volunteer with Entrust and help us reach every passion.
        </p>
        <img
          src="https://media.istockphoto.com/id/1499674352/vector/group-many-christians-people-with-raised-hands-praying-or-singing-christianity-in-the-world.jpg?s=612x612&w=0&k=20&c=ShZRe9qcr-lnNon-bg3Qu_nWovuwDRNfqthJy5eTB30="
          alt=""
          className="w-full h-[600px] object-cover"
        />
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center">
          Why Volunteer at The Entrust Initiative?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
          <div className="text-xl space-y-4">
            <div className="flex items-center space-x-2">
              <span>
                <LuCheckCircle />
              </span>
              <p>
                Meet like-minded professional volunteers from around the world
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span>
                <LuCheckCircle />
              </span>
              <p>Help communities in need to improve their quality of life. </p>
            </div>
            <div className="flex items-center space-x-2">
              <span>
                <LuCheckCircle />
              </span>
              <p>
                An opportunity to broaden your skills and enrich your career.{" "}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span>
                <LuCheckCircle />
              </span>
              <p>
                Be part of UNICEF's work defending the rights of children and
                young people.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/1276952684/vector/crowd-silhouette-of-raised-hands-of-people-vector-illustration.jpg?s=612x612&w=0&k=20&c=A1i3D0aqoYAQvgJJ1dS4L1Bic9L2vZMwBokXbtVQ8-M="
              alt=""
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-10">
          <div className="border rounded-3xl overflow-hidden px-6 py-3">
            <div>
              <img
                src="https://media.istockphoto.com/id/840712136/vector/hands-raising-love-with-heart.jpg?s=612x612&w=0&k=20&c=KfHtRB5OkDBRj4jUFNJCGy_8k7UIV6Z1_zOhw6FlnfI="
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
            <div className="flex items-center space-x-1">
              <RiBloggerLine />
              <span className="text-lg font-bold capitalize">article</span>
            </div>
            <div className="">
              <h2 className="text-lg capitalize">title</h2>
              <p className="text-sm ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora nobis dolorem in eligendi omnis voluptates expedita?
                Voluptatibus ut quas quam, nulla minus ipsa iste natus
                asperiores ipsam est! Voluptate, ad!
              </p>
            </div>
          </div>
          <div className="border rounded-3xl overflow-hidden px-6 py-3">
            <div>
              <img
                src="https://media.istockphoto.com/id/840712136/vector/hands-raising-love-with-heart.jpg?s=612x612&w=0&k=20&c=KfHtRB5OkDBRj4jUFNJCGy_8k7UIV6Z1_zOhw6FlnfI="
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
            <div className="flex items-center space-x-1">
              <RiBloggerLine />
              <span className="text-lg font-bold capitalize">article</span>
            </div>
            <div className="">
              <h2 className="text-lg capitalize">title</h2>
              <p className="text-sm ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora nobis dolorem in eligendi omnis voluptates expedita?
                Voluptatibus ut quas quam, nulla minus ipsa iste natus
                asperiores ipsam est! Voluptate, ad!
              </p>
            </div>
          </div>
          <div className="border rounded-3xl overflow-hidden px-6 py-3">
            <div>
              <img
                src="https://media.istockphoto.com/id/840712136/vector/hands-raising-love-with-heart.jpg?s=612x612&w=0&k=20&c=KfHtRB5OkDBRj4jUFNJCGy_8k7UIV6Z1_zOhw6FlnfI="
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
            <div className="flex items-center space-x-1">
              <RiBloggerLine />
              <span className="text-lg font-bold capitalize">article</span>
            </div>
            <div className="">
              <h2 className="text-lg capitalize">title</h2>
              <p className="text-sm ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora nobis dolorem in eligendi omnis voluptates expedita?
                Voluptatibus ut quas quam, nulla minus ipsa iste natus
                asperiores ipsam est! Voluptate, ad!
              </p>
            </div>
          </div>
          <div className="border rounded-3xl overflow-hidden px-6 py-3">
            <div>
              <img
                src="https://media.istockphoto.com/id/840712136/vector/hands-raising-love-with-heart.jpg?s=612x612&w=0&k=20&c=KfHtRB5OkDBRj4jUFNJCGy_8k7UIV6Z1_zOhw6FlnfI="
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
            <div className="flex items-center space-x-1">
              <RiBloggerLine />
              <span className="text-lg font-bold capitalize">article</span>
            </div>
            <div className="">
              <h2 className="text-lg capitalize">title</h2>
              <p className="text-sm ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora nobis dolorem in eligendi omnis voluptates expedita?
                Voluptatibus ut quas quam, nulla minus ipsa iste natus
                asperiores ipsam est! Voluptate, ad!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
