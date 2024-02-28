import { useState } from "react";
import Blob from "./components/Blob";
import "./App.css";
import IntroCard from "./components/IntroCard";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col p-5 bg-stone-200 items-center noise relative">
        <IntroCard />
        <Blob />
      </div>
    </>
  );
}

export default App;
