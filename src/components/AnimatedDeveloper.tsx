import developerSolo from "../assets/developerSolo.png";
import cog from "../assets/cog.png";
import windows from "../assets/windows.png";
import blink1 from "../assets/blink1.png";
import blink2 from "../assets/blink2.png";
import blink3 from "../assets/blink3.png";
const AnimatedDeveloper = () => {
  return (
    <div className="relative">
      <img src={developerSolo} alt="Developer Image" className=" h-96" />
      {/* <img
        src={developerSolo}
        alt="Developer Person"
        className="absolute top-0 h-96"
      /> */}
      <img
        src={cog}
        alt="Spinning Cog"
        className="absolute animate-spin top-48 right-16 h-8"
      />
      <img
        src={windows}
        alt="Background Windows"
        className="absolute animate-pulse top-24 h-20 w-auto right-12"
      />
      <img
        src={blink1}
        alt="Blink 1"
        className="absolute animate-wave top-64 left-14 h-4"
      />
      <img
        src={blink2}
        alt="Blink 2"
        className="absolute animate-wave bottom-16 left-32 h-3"
      />
      <img
        src={blink3}
        alt="Blink 3"
        className="absolute animate-bounce  delay-75 bottom-20 right-20 h-3"
      />
    </div>
  );
};

export default AnimatedDeveloper;
