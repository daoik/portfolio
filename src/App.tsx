import { useState } from "react";

import "./App.css";
import IntroCard from "./components/IntroCard";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col p-5 bg-stone-800 items-center noise">
        <IntroCard />
      </div>
    </>
  );
}

export default App;
