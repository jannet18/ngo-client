import React, { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { url: "https://www.artofmusic.co.ke/img/main4.jpg" },
    {
      url: "https://i0.wp.com/music-inn.co.ke/wp-content/uploads/2023/04/music-schools-in-nairobi-kenya-music-inn-internationa-schools-of-kenya-piano-17-scaled-1.jpg?resize=770%2C550&ssl=1",
    },
    {
      url: "https://khusoko.com/wp-content/uploads/2019/12/Art-of-Music.jpg",
    },
    {
      url: "https://media.istockphoto.com/id/1400134569/photo/electric-guitar-playing-young-men-playing-electric-guitar.jpg?s=612x612&w=0&k=20&c=1mDjcLmmsPV_dA1FG5xUKK8O0aN9mqP4ThnVCfv_4H4=",
    },
    {
      url: "https://www.conservatoire.co.ke/site/images/original/gallery-original-3.jpg",
    },
    {
      url: "https://t3.ftcdn.net/jpg/05/57/01/10/360_F_557011048_hiAXWLuvXRR2BxNeKa1OPoZZ0eqGEuTg.jpg",
    },
    {
      url: "https://www.shutterstock.com/image-photo/female-vocalist-performing-music-front-260nw-1259573923.jpg",
    },
  ];

  const handlePrev = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastIndex = currentIndex === images.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="relative flex items-center justify-center">
      <button>
        <GrFormPrevious
          onClick={handlePrev}
          className="absolute w-8 h-8 top-50 cursor-pointer left-10 border p-2 rounded-full text-white hover:bg-white hover:text-[#fbd459]"
          style={{ top: "90%", transform: "translateY(-50%)" }}
        />
      </button>

      <div className="w-full h-full">
        <img
          src={images[currentIndex].url}
          alt=""
          className="w-[100%] h-[100%] object-cover "
        />
      </div>

      <button>
        <MdOutlineNavigateNext
          onClick={handleNext}
          className="absolute w-8 h-8 top-50 cursor-pointer right-10 border rounded-full text-white p-2 hover:bg-white hover:text-[#fbd459]"
          style={{ top: "90%", transform: "translateY(-50%)" }}
        />
      </button>
      <div className="absolute top-[15%] md:top-[10%] left-14 flex flex-col items-start space-y-4">
        <h1 className="text-2xl font-bold text-[#fbd459]">
          Always support talent
        </h1>
        <p className="text-white font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vitae
          dolor sit amet consectetur adipisicing elit
        </p>
        <button className="bg-[#fbd459] px-4 py-2 rounded-full">
          Discover More
        </button>
      </div>
    </div>
  );
}

export default Hero;
