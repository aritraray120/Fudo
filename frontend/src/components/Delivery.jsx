import { assets } from "../assets/assets";

function Delivery() {
    return (

        <div className="flex flex-col mb-[185px]" id="delivery">

            <div className="flex flex-col justify-center text-center mb-[40px]">
                <span className="mb-[10px] text-[18px] leading-[22px] font-[600] text-[#EB5757]">
                    WHAT WE SERVE
                </span>
                <span className="text-3xl sm:text-5xl leading-[40px] sm:leading-[60px] font-[700] text-[#333333]">
                    <span className="inline-block sm:block">Your Favorite Food</span>{" "}
                    <span className="inline-block sm:block">Delivery Partner</span>
                </span>
            </div>


            {/* Card Views */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 text-center w-full h-full">
                <div className="flex flex-col items-center justify-between w-full h-full">
                    <img src={assets.women_ordering_img} alt="" className="h-[220px] w-[220px] object-contain" />
                    <span className="text-[30px] leading-[45px] font-[700] text-[#000000] mt-5">Easy To Order</span>
                    <span className="text-[20px] leading-[32px] font-[500] text-[#333333]">
                        You only need a few steps in<br />ordering food
                    </span>
                </div>

                <div className="flex flex-col items-center justify-between w-full h-full">
                    <img src={assets.take_away_img} alt="" className="h-[220px] w-[220px] object-contain" />
                    <span className="text-[30px] leading-[45px] font-[700] text-[#000000] mt-5">Fastest Delivery</span>
                    <span className="text-[20px] leading-[32px] font-[500] text-[#333333]">
                        Delivery that is always on time<br />even faster
                    </span>
                </div>

                <div className="flex flex-col items-center justify-between w-full h-full">
                    <img src={assets.waiters_img} alt="" className="h-[220px] w-[220px] object-contain" />
                    <span className="text-[30px] leading-[45px] font-[700] text-[#000000] mt-5">Best Quality</span>
                    <span className="text-[20px] leading-[32px] font-[500] text-[#333333]">
                        Not only fast, for us quality is also<br />number one
                    </span>
                </div>
            </div>




        </div>


    );
}
export default Delivery;
