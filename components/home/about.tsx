import React from "react";

const About = () => {
  return (
    <div className="flex justify-center lg:mt-36 z-10 text-white">
      <div className="w-[97%] lg:w-[70%] ">
        <div className="flex justify-center items-center relative">
          <div className="flex flex-col items-center ">
            {/* <div className='h-[3px] w-[300px] bg-pink-600 rounded-lg mb-[2px]'></div> */}
            <div className="h-[3px] w-[290px] bg-[#c23c83] rounded-lg my-[2px]"></div>
            <div className="h-[3px] w-[350px] bg-[#c23c83] rounded-lg mt-[2px]"></div>
          </div>

          <div className="text-center poiret text-[30px] font-bold opacity-100 z-30 bg-black px-3 absolute">
            About Our Club
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mt-10 lg:w-[70%] text-gray-500 header text-sm">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              consequatur dolor nihil quisquam facere, corrupti vitae corporis
              itaque molestiae, beatae asperiores impedit maiores rerum cum
              voluptas doloremque perspiciatis amet quaerat incidunt saepe.
              Ipsa, excepturi cumque ex...
            </div>
          </div>
          <div className="lg:w-[80%] w-full h-[200px] md:h-[250px] lg:h-[300px] bg-black mt-10 overflow-hidden hover:cursor-progress ">
          <video autoPlay className="object-cover opacity-50 hover:opacity-100" loop muted  src="../../assets/main.mp4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
