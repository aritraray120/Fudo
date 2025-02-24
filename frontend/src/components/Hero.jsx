 
import { assets } from "../assets/assets";

function Hero() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-around mb-[120px] sm:mb-[180px] px-4 sm:px-0">

            {/* Hero-left */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

                {/* Button */}
                <div className="mb-[30px] sm:mb-[42px] flex h-[44px] sm:h-[52px] w-[180px] sm:w-[204px] items-center justify-center gap-[15px] sm:gap-[20px] rounded-[50px] bg-[#FEE9DE] px-[15px] sm:px-[20px] py-[8px] sm:py-[11px]">
                    <span className="text-[14px] sm:text-[15px] font-[500] text-[#EB5757]">More than Faster</span>
                    <img src={assets.cherry_image} alt="" className="w-[20px] sm:w-auto" />
                </div>

                {/* Title (Responsive Line Breaks) */}
                <span className="text-4xl sm:text-6xl lg:text-7xl leading-[45px] sm:leading-[80px] font-[700]">
                    <span className="inline-block sm:block">Be The Fastest</span>{" "}
                    <span className="inline-block sm:block">In Delivering</span>{" "}
                    <span className="text-[#EB5757] inline-block sm:block">Your Food</span>
                </span>

                {/* Subtitle */}
                <div className="mt-3 sm:mt-5 mb-[20px] sm:mb-[25px]">
                    <span className="text-[16px] sm:text-[18px] leading-[26px] sm:leading-[30px] font-[500]">
                        Our job is to fill your tummy with delicious food and with fast and free delivery
                    </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-[30px] sm:gap-[30px]">
                    <button className="h-[50px] sm:h-[68px] w-[160px] sm:w-[186px] cursor-pointer rounded-[50px] bg-[#EB5757] px-[15px] sm:px-[20px] py-[8px] sm:py-[11px] text-[16px] sm:text-[18px] font-[500] text-white transition-all duration-300 hover:bg-[#FF6B6B] hover:shadow-lg">
                        Get Started
                    </button>

                    {/* Watch Video */}
                    <div className="items-center justify-center gap-[10px] sm:gap-[12px] cursor-pointer sm:flex hidden lg:flex transition-all duration-300 hover:scale-105 hover:text-yellow-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500 transition-all duration-300 hover:text-yellow-600">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                            />
                        </svg>
                        <span className="text-[16px] sm:text-[18px] leading-[26px] sm:leading-[30px] font-[500] transition-all duration-300 hover:text-yellow-600">
                            Watch Video
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero-right (Image) */}
            <div className="relative z-[1] flex justify-center lg:block mt-8 sm:mt-0">
                <img src={assets.shahi_paneer} alt="" className="w-[80%] sm:w-[100%] h-auto" />
            </div>

        </div>
    );
}

export default Hero;
