import React from "react";
import { PiLineVerticalLight } from "react-icons/pi";
import { BiDonateHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

function Programs() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-[#01715d] font-bold text-3xl">
          Available programs
        </h1>
        <h4 className="font-bold text-4xl">
          Gain influence with our in-depth programs
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <img
            src="https://media.istockphoto.com/id/172730717/photo/singer-silhouette.jpg?s=612x612&w=0&k=20&c=2rTjofRZ4mBgxSx7XawTp0I5zosiMupWNKlGlR_bCQ0="
            alt=""
            className="object-cover w-full h-[200px] rounded-3xl"
          />
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-xl font-bold">Worship Leader</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              modi optio minima dignissimos, fugit tempora nam, alias illum
              dicta cumque corrupti! Magni quae sint repudiandae eaque mollitia,
              dolore ipsam non?
            </p>
            <button className="bg-[#fbd459] px-4 py-2 rounded-3xl text-xs font-bold uppercase">
              enroll
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <img
            src="https://media.istockphoto.com/id/1152043152/photo/one-man-rock-musician-singing-tensely-on-a-microphone.jpg?s=612x612&w=0&k=20&c=SXoJJ-LqVZqx0BaKXGMHw4OVPPo52-iJi7J0sOqRRTw="
            alt=""
            className="object-cover w-full h-[300px] rounded-3xl"
          />
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-xl font-bold">Vocalist</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              modi optio minima dignissimos, fugit tempora nam, alias illum
              dicta cumque corrupti! Magni quae sint repudiandae eaque mollitia,
              dolore ipsam non?
            </p>
            <button className="bg-[#fbd459] px-4 py-2 rounded-3xl text-xs font-bold uppercase">
              Enroll
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <img
            src="https://media.istockphoto.com/id/1191264566/photo/video-camera-with-touchscreen.jpg?s=612x612&w=0&k=20&c=pZz2qaEgvZTopIVsdRuhLhBOjgW4mgNIiHhLf0JImNw="
            alt=""
            className="object-cover w-full h-[200px] rounded-3xl"
          />
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-xl font-bold">Media</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              modi optio minima dignissimos, fugit tempora nam, alias illum
              dicta cumque corrupti! Magni quae sint repudiandae eaque mollitia,
              dolore ipsam non?
            </p>
            <button className="bg-[#fbd459] px-4 py-2 rounded-3xl text-xs font-bold uppercase">
              Enroll
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <img
            src="https://media.istockphoto.com/id/1384233241/photo/sound-recording-studio-mixing-desk-with-engineer-or-music-producer.jpg?s=612x612&w=0&k=20&c=SK0n5Cv3Pfb9FRfMtA-lJGTR_sO5T9BIcznnargPlB0="
            alt=""
            className="object-cover w-full h-[200px] rounded-3xl"
          />
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-xl font-bold">Sound Engineering</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              modi optio minima dignissimos, fugit tempora nam, alias illum
              dicta cumque corrupti! Magni quae sint repudiandae eaque mollitia,
              dolore ipsam non?
            </p>
            <button className="bg-[#fbd459] px-4 py-2 rounded-3xl text-xs font-bold uppercase">
              Enroll
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="grid grid-cols-1 gap-10">
            <h1 className="text-xl font-bold">Instrumentalists</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              modi optio minima dignissimos, fugit tempora nam, alias illum
              dicta cumque corrupti! Magni quae sint repudiandae eaque mollitia,
              dolore ipsam non?
            </p>
            <div className="flex flex-col items-center justify-center gap-3">
              <h4 className="font-bold text-lg space-y-4">Categories</h4>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center justify-center gap-1">
                  <img
                    src="https://media.istockphoto.com/id/1371047758/photo/indie-rock-guitarist-playing-guitar-in-a-live-show-with-stage-lights.jpg?s=612x612&w=0&k=20&c=A-FuVENICxkZTvwBEMf07pMewZQ2eLKujutKbnXPogU="
                    alt=""
                    className="object-cover w-full h-[200px] rounded-3xl"
                  />
                  <button className="bg-[#0a4446] p-3 rounded-full text-white hover:bg-[#fbd459] hover:text-gray-800 text-xs uppercase font-bold">
                    Solo Guitar
                  </button>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <img
                    src="https://media.istockphoto.com/id/651209608/photo/close-up-photo-of-bass-guitar-player.jpg?s=612x612&w=0&k=20&c=IFJb9cCK_ODOrdYXd1_3Y_aoXwi0oimAAXfsmwen4Y4="
                    alt=""
                    className="object-cover w-full h-[200px] rounded-3xl"
                  />
                  <button className="bg-[#0a4446] p-3 rounded-full text-white hover:bg-[#fbd459] hover:text-gray-800 text-xs uppercase font-bold">
                    Bass Guiter
                  </button>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <img
                    src="https://media.istockphoto.com/id/1400528967/photo/cropped-image-of-a-musician-playing-drum-set-on-the-stage.jpg?s=612x612&w=0&k=20&c=zfjaEdWQXn75QMZafL9E6yw0VV7RPf2DF7f8b0I7Azo="
                    alt=""
                    className="object-cover w-full h-[200px] rounded-3xl"
                  />
                  <button className="bg-[#0a4446] p-3 rounded-full text-white hover:bg-[#fbd459] hover:text-gray-800 text-xs uppercase font-bold">
                    Drummer
                  </button>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <img
                    src="https://media.istockphoto.com/id/1207522788/photo/musicians-are-playing-music-on-a-stage.jpg?s=612x612&w=0&k=20&c=3SNSorjkioCPIdDxjwS1w7SqDQkPEAJeiELnwgCyjvs="
                    alt=""
                    className="object-cover w-full h-[200px] rounded-3xl"
                  />
                  <button className="bg-[#0a4446] p-3 rounded-full text-white hover:bg-[#fbd459] hover:text-gray-800 text-xs uppercase font-bold">
                    Keyboardist
                  </button>
                </div>
              </div>
            </div>
            <Link
              to="/enroll"
              className="bg-[#fbd459] px-4 py-2 rounded-3xl text-xs font-bold w-fit uppercase"
            >
              Enroll
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;
