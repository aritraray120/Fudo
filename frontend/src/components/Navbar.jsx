import { assets } from "../assets/assets";

function Navbar() {
    return (

        <div className="flex items-center justify-between mb-[70px]">
            <div className="flex cursor-pointer items-center gap-[19px]">
                <img src={assets.logo} alt="" />
                <span className="text-[24px] leading-[22px] font-[600]">Fudo</span>
            </div>

            <div className="hidden items-center gap-[44px] text-[16px] font-[500] md:flex lg:gap-15">
                <a href="#delivery" className="nav-link">Why Us?</a>
                <a href="#menu" className="nav-link">Menu</a>
                <a href="#download" className="nav-link">Download</a>
                <a href="#footer" className="nav-link">Contact</a>

            </div>

            <div className="flex items-center gap-[22px]">
                <img src={assets.search_icon} alt="" className="cursor-pointer" />
                <img src={assets.cart_icon} alt="" className="cursor-pointer" />
                <button className="h-[49px] w-[120px] cursor-pointer rounded-[50px] bg-[#EB5757] text-[16px] font-[500] text-[#F2F2F2] transition-all duration-300 hover:bg-[#FF6B6B] hover:shadow-lg">Login</button>
            </div>
        </div>


    );
}

export default Navbar;