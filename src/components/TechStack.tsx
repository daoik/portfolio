import html5 from "../assets/icons/html5.svg";
import css from "../assets/icons/css.svg";
import js from "../assets/icons/js.svg";
import ts from "../assets/icons/ts.svg";
import react from "../assets/icons/react.svg";
import next from "../assets/icons/next.svg";
import tailwind from "../assets/icons/tailwind.svg";
import figma from "../assets/icons/figma.svg";
import node from "../assets/icons/node.svg";

const TechStack = () => {
  return (
    <div className="w-full flex-row border-t-2 border-b-2 border-teal-950 flex h-44 py-5 shadow-inner  bg-gradient-to-br from-slate-950 to-slate-900">
      <img
        src={html5}
        alt="html5 logo"
        className="transition-all duration-300 saturate-0 hover:saturate-100"
      />{" "}
      <img
        src={css}
        alt="css3 logo"
        className="transition-all duration-300 saturate-0 hover:saturate-100"
      />
      <img
        src={js}
        alt="js logo"
        className="transition-all duration-300 saturate-0 hover:saturate-100"
      />
      <img
        src={ts}
        alt="ts logo"
        className="transition-all duration-300 saturate-0 hover:saturate-100"
      />
      <img
        src={node}
        alt="node logo"
        className="transition-all duration-300 saturate-0 hover:saturate-100"
      />
      <img
        src={react}
        alt="react logo"
        className="transition-all duration-300 saturate-0 hover:saturate-100"
      />
      <img
        src={next}
        alt="next logo"
        className="transition-all duration-300 saturate-0 hover:saturate-100"
      />
      <img
        src={tailwind}
        alt="tailwind logo"
        className="transition-all duration-300 saturate-0 hover:saturate-100"
      />
      <img
        src={figma}
        alt="figma logo"
        className="transition-all duration-300 saturate-0 hover:saturate-100"
      />
    </div>
  );
};

export default TechStack;
