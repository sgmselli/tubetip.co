import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Check } from "lucide-react";

import Logo from '../../components/Logo';
import MotionDiv from '../../components/divAnimation';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(route);
  };

  return (
    <div className="flex flex-col min-h-screen w-full items-center">
      <div className="w-[90%] max-w-[1200px] flex flex-col items-center flex-1">

        {/* Navbar */}
        <nav className="flex items-center justify-between w-full h-[90px] md:h-[120px]">
          <div className="flex flex-row items-center gap-2">
            <Logo />
            <h1 className="font-semibold text-lg text-gray-700 hidden md:inline">TubeTip</h1>
          </div>

          <div className="flex flex-row items-center gap-6 md:gap-8">
            {/* Search Modal */}
            {/* <input type="checkbox" id="search-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box rounded-xl">
                <h3 className="font-bold text-lg mb-4">Search Creators</h3>
                <input 
                  type="text" 
                  placeholder="Type a creator name..." 
                  className="input input-bordered w-full rounded-full" 
                />
                <div className="modal-action">
                  <label htmlFor="search-modal" className="btn">Close</label>
                </div>
              </div>
            </div>
            <label htmlFor="search-modal" className="cursor-pointer">
              <div className="flex items-center w-full rounded-full bg-gray-100 pl-4 pr-10 py-3 cursor-text hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16.65 11.5a5.15 5.15 0 11-10.3 0 5.15 5.15 0 0110.3 0z" />
                </svg>
                <span className="ml-3 text-gray-700">Search creators</span>
              </div>
            </label> */}

            <button
              className="font-semibold text-gray-700"
              onClick={() => handleNavigate("/login")}
            >
              Log in
            </button>

            <button
              className="btn primary-btn border-0 rounded-xl"
              onClick={() => handleNavigate("/register")}
            >
              Sign up
            </button>
          </div>
        </nav>

        {/* Centered content */}
        <MotionDiv className="flex flex-1 flex-col items-center max-w-2xl text-center mt-[10px]">
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-700 leading-tight mt-4">
            Fund your <br/> YouTube channel
          </h1>
          <h3 
            className="text-md sm:text-lg md:text-xl text-gray-500 font-medium leading-relaxed mt-8"
          >
            Let your viewers give donations & get the support your YouTube channel finally deserves.
          </h3>
          <div
            className="flex flex-col justify-center items-start mt-10"
          >
            <div
              className="flex flex-row items-center gap-3"
            >
              <Check className="w-4 h-4 text-green-500 stroke-[2.5]" />
              <h4 className="text-sm md:text-md text-gray-500 font-normal italic">Less than one minute set up</h4>
            </div>
            <div
              className="flex flex-row items-center gap-3 mt-4"
            >
              <Check className="w-4 h-4 text-green-500 stroke-[2.5]" />
              <h4 className="text-sm md:text-md text-gray-500 font-normal italic">Completely free to join</h4>
            </div>
            <div
              className="flex flex-row items-center gap-3 mt-4"
            >
              <Check className="w-4 h-4 text-green-500 stroke-[2.5]" />
              <h4 className="text-sm md:text-md text-gray-500 font-normal italic">Earn money while creating</h4>
            </div>
          </div>
          <button
            onClick={() => handleNavigate("/register")}
            className='btn btn-lg md:btn-xl px-10 py-7 md:py-8 primary-btn border-0 rounded-xl mt-12'>
            Start my page
          </button>

          <div className="flex flex-col gap-3 md:gap-0 md:flex-row items-center space-x-4 mt-15 md:mt-20">
            {/* Avatars */}
            <div className="flex justify-center ml-3 -space-x-3">
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-3 ring-white">
                  <img src="https://i.pravatar.cc/40?img=1" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-3 ring-white">
                  <img src="https://i.pravatar.cc/40?img=2" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-3 ring-white">
                  <img src="https://i.pravatar.cc/40?img=3" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-3 ring-white">
                  <img src="https://i.pravatar.cc/40?img=4" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-3 ring-white">
                  <img src="https://i.pravatar.cc/40?img=5" />
                </div>
              </div>
            </div>

            {/* Stars + Text */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="rating rating-sm space-x-1">
                <input type="radio" className="mask mask-star-2" style={{ backgroundColor: "#FFD700" }} checked readOnly />
                <input type="radio" className="mask mask-star-2" style={{ backgroundColor: "#FFD700" }} checked readOnly />
                <input type="radio" className="mask mask-star-2" style={{ backgroundColor: "#FFD700" }} checked readOnly />
                <input type="radio" className="mask mask-star-2" style={{ backgroundColor: "#FFD700" }} checked readOnly />
                <input type="radio" className="mask mask-star-2" style={{ backgroundColor: "#FFD700" }} checked readOnly />
              </div>
              <span className=" text-sm text-gray-700 font-semibold">
                1000+ <span className="font-normal">YouTuber's earn more</span>
              </span>
            </div>
          </div>
        </MotionDiv>


        <MotionDiv
          className="flex flex-col flex-1 justify-center items-center text-center w-full mt-20 md:mt-30"
        >
            <p className="text-sm md:text-md text-gray-500 font-medium tracking-wider">SUPER THANKS</p>
            <div
              className="max-w-4xl"
            >
              <h2 className="text-3xl sm:text-4xl md:text-6xl text-gray-700 font-bold leading-tight mt-4">
                Stop paying <span className="primary-text italic">60%</span> fees <br/> for YouTube Super Thanks.
              </h2>
              <h3 
                className="text-md md:text-xl text-gray-500 font-medium leading-relaxed mt-8"
              >
                TubeTip makes supporting YouTube creators fun and easy. In just a couple of taps, your fans can make the payment and leave a message - without 60% of fees lost (unlike Super Thanks).
              </h3>
            </div>
          
            <div  
              className="max-w-lg mt-15 md:mt-20"
            >
              <Donate />
            </div>
        </MotionDiv>

        <MotionDiv
          className="flex flex-col flex-1 justify-center items-center text-center max-w-lg mt-20 md:mt-30"
        >
          <div className="rating rating-sm space-x-1">
            <input type="radio" className="mask mask-star-2" style={{ backgroundColor: "#FFD700" }} checked readOnly />
            <input type="radio" className="mask mask-star-2" style={{ backgroundColor: "#FFD700" }} checked readOnly />
            <input type="radio" className="mask mask-star-2" style={{ backgroundColor: "#FFD700" }} checked readOnly />
            <input type="radio" className="mask mask-star-2" style={{ backgroundColor: "#FFD700" }} checked readOnly />
            <input type="radio" className="mask mask-star-2" style={{ backgroundColor: "#FFD700" }} checked readOnly />
          </div>

          <p className="text-gray-700 italic mt-5">"It's so quick to set up a profile and receive financial support from subscribers, why wouldn't you do it?"</p>

          <p className="text-gray-700 font-semibold mt-5">Matt Makes Code</p>

          <p className="text-gray-600 text-sm mt-2 flex items-center gap-1">
            <span className="font-semibold">955</span> subscribers on
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="ml-1 w-5 h-5 fill-red-600">
              <path d="M549.65 124.08a68.65 68.65 0 0 0-48.24-48.5C458.8 64 288 64 288 64s-170.8 0-213.41 11.58a68.65 68.65 0 0 0-48.24 48.5A715.89 715.89 0 0 0 16 256a715.89 715.89 0 0 0 10.35 131.92 68.65 68.65 0 0 0 48.24 48.5C117.2 448 288 448 288 448s170.8 0 213.41-11.58a68.65 68.65 0 0 0 48.24-48.5A715.89 715.89 0 0 0 560 256a715.89 715.89 0 0 0-10.35-131.92ZM232 336V176l142 80Z"/>
            </svg>
          </p>
          
        </MotionDiv>


      </div>
      <footer className="footer sm:footer-horizontal flex flex-col items-center justify-center bg-base-200 text-base-content py-25 px-30 mt-20">
        <div className="flex flex-col items-center justify-center max-w-xl gap-6">
          <div className="flex flex-row items-center gap-2">
              <Logo />
              <h1 className="font-semibold text-xl text-gray-700">TubeTip</h1>
            </div>
            <p className='font-medium text-gray-600 mt-2 leading-relaxed text-center'>
              Supporting YouTube creators made easy. Let your subscribers support you financially, without paying 60% Super Thanks fees.
            </p>
            <button onClick={() => handleNavigate("/register")} className='btn btn-lg primary-btn rounded-lg border-0 mt-4'>Start my page</button>
        </div>
      </footer>
    </div>
  );
};

const Donate: React.FC = () => {
  return (
    <div className="relative flex justify-center md:justify-start px-4 md:px-0">

      {/* Floating Badges */}
      <div className="absolute top-20 -left-1 md:top-6 md:-left-12 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md z-50">
        <span className="text-2xl">❤️</span>
      </div>

      <div className="absolute top-40 -right-1 md:top-30 md:-right-8 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md z-50">
        <span className="text-3xl">💯</span>
      </div>

      <div className="md:hidden absolute bottom-40 left-6 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md z-50">
        <span className="text-3xl">🔥</span>
      </div>

      <div className="hidden md:block absolute -top-4 -right-10 bg-white rounded-lg px-6 py-4 shadow-md border border-gray-200 z-50">
        <p><span className='font-semibold'>Matt</span> TubeTipped £15 💸</p>
      </div>

      <div className="hidden md:block absolute bottom-20 -left-20 bg-white rounded-lg px-6 py-4 shadow-md border border-gray-200 z-50">
        <p><span className='font-semibold'>Someone</span> TubeTipped £9 💸</p>
        <div className="bg-red-50 py-4 px-6 w-fit rounded-lg mt-2">
            <p className="text-sm text-gray-700 font-normal">Thanks for the content!</p>
        </div>
      </div>

      {/* Main Card */}
      <div className="p-10 rounded-xl bg-white shadow-lg order-1 md:order-2 relative z-10">
        <div className='flex flex-col w-full text-start '>
            <h2 className="text-lg md:text-2xl text-gray-700 font-semibold mb-2">Give <span >Mr Beast</span> a TubeTip</h2>
            <h4 className="text-sm md:text-lg font-normal text-gray-500">A TubeTip is a friendly way of giving support to YouTube creators. 1 TubeTip = £3.</h4>
            <div className="flex flex-row gap-1 md:gap-3 items-center justify-center w-full h-[100px] bg-red-50 rounded-lg border-2 border-red-100 mt-5 px-2">
              <Logo />
              <div className="text-xl text-gray-500 font-semibold mr-3">x</div>

              <div className="bg-white border-2 flex items-center justify-center h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded-full border-base-300">
                  <p className={"text-md text-red-300 font-bold"}>1</p>
              </div>
              <div className="primary-background flex items-center justify-center h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded-full border-base-300 cursor-pointer">
                  <p className={"text-md text-white font-bold"}>3</p>
              </div>
              <div className="bg-white border-2 flex items-center justify-center h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded-full border-base-300 cursor-pointer">
                  <p className={"text-md text-red-300 font-bold"}>5</p>
              </div>
          </div>
          <div className="form-control mt-5">
            <input
              placeholder="Your name (optional)"
              className={"input input-lg w-full bg-base-200 rounded-lg text-[14px] font-medium focus:outline-none focus:bg-white"}
            />
          </div>

          <div className="form-control mt-5">
              <textarea
                placeholder="Write a nice message with your TubeTip (optional)"
                className={`textarea textarea-lg w-full rounded-lg min-h-[150px] resize-none 
                  bg-base-200 !text-[14px] font-medium 
                  focus:outline-none focus:bg-white`}
              />
          </div>

          <button
              type='submit'
              className="btn primary-btn btn-lg md:btn-xl text-sm md:text-[16px] font-medium border-0 rounded-lg w-[100%] mt-5"
          >
              Tip £9
          </button>
        </div>
      </div>
    </div>
  )
}

export default Landing;