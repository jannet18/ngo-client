import React from "react";
import { CiUser } from "react-icons/ci";
import { FaComments } from "react-icons/fa";
import { IoIosArrowRoundForward, IoMdShare } from "react-icons/io";

function Events() {
  return (
    <div className="max-w-7xl mx-auto space-y-20 m-20 p-10">
      <div className="flex flex-col items-center justify-center">
        <h3 className="italic capitalize text-[#01715d] font-bold text-2xl">
          Events
        </h3>
        <p className="font-bold text-2xl">Directly from the latest Events.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="grid grid-cols-1 gap-4 border w-full rounded-3xl">
          <img
            src="https://media.istockphoto.com/id/1320101626/photo/christians-raising-their-hands-in-praise-and-worship-at-cross-background.jpg?s=612x612&w=0&k=20&c=SOyV1eHiJ6kTQzqj1sYOZcXHuqUxfglZ945m55O5lzs="
            alt=""
            className="object-cover w-full h-[400px] rounded-t-3xl"
          />
          <div className="flex items-center justify-center flex-col gap-4 p-4">
            <h3 className="text-2xl font-bold">
              Collective Worship Experiences
            </h3>
            <p className="text-md">
              - Regular worship events featuring dynamic performances by trained
              worship leaders, instrumentalists, sound engineers, media
              volunteers, and backup vocalists.
            </p>
            <p className="text-md">
              - Opportunities for fellowship, networking, and spiritual
              enrichment through interactive activities, panel discussions, and
              prayer sessions.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 border w-full rounded-3xl">
          <img
            src="https://media.istockphoto.com/id/1220240208/vector/debate-of-political-party-candidates-election-campaign-people-cartoon-characters-vector.jpg?s=612x612&w=0&k=20&c=7unFFTEt65Qgr4JZoqw1WTwIrMonYOPpPXAydBgyEDw="
            alt=""
            className="object-cover w-full h-[400px] rounded-t-3xl"
          />
          <div className="flex items-center flex-col gap-3 p-4">
            <h3 className="text-2xl font-bold">Panel Sessions</h3>
            <p className="text-md">
              - Involves interactive discussions on foundational aspects of the
              Christian faith, the topics should cover the basics in the
              christian faith .examples could be topics like why do I have to go
              to church? , whats the significance of baptism? , what does it
              mean to say am saved ? what am I saved from ?.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 border w-full rounded-3xl">
          <img
            src="https://media.istockphoto.com/id/2150134906/vector/multi-ethnic-group-of-workers-with-different-occupations.jpg?s=612x612&w=0&k=20&c=j1OC54FsyE1gwzf5kbXkzItsgMUevUkX9oliIwAlp-A="
            alt=""
            className="object-cover w-full h-[400px] rounded-t-3xl"
          />
          <div className="flex items-center flex-col justify-center gap-4 p-4">
            <h3 className="text-2xl font-bold">Creative Elements</h3>
            <p className="text-md">
              - Incorporation of dancers, creative stage designs, and
              interactive activities like dress codes, photo booths, and Bible
              challenges through trivia's and games.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="text-2xl font-bold">Timeline</span>
        <p className="text-md">
          - Extended Worship events and training sessions are scheduled
          regularly throughout the year, providing ongoing opportunities for
          participants to engage in learning, worship, and community building.
        </p>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Events;
