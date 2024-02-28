import memoji from "../assets/memoji.png";
import { FaDownload } from "react-icons/fa";
import LinkButtons from "./LinkButtons";

const IntroCard = () => {
  return (
    <div className="m-2 w-fit mx-auto">
      <div className="rounded-lg w-96 z-20 shadow-xl relative bg-gradient-to-br from-neutral-100 to-neutral-400 overflow-hidden">
        <div className="w-full h-full p-5">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-xl inline-flex text-neutral-800">
                Hi <div className="animate-wave mx-2 w-min">👋</div> I'm
                Dimitris
              </span>
              <div className="relative">
                <div className="front z-20">
                  <div className="text-2xl w-fit font-bold bg-gradient-to-r from-purple-800 to-pink-600 text-transparent bg-clip-text">
                    Frontend Developer
                  </div>
                  <div className="text-2xl w-fit font-bold bg-gradient-to-r from-green-800 to-emerald-600 text-transparent bg-clip-text">
                    & UI/UX Designer
                  </div>
                </div>
                <div className="back blur-sm scale-12 opacity-75 absolute origin-center top-0">
                  <div className="text-2xl w-fit font-bold bg-gradient-to-r from-purple-800 to-pink-600 text-transparent bg-clip-text">
                    Frontend Developer
                  </div>
                  <div className="text-2xl w-fit font-bold bg-gradient-to-r from-green-800 to-emerald-600 text-transparent bg-clip-text">
                    & UI/UX Designer
                  </div>
                </div>
              </div>
            </div>
            <img src={memoji} alt="memoji" className="h-20 rounded-full" />
          </div>
          <p className="text-md mt-5 text-neutral-800">
            I like building stuff and making them look good.
          </p>
          <div className="inline-flex w-full space-x-10 mt-2">
            <button className="mt-3 cursor-pointer rounded-lg text-slate-700 p-1 px-2 border-slate-700 border hover:bg-gradient-to-tr from-neutral-900 to-neutral-700 hover:text-pink-600 transition-all">
              Hire Me
            </button>
            <button className="mt-3 cursor-pointer rounded-lg hover:scale-105 p-1 px-2 border-slate-700 border text-neutral-200 bg-gradient-to-tr from-neutral-900 to-neutral-700 hover:text-pink-600 transition-all inline-flex items-center">
              <FaDownload className="me-1" /> Download CV
            </button>
          </div>
        </div>
      </div>
      <LinkButtons />
    </div>
  );
};

export default IntroCard;
