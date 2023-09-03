import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar = () => {
  return (
    <div className="flex text-center justify-center items-center leading-tight">
      {/* <div className='h-10 bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] opacity-25 flex items-center justify-center  backdrop-filter backdrop-blur-2xl'>
            <div className=''>
            <InstagramIcon  className='text-black mx-5 h-7 w-7'/>
            <FacebookIcon className='text-black mx-3 h-7 w-7 my-3' />
            <TwitterIcon className='text-black  mx-3 h-7 w-7 my-3' />
            <LinkedInIcon className='text-black  mx-3 h-7 w-7 my-3' />
            </div>
        </div> */}

      <div className="w-[70%] mt-10 ">
        {/* <div className='text-[40px] font-bold poiret  -mb-8 opacity-100'> Welcome to </div> */}
          <div className="relative">
        <div className="text-[72px] absolute  -inset-2 blur-sm opacity-60 font-medium blackOps bg-clip-text text-transparent bg-gradient-to-r from-[#c23c83]  to-[#6b28d5] ">
          Entrepreneurship Cell
        </div>
        <div className="text-[72px]  font-medium blackOps bg-clip-text text-transparent bg-gradient-to-r from-[#c23c83]  to-[#6b28d5] opacity-100 ">
          Entrepreneurship Cell
        </div>
        </div>
        <div className="text-[50px] font-medium blackOps text-gray-300 opacity-100 ">
          MJCET
        </div>

        {/* <div className='text-[14px]  mt-2 lg:max-w-[400px] poiret font-semibold text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugit eligendi dolores neque dolor sed sunt quisquam tempora 
          nesciunt? Quas nihil totam alias quos, sunt....</div> */}
        <div className="grid gap-8 items-start justify-center my-20">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#c23c83]  to-[#6b28d5] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button className=" relative px-10 py-4 bg-black rounded-lg leading-none flex items-center space-x-5 ">
              <span className="text-gray-300 header font-semibold tracking-wide text-[20px] flex items-center justify-center">
                Ideate{" "}
                <div className="h-[10px] w-[10px] rounded-full bg-[#6b28d5] mx-2 mt-1 group-hover:bg-[#c23c83] transition duration-1000">
                  {" "}
                </div>{" "}
                Innovate{" "}
                <div className="h-[10px] w-[10px] rounded-full bg-[#6b28d5] mx-2 mt-1 group-hover:bg-[#c23c83] transition duration-1000">
                  {" "}
                </div>
                Incubate
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
