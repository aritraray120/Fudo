import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[62px] px-6 py-12 text-center sm:text-left" id="footer">
      {/* Logo & Socials */}
      <div className="flex flex-col sm:items-start items-center cursor-pointer">
        <div className="flex flex-row items-center gap-2 mb-[24px]">
          <img src={assets.logo} alt="Logo" className="h-[30px] w-auto" />
          <span className="text-[24px] leading-[30px] font-[600]">Fudo</span>
        </div>


        <span className="text-[16px] leading-[30px] font-[500] text-[#333333] mb-[20px]">
          Our job is to filling your tummy with delicious food and with fast and free delivery.
        </span>
        <div className="flex gap-[25px]">
          <img src={assets.instagram_icon} alt=""  className="cursor-pointer" />
          <img src={assets.fb_icon} alt=""  className="cursor-pointer"/>
          <img src={assets.twitter_icon} alt="" className="cursor-pointer" />
        </div>
      </div>

      {/* About */}
      <div className="flex flex-col sm:items-start items-center cursor-pointer">
        <span className="mb-[24px] text-[20px] leading-[22px] font-[600]">About</span>
        {["About Us", "Features", "News", "Menu"].map((item) => (
          <p key={item} className="text-[16px] leading-[30px] font-[500] text-[#333333]">{item}</p>
        ))}
      </div>

      {/* Company */}
      <div className="flex flex-col sm:items-start items-center cursor-pointer">
        <span className="mb-[24px] text-[24px] leading-[22px] font-[600]">Company</span>
        {["Why Fudo?", "Partner With Us", "FAQ", "Blog"].map((item) => (
          <p key={item} className="text-[16px] leading-[30px] font-[500] text-[#333333]">{item}</p>
        ))}
      </div>

      {/* Support */}
      <div className="flex flex-col sm:items-start items-center cursor-pointer">
        <span className="mb-[24px] text-[24px] leading-[22px] font-[600]">Support</span>
        {["Account", "Support Center", "Feedback", "Contact Us", "Accessibility"].map((item) => (
          <p key={item} className="text-[16px] leading-[30px] font-[500] text-[#333333]">{item}</p>
        ))}
      </div>

      {/* Get in Touch */}
      <div className="flex flex-col sm:items-start items-center cursor-pointer">
        <span className="mb-[24px] text-[24px] leading-[22px] font-[600]">Get in Touch</span>
        <p className="text-[16px] leading-[30px] font-[500] text-[#333333]">Questions or feedback?</p>
        <p className="mb-[33px] text-[16px] leading-[30px] font-[500] text-[#333333]">We'd love to hear from you</p>

        <div className="relative flex items-center w-full max-w-[250px]">
          <input
            type="email"
            placeholder="Email Address"
            className="h-[51px] w-full rounded-[60px] border border-[#BDBDBD] px-5 pr-14"
          />
          <img
            className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7"
            src={assets.send_icon}
            alt=""
          />
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-5">
        <hr className="my-6 border-[#BDBDBD]" />
        <p className="text-center text-[14px] leading-[20px] font-[500] text-[#333333]">
          © 2025 Fudo. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
