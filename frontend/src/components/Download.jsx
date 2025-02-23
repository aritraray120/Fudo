import { assets } from "../assets/assets";

function Download() {
  return (
    <div className="text-center text-lg font-medium mb-[185px] px-4 " id="download">
      <p className="text-3xl sm:text-[45px] leading-[40px] sm:leading-[60px] font-[700] text-[#333333] mb-10">
        For Better Experience Download <br className="hidden sm:block" /> Tomato App
      </p>
      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        <img
          src={assets.play_store}
          className="w-[160px] sm:w-[210px] hover:scale-105 transition"
          alt="Play Store"
        />
        <img
          src={assets.app_store}
          className="w-[160px] sm:w-[210px] hover:scale-105 transition"
          alt="App Store"
        />
      </div>
    </div>
  );
}

export default Download;
