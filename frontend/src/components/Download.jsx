import { assets } from "../assets/assets";

function Download() {
  return (
    <div className="flex flex-col items-center text-center gap-10 mb-40" id="download">
      <h2 className="text-3xl sm:text-5xl font-bold text-[#333333]">
        For a Smoother Experience,<br />Try Fudo App!
      </h2>
      <div className="flex gap-5">
        {[assets.play_store, assets.app_store].map((src, i) => (
          <img key={i} src={src} alt="" className="w-40 sm:w-48 transition-transform hover:scale-110" />
        ))}
      </div>
    </div>
  );
}

export default Download;
