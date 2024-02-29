import artistSolo from "../assets/artistSolo.png";
import palette from "../assets/palette.png";
import frame from "../assets/frame.png";
import blink4 from "../assets/blink4.png";
import blink5 from "../assets/blink5.png";
import blink6 from "../assets/blink6.png";
const AnimatedDesigner = () => {
  return (
    <div className="relative">
      <img src={artistSolo} alt="Developer Image" className=" h-96" />
      <img
        src={palette}
        alt="Spinning Palette"
        className="absolute top-32 animate-pulse left-6 h-16"
      />
      <img
        src={frame}
        alt="Background Frame"
        className="absolute animate-wave top-20 h-14 w-auto right-24"
      />
      <img
        src={blink4}
        alt="Blink 4"
        className="absolute animate-bounce top-32 right-14 h-3"
      />
      <img
        src={blink5}
        alt="Blink 5"
        className="absolute animate-wave top-20 left-40 h-3"
      />
      <img
        src={blink4}
        alt="Blink 4"
        className="absolute animate-bounce  delay-75 top-20 left-20 h-3"
      />
      <img
        src={blink6}
        alt="Blink 6"
        className="absolute animate-bounce  delay-75 bottom-16 left-40 h-2.5 "
      />
    </div>
  );
};

export default AnimatedDesigner;
