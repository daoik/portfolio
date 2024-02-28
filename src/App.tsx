import { useState } from "react";
import Blob from "./components/Blob";
import "./App.css";
import IntroCard from "./components/IntroCard";
import AboutCard from "./components/AboutCard";

function App() {
  return (
    <>
      <div className="w-screen h-screen   bg-slate-950 bg-opacity-90 relative">
        <div className="w-full h-full backdrop-blur-3xl  ">
          <div className="flex flex-col md:flex-row ">
            <IntroCard />
            <AboutCard />
          </div>
        </div>
        <Blob />
      </div>
    </>
  );
}

export default App;
