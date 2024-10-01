// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";
// import Testimonial from "./Testimonial";
// import Team from "./Team";
// import { MdOutlinePushPin } from "react-icons/md";
// import { MdOfflinePin } from "react-icons/md";
// import Programs from "./Programs";

// function About() {
//   return (
//     <div>
//       <div className="p-12 md:p-20 max-w-7xl mx-auto">
//         <div className="relative grid grid-cols-1 justify-items-center text-center md:grid-cols-2 gap-10 md:gap-32">
//           <div className="relative">
//             <div className="border-4 rounded-3xl p-20 w-[200px] h-[300px] md:w-[300px] md:h-[450px] border-[#fbd459]"></div>
//             <img
//               src="https://media.istockphoto.com/id/1350203222/vector/different-hands-reach-out-to-the-heart-vector-concept-illustration-for-sharing-love-helping.jpg?s=612x612&w=0&k=20&c=XQDXWRLuCSdIK_vG4Dv0x4CS9Ao7_10SIwglxL8NqqA="
//               alt=""
//               className="absolute top-[-15%] right-[70%] object-cover rounded-3xl w-[200px] h-[200px] md:w-[350px] md:h-[350px] z-10"
//             />
//             <img
//               src="https://media.istockphoto.com/id/1363108156/vector/love-and-compassion-hands.jpg?s=612x612&w=0&k=20&c=GoOIYkFWo_mCpcWRo58VBPrFmUZF9MlN2Bg3TMF1JC0="
//               alt=""
//               className="absolute bottom-[-10%] left-[20%] object-cover rounded-3xl w-[200px] h-[200px] md:w-[350px] md:h-[350px] z-10"
//             />
//           </div>
//           <div className="flex flex-col items-start gap-6 border p-6 rounded-3xl">
//             <div className="">
//               <h2 className="text-lg font-bold text-[#01715d] italic">
//                 The Entrust Initiative
//               </h2>
//               <h6 className="font-bold text-2xl capitalize">
//                 Equips and empowers Worship Ministry Teams
//               </h6>
//             </div>
//             <p className="text-md tracking-wider">
//               Extended Worship is a comprehensive training program designed to
//               equip and empower worship ministry teams within churches to serve
//               with excellence, unity, and spiritual depth.
//             </p>
//             <div className="flex flex-col gap-3">
//               <div className="flex flex-row gap-1">
//                 <FaCheckCircle className="text-[#fbd459] w-8 h-8" />
//                 <p className="text-sm">
//                   The program encompasses a wide range of training initiatives,
//                   rooted in commitment to Biblical principles and creative
//                   expression.
//                 </p>
//               </div>
//               <div className="flex flex-row gap-1">
//                 <FaCheckCircle className="text-[#fbd459] w-7 h-7" />
//                 <p className="text-sm">
//                   Suited for aspiring worship leaders, instrumentalists, sound
//                   engineers, media volunteers, and backup vocalists.
//                 </p>
//               </div>
//               <div className="flex flex-row gap-1">
//                 <FaCheckCircle className="text-[#fbd459] w-6 h-6" />
//                 <p className="text-sm">
//                   Offered through practical instruction, spiritual formation,
//                   and collective worship experiences,
//                 </p>
//               </div>
//               <div className="flex flex-row gap-1">
//                 <FaCheckCircle className="text-[#fbd459] w-6 h-6" />
//                 <p className="text-sm">
//                   Extended Worship seeks to cultivate vibrant and authentic
//                   worship cultures in our churches.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="space-y-10">
//             <div className="space-y-4 border p-6 rounded-3xl">
//               <h4 className="font-bold text-2xl">Vision</h4>
//               <p className="text-md text-gray-700">
//                 Our vision is to see worship ministry teams -;
//               </p>
//               <div className="flex flex-col items-start">
//                 <div className="flex items-start gap-4">
//                   <FaCheckCircle className="text-[#0a4446] w-6 h-6 hover:text-[#fbd459]" />
//                   <p>
//                     Equipped with necessary skills, knowledge, and spiritual
//                     foundation.
//                   </p>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <FaCheckCircle className="text-[#0a4446] w-6 h-6 hover:text-[#fbd459]" />
//                   <p>
//                     Lead transformative worship experiences that draw believers
//                     <span>into deeper intimacy with God</span>
//                   </p>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <FaCheckCircle className="text-[#0a4446] w-6 h-6 hover:text-[#fbd459]" />
//                   <p>Foster community among congregants.</p>
//                 </div>
//               </div>
//               <p className="text-lg font-bold">
//                 We envision worship that is characterized by excellence,
//                 authenticity, and unity, ultimately glorifying God and edifying
//                 His people.
//               </p>
//             </div>
//             <div className="space-y-6 border p-6 rounded-3xl">
//               <h4 className="font-bold text-2xl">Mission</h4>
//               <div className="flex items-start">
//                 <MdOfflinePin className="w-16 h-16 text-[#fbd459] hover:text-[#0a4446]" />
//                 <p className="text-md text-gray-700">
//                   Our mission is to provide comprehensive training and support
//                   to worship ministry teams, encompassing worship leaders,
//                   instrumentalists, sound engineers, media volunteers, and
//                   backup vocalists.
//                 </p>
//               </div>
//               <div className="flex items-start">
//                 <MdOfflinePin className="w-16 h-16 text-[#fbd459] hover:text-[#0a4446]" />
//                 <p className="text-md text-gray-700">
//                   Through practical instruction, spiritual formation, and
//                   collective worship experiences, we aim to empower participants
//                   to serve effectively in their respective roles, leading with
//                   humility, authenticity, and a deep reverence for God.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="space-y-6 border p-6 rounded-3xl">
//             <h4 className="text-2xl font-bold">Values</h4>
//             <div className="flex gap-4">
//               <span className="text-xl font-bold hover:text-[#01715d]">
//                 Excellence:
//               </span>
//               <p className="text-sm text-start">
//                 We strive for excellence in all aspects of worship ministry,
//                 honoring God with the highest standards of musical proficiency,
//                 technical skill, and creative expression.
//               </p>
//             </div>
//             <div className="flex gap-4">
//               <span className="text-lg font-bold hover:text-[#01715d]">
//                 Authenticity:
//               </span>
//               <p className="text-sm text-start">
//                 We value authenticity in worship, encouraging worship leaders
//                 and team members to lead from a place of genuine relationship
//                 with God and humility before Him
//               </p>
//             </div>
//             <div className="flex gap-4">
//               <span className="text-lg font-bold hover:text-[#01715d]">
//                 Unity:
//               </span>
//               <p className="text-sm text-start">
//                 We prioritize unity within worship ministry teams and the
//                 broader church community, recognizing that our collective
//                 worship is most powerful when we are united in purpose and
//                 spirit.
//               </p>
//             </div>
//             <div className="flex gap-4">
//               <span className="text-lg font-bold hover:text-[#01715d]">
//                 Spiritual Formation:
//               </span>
//               <p className="text-sm text-start">
//                 We are committed to fostering spiritual growth and maturity
//                 among participants, emphasizing the importance of personal
//                 devotion, prayer, and biblical study in worship leadership.
//               </p>
//             </div>
//             <div className="flex gap-4">
//               <span className="text-lg font-bold hover:text-[#01715d]">
//                 Creativity:
//               </span>
//               <p className="text-sm text-start">
//                 We embrace creativity as a means of expressing worship in
//                 diverse and innovative ways, honoring God with our artistic
//                 gifts and talents.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="text-center m-3">
//           <button className="bg-[#fbd459] text-[#01715d] text-xs uppercase p-5 rounded-full font-bold hover:bg-gray-600 hover:text-white">
//             Discover more
//           </button>
//         </div>
//         <Programs />
//         <Team />
//         {/* <Testimonial /> */}
//       </div>
//     </div>
//   );
// }

// export default About;

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdOfflinePin } from "react-icons/md";
import Programs from "./Programs";
import Team from "./Team";

function About() {
  return (
    <div className="p-12 md:p-20 max-w-7xl space-y-28 sm:mx-30">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 space-y-20 space-x-20 md:gap-32 text-center md:text-left"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-32 text-center md:text-left p-8">
        <div className="relative flex items-center md:justify-end">
          <div className="border-4 rounded-3xl p-20 w-[300px] h-[300px] md:w-[350px] md:h-[400px] border-[#fbd459]"></div>
          <img
            src="https://media.istockphoto.com/id/1350203222/vector/different-hands-reach-out-to-the-heart-vector-concept-illustration-for-sharing-love-helping.jpg?s=612x612&w=0&k=20&c=XQDXWRLuCSdIK_vG4Dv0x4CS9Ao7_10SIwglxL8NqqA="
            alt="Hands reaching out to heart"
            className="absolute md:top-[-10%] md:right-[25%] top-[-15%] right-[60%] object-cover rounded-3xl w-[250px] h-[250px] md:w-[300px] md:h-[300px] z-10 overflow-hidden"
          />
          <img
            src="https://media.istockphoto.com/id/1363108156/vector/love-and-compassion-hands.jpg?s=612x612&w=0&k=20&c=GoOIYkFWo_mCpcWRo58VBPrFmUZF9MlN2Bg3TMF1JC0="
            alt="Love and compassion hands"
            className="absolute md:bottom-[-15%] md:left-[60%] bottom-[-15%] left-[40%] object-cover rounded-3xl w-[250px] h-[250px] md:w-[300px] md:h-[300px] z-10 "
          />
        </div>
        <div className="flex flex-col gap-6 p-6 border rounded-3xl h-fit">
          <div>
            <h2 className="text-lg font-bold text-[#01715d] italic">
              The Entrust Initiative
            </h2>
            <h6 className="font-bold text-2xl capitalize">
              Equips and empowers Worship Ministry Teams
            </h6>
          </div>
          <p className="text-md tracking-wider">
            Extended Worship is a comprehensive training program designed to
            equip and empower worship ministry teams within churches to serve
            with excellence, unity, and spiritual depth.
          </p>
          {/* <div className="flex flex-col gap-3">
            {[
              "The program encompasses a wide range of training initiatives, rooted in commitment to Biblical principles and creative expression.",
              "Suited for aspiring worship leaders, instrumentalists, sound engineers, media volunteers, and backup vocalists.",
              "Offered through practical instruction, spiritual formation, and collective worship experiences.",
              "Extended Worship seeks to cultivate vibrant and authentic worship cultures in our churches.",
            ].map((text, index) => (
              <div key={index} className="flex gap-2">
                <FaCheckCircle className="text-[#fbd459] w-6 h-6" />
                <p className="text-sm">{text}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10">
        <VisionSection />
        <MissionSection />
        {/* <ValuesSection /> */}
      </div>
      <div className="text-center mt-10">
        <button className="bg-[#fbd459] text-[#01715d] text-xs uppercase p-5 rounded-full font-bold hover:bg-gray-600 hover:text-white">
          Discover more
        </button>
      </div>
      <Programs />
      <Team />
      {/* <Testimonial /> */}
    </div>
  );
}

const VisionSection = () => (
  <div className="space-y-4 p-6 border rounded-3xl h-fit">
    <h4 className="font-bold text-2xl">Vision</h4>
    {/* <p className="text-md text-gray-700">
      Our vision is to see worship ministry teams -;
    </p>
    <div className="flex flex-col gap-4">
      {[
        "Equipped with necessary skills, knowledge, and spiritual foundation.",
        "Lead transformative worship experiences that draw believers into deeper intimacy with God.",
        "Foster community among congregants.",
      ].map((text, index) => (
        <div key={index} className="flex items-start gap-4">
          <FaCheckCircle className="text-[#0a4446] w-6 h-6 hover:text-[#fbd459]" />
          <p>{text}</p>
        </div>
      ))}
    </div> */}
    <p className="text-lg font-bold">
      We envision worship that is characterized by excellence, authenticity, and
      unity, ultimately glorifying God and edifying His people.
    </p>
  </div>
);

const MissionSection = () => (
  <div className="space-y-6 p-6 border rounded-3xl">
    <h4 className="font-bold text-2xl">Mission</h4>
    {[
      "Our mission is to provide comprehensive training and support to worship ministry teams, encompassing worship leaders, instrumentalists, sound engineers, media volunteers, and backup vocalists.",
      "Through practical instruction, spiritual formation, and collective worship experiences, we aim to empower participants to serve effectively in their respective roles, leading with humility, authenticity, and a deep reverence for God.",
    ].map((text, index) => (
      <div key={index} className="flex items-start gap-4">
        <MdOfflinePin className="w-16 h-16 text-[#fbd459] hover:text-[#0a4446]" />
        <p className="text-md text-gray-700">{text}</p>
      </div>
    ))}
  </div>
);

// const ValuesSection = () => (
//   <div className="space-y-6 p-6 border rounded-3xl">
//     <h4 className="text-2xl font-bold">Values</h4>
//     {[
//       {
//         title: "Excellence:",
//         text: "We strive for excellence in all aspects of worship ministry, honoring God with the highest standards of musical proficiency, technical skill, and creative expression.",
//       },
//       {
//         title: "Authenticity:",
//         text: "We value authenticity in worship, encouraging worship leaders and team members to lead from a place of genuine relationship with God and humility before Him.",
//       },
//       {
//         title: "Unity:",
//         text: "We prioritize unity within worship ministry teams and the broader church community, recognizing that our collective worship is most powerful when we are united in purpose and spirit.",
//       },
//       {
//         title: "Spiritual Formation:",
//         text: "We are committed to fostering spiritual growth and maturity among participants, emphasizing the importance of personal devotion, prayer, and biblical study in worship leadership.",
//       },
//       {
//         title: "Creativity:",
//         text: "We embrace creativity as a means of expressing worship in diverse and innovative ways, honoring God with our artistic gifts and talents.",
//       },
//     ].map(({ title, text }, index) => (
//       <div key={index} className="flex gap-4">
//         <span className="text-lg font-bold hover:text-[#01715d]">{title}</span>
//         <p className="text-sm">{text}</p>
//       </div>
//     ))}
//   </div>
// );

export default About;
