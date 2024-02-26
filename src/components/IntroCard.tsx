import memoji from "../assets/memoji.png";

const IntroCard = () => {
  return (
    <div className="rounded-lg w-fit relative overflow-hidden ">
      <div className="w-full h-full  p-2 ">
        <div className="flex justify-between ">
          <div className="flex flex-col">
            <span className="text-xl inline-flex text-neutral-200">
              Hi <div className="animate-wave mx-2 w-min">👋</div> I'm Dimitris
            </span>
            <div className="relative">
              <div className="front z-20 ">
                {" "}
                <div className="text-2xl  w-fit font-bold bg-gradient-to-r from-purple-800 to-pink-600 text-transparent bg-clip-text">
                  Frontend Developer
                </div>
                <div className="text-2xl w-fit font-bold bg-gradient-to-r from-green-800 to-emerald-600 text-transparent bg-clip-text">
                  & UI/UX Designer
                </div>
              </div>
              <div className="back blur-sm scale-12 opacity-75 absolute origin-center top-0 ">
                <div className="text-2xl w-fit font-bold bg-gradient-to-r from-purple-800 to-pink-600 text-transparent bg-clip-text">
                  Frontend Developer
                </div>
                <div className="text-2xl w-fit font-bold bg-gradient-to-r from-green-800 to-emerald-600 text-transparent bg-clip-text">
                  & UI/UX Designer
                </div>
              </div>
            </div>
          </div>
          <img src={memoji} alt="memoji" className="h-20   rounded-full" />
        </div>
        <p className="text-md mt-5 text-neutral-200">
          I like building stuff and making them look good.
        </p>
      </div>
    </div>
  );
};

export default IntroCard;
