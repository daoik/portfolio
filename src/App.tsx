import { useState } from "react";
import Blob from "./components/Blob";
import "./App.css";
import IntroCard from "./components/IntroCard";
import AboutCard from "./components/AboutCard";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col md:flex-row p-5 noise bg-neutral-800  relative">
        <IntroCard />
        <AboutCard />
        {/* <Blob /> */}
      </div>
    </>
  );
}

export default App;
