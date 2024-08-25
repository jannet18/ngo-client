// import React from "react";
// import { useQuery } from "react-query";
// import { Link } from "react-router-dom";
// import * as apiClient from "../apiClient";

// function Programs() {
//   const {
//     data: programs = [],
//     isLoading,
//     error,
//   } = useQuery("programs", apiClient?.fetchPrograms);

//   if (isLoading) return <div>Loading</div>;
//   if (error) return <div>{error.message}</div>;
//   // console.log(programs);
//   return (
//     <div className="max-w-7xl mx-auto">
//       <div className="flex flex-col items-center">
//         <h1 className="text-[#01715d] font-bold text-3xl">
//           Available programs
//         </h1>
//         <h4 className="font-bold text-4xl py-6">
//           Gain influence with our in-depth programs
//         </h4>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {programs &&
//           programs.map((program, index) => (
//             <div
//               key={index}
//               id={program?.id}
//               className="flex flex-col items-center justify-center gap-10 border rounded-3xl"
//             >
//               <img
//                 src={program?.image_url}
//                 alt={program.name}
//                 className="object-cover w-full h-full rounded-t-3xl"
//               />
//               <div className="flex flex-col items-center justify-center gap-4 p-6">
//                 <h1 className="text-xl font-bold">{program?.name}</h1>
//                 <p>{program?.description}</p>
//                 <Link
//                   to="https://airtable.com/appL0AY242tmDtUOP/pagXAnInrMJT7siLL/form"
//                   className="bg-[#fbd459] text-[#01715d] px-4 py-2 rounded-3xl text-xs font-bold uppercase hover:bg-[#0a4446] hover:text-white"
//                 >
//                   enroll
//                 </Link>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default Programs;
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../apiClient";

function Programs() {
  const {
    data: programs = [],
    isLoading,
    error,
  } = useQuery("programs", apiClient?.fetchPrograms);

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-[#01715d] font-bold text-2xl sm:text-3xl">
          Available programs
        </h1>
        <h4 className="font-bold text-xl sm:text-2xl md:text-4xl py-4 sm:py-6">
          Gain influence with our in-depth programs
        </h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {programs &&
          programs.map((program, index) => (
            <div
              key={index}
              id={program?.id}
              className="flex flex-col items-center justify-center gap-4 border rounded-3xl overflow-hidden"
            >
              <img
                src={program?.image_url}
                alt={program.name}
                className="object-cover w-full h-[100%]"
              />
              <div className="flex flex-col items-center justify-center gap-2 p-4 sm:p-6">
                <h1 className="text-lg sm:text-xl font-bold text-center">
                  {program?.name}
                </h1>
                <p className="text-sm sm:text-base text-center">
                  {program?.description}
                </p>
                <Link
                  to="https://airtable.com/appL0AY242tmDtUOP/pagXAnInrMJT7siLL/form"
                  className="bg-[#fbd459] text-[#01715d] px-3 sm:px-4 py-2 sm:py-3 rounded-3xl text-xs sm:text-sm font-bold uppercase hover:bg-[#0a4446] hover:text-white"
                >
                  Enroll
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Programs;
