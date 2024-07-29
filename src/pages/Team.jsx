import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Team() {
  const teamMembers = [
    {
      name: "Sarah Albert",
      role: "Volunteer",
      imgSrc:
        "https://media.istockphoto.com/id/1485052530/photo/portrait-fashion-and-braids-with-a-black-woman-on-an-orange-background-outdoor-for-style-or.jpg?s=612x612&w=0&k=20&c=fAox0qvGFqgFl1QbUXQ4Y6t_yW5Bl4HqFnvmD6uppHI=",
    },
    {
      name: "John Doe",
      role: "Volunteer",
      imgSrc:
        "https://media.istockphoto.com/id/1501770003/photo/happy-handsome-young-indian-man-head-shot-front-portrait.jpg?s=612x612&w=0&k=20&c=P2toTbaknymA7vf28IQNa-3xrlUjPXLFqvN2Zra8_nw=",
    },
    {
      name: "Aleesha Eve",
      role: "Volunteer",
      imgSrc:
        "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=",
    },
    {
      name: "Jane Smith",
      role: "Volunteer",
      imgSrc:
        "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug=",
    },
  ];

  return (
    <div className="p-8 md:p-20 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-[#01715d] font-bold text-xl">Our Expert Team</h3>
        <h5 className="text-3xl font-bold">Meet the Team</h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative group w-full h-full rounded-3xl overflow-hidden">
              <img
                src={member.imgSrc}
                alt={member.name}
                className="object-cover w-full h-full rounded-3xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-4 bg-[#fbd459] p-1 rounded-t-2xl">
                  <a href="#" className="text-[#0a4446] p-1">
                    <FaFacebook size={24} />
                  </a>
                  <a href="#" className="text-[#0a4446] p-1">
                    <FaTwitter size={24} />
                  </a>
                  <a href="#" className="text-[#0a4446] p-1">
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[#202d2b] rounded-b-3xl flex flex-col items-center justify-center h-28 w-48 md:w-40">
              <h3 className="text-white text-2xl font-bold">{member.name}</h3>
              <span className="text-[#fbd459] font-bold italic">
                {member.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
