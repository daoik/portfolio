import memoji from "../assets/memoji.png";
import { FaDownload } from "react-icons/fa";
import LinkButtons from "./LinkButtons";
import Blob from "./Blob";

const AboutCard = () => {
  return (
    <div className="m-2 w-96 text-neutral-200 mx-auto">
      <div className="rounded-lg w-full z-20 relative  ">
        <div className="w-full h-full p-4">
          <div className="text-5xl font-semibold">About</div>
          <p className=" tex-lg ">
            Passionate and dedicated Frontend Developer with a keen eye for
            design and a flair for creating intuitive user experiences.
            Proficient in HTML, CSS, JavaScript, and modern frontend frameworks
            like React and Next. Skilled in creating complex design concepts and
            translating them into clean, responsive, and pixel-perfect user
            interfaces. Experienced in collaborating with cross-functional teams
            to deliver high-quality products that meet both user needs and
            business goals. Committed to staying updated with the latest trends
            and technologies in frontend development and design to continuously
            improve and innovate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
