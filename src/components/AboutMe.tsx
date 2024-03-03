import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="m-2 w-96 text-neutral-200">
      <div className="rounded-lg w-full  relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial animation values
          whileInView={{ opacity: 1, y: 0 }} // Animation to perform
          transition={{ duration: 0.5 }} // Transition duration
          className="w-full h-full p-4"
        >
          <div className="text-3xl p-1 py-5 font-semibold">
            {`<`}About Me{`/>`}
          </div>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }} // Initial animation values
            whileInView={{ opacity: 1, y: 0 }} // Animation to perform
            transition={{ duration: 0.5, delay: 0.2 }} // Transition duration with a delay
            className="ps-8 "
          >
            I'm a frontend developer who's genuinely passionate about crafting
            user-centric experiences. With a knack for design and a love for
            clean interfaces, I work primarily with React or Next.js, combined
            with libraries like Tailwind CSS. While I enjoy creating intricate
            designs, my focus is always on making them intuitive and responsive.
            Collaborating with diverse teams, I strive to deliver products that
            not only meet user needs but also align with business objectives.
            I'm dedicated to staying abreast of industry trends, constantly
            seeking opportunities to grow and innovate in frontend development
            and design.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
