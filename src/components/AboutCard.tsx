import { motion } from "framer-motion";
import Blob from "./Blob";
const AboutCard = () => {
  return (
    <div className="m-2 w-96 text-neutral-200 mx-auto">
      <div className="rounded-lg w-full  relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation to perform
          transition={{ duration: 0.5 }} // Transition duration
          className="w-full h-full p-4"
        >
          {" "}
          <div className="text-5xl p-1 py-5 font-semibold">
            {`<`}About{`/>`}
          </div>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }} // Initial animation values
            animate={{ opacity: 1, y: 0 }} // Animation to perform
            transition={{ duration: 0.5, delay: 0.2 }} // Transition duration with a delay
            className="ps-8 tex-lg"
          >
            {" "}
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
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutCard;
