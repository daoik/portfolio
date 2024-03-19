import Blob from "./components/Blob";
import "./App.css";
import IntroCard from "./components/IntroCard";
import AboutCard from "./components/AboutMe";
import TechStack from "./components/TechStack";
import AnimatedDeveloper from "./components/AnimatedDeveloper";
import AnimatedDesigner from "./components/AnimatedDesigner";
import PastWorks from "./components/PastWorks";
function App() {
  return (
    <>
      <div className="min-h-screen w-screen bg-slate-900 bg-opacity-90 relative">
        <div className="w-full h-full backdrop-blur-3xl">
          <div className="flex justify-center items-center flex-col md:flex-row ">
            <IntroCard />
            <AnimatedDeveloper />
          </div>
          <div className="flex w-full justify-center items-center flex-col-reverse md:flex-row ">
            <AnimatedDesigner />
            <AboutCard />
          </div>

          <TechStack />
          <PastWorks />
        </div>
        <Blob />
      </div>
    </>
  );
}

export default App;
