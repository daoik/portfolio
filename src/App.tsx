import { useState } from "react";
import Blob from "./components/Blob";
import "./App.css";
import developer from "./assets/developer_male.png";
import artist from "./assets/digital_artist_male.png";
import IntroCard from "./components/IntroCard";
import AboutCard from "./components/AboutCard";
import TechStack from "./components/TechStack";

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
          <TechStack />
        </div>
        <Blob />
      </div>
    </>
  );
}

export default App;
