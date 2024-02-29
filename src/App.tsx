import { useState } from "react";
import Blob from "./components/Blob";
import "./App.css";
import developer from "./assets/developer_male.png";
import artist from "./assets/digital_artist_male.png";
import html5 from "./assets/icons/html5.svg";
import css from "./assets/icons/css.svg";
import js from "./assets/icons/js.svg";
import ts from "./assets/icons/ts.svg";
import react from "./assets/icons/react.svg";
import next from "./assets/icons/next.svg";
import tailwind from "./assets/icons/tailwind.svg";
import figma from "./assets/icons/figma.svg";
import node from "./assets/icons/node.svg";
import IntroCard from "./components/IntroCard";
import AboutCard from "./components/AboutCard";

function App() {
  return (
    <>
      <div className="min-h-screen w-screen bg-slate-900 bg-opacity-90 relative">
        <div className="w-full h-full backdrop-blur-3xl  ">
          <div className="flex justify-center items-center flex-col md:flex-row ">
            <IntroCard />
            <img src={developer} alt="Developer Image" className=" h-96" />
          </div>
          <div className="flex w-full justify-center items-center flex-col-reverse md:flex-row ">
            <img src={artist} alt="Developer Image" className=" h-96" />
            <AboutCard />
          </div>{" "}
          <div className="w-full flex-row  flex h-44 py-5 shadow-inner  bg-gradient-to-br from-slate-950 to-slate-900">
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
          <div className="flex w-full justify-center items-center flex-col-reverse md:flex-row ">
            <AboutCard />
            <img src={artist} alt="Developer Image" className=" h-96" />
          </div>
        </div>
        <Blob />
      </div>
    </>
  );
}

export default App;
