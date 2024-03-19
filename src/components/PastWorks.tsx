import { motion } from "framer-motion";
import Carousel from "./Carousel";

const PastWorks = () => {
  return (
    <div className="w-full text-neutral-200 mx-auto">
      <div className="m-2 w-1/2 text-center mx-auto ">
        <div className="rounded-lg w-full  relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial animation values
            whileInView={{ opacity: 1, y: 0 }} // Animation to perform
            transition={{ duration: 0.5 }} // Transition duration
            className="w-full h-full p-4"
          >
            <div className="text-3xl p-1 py-5 font-semibold">
              {`<`}Past Works{`/>`}
            </div>{" "}
            <motion.p
              initial={{ opacity: 0, y: 20 }} // Initial animation values
              whileInView={{ opacity: 1, y: 0 }} // Animation to perform
              transition={{ duration: 0.5, delay: 0.2 }} // Transition duration with a delay
              className="ps-8 "
            >
              During my career, I had the chance to work on a variety of
              projects, from small websites to large scale applications.
              Although most of my work cannot be accessed publicly because of
              the private nature of the projects, I still have a few projects
              that are publicly available and can be accessed through the links
              provided in this section.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className="w-full justify-center flex">
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial animation values
          whileInView={{ opacity: 1, y: 0 }} // Animation to perform
          transition={{ duration: 0.5 }} // Transition duration
          className="w-2/3 h-full p-4 md:flex px-10"
        >
          <div className="flex  flex-col">
            <div className="text-2xl p-1 py-5 font-semibold">
              Vessel Monitoring App
            </div>{" "}
            <motion.p
              initial={{ opacity: 0, y: 20 }} // Initial animation values
              whileInView={{ opacity: 1, y: 0 }} // Animation to perform
              transition={{ duration: 0.5, delay: 0.2 }} // Transition duration with a delay
              className=" mb-8  md:w-48 text-end"
            >
              {" "}
              The application is used by a large corporation to track their sea
              vessels, in real time. I had the pleasure to do the design and
              implement the GUI. This project is private and I can only provide
              screenshots.
            </motion.p>
          </div>

          <Carousel
            pictures={[
              "src/images/Pry1.png",
              "src/images/Pry2.png",
              "src/images/Pry3.png",
              "src/images/Pry4.png",
            ]}
          />
        </motion.div>{" "}
      </div>
      <div className="w-full justify-center flex mt-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial animation values
          whileInView={{ opacity: 1, y: 0 }} // Animation to perform
          transition={{ duration: 0.5 }} // Transition duration
          className="w-2/3 h-full p-4 md:flex px-10"
        >
          {" "}
          <div className="w-full flex justify-center  group relative overflow-hidden me-5">
            <img
              src="src/images/Luiss.png"
              alt={`Portfolio Image `}
              className="object-cover rounded-2xl h-96 px-2 mx-2  group-hover:opacity-25 transition-all "
            />
            <a
              className="self-center rounded border p-2 absolute invisible group-hover:visible hover:opacity-75"
              href="https://www.luiss.it"
            >
              Click here to visit
            </a>
          </div>
          <div className="flex  flex-col">
            <div className="text-2xl p-1 py-5 font-semibold">
              University Page
            </div>{" "}
            <motion.p
              initial={{ opacity: 0, y: 20 }} // Initial animation values
              whileInView={{ opacity: 1, y: 0 }} // Animation to perform
              transition={{ duration: 0.5, delay: 0.2 }} // Transition duration with a delay
              className=" mb-8  md:w-48"
            >
              {" "}
              This was part of my work on Deloitte. It is a web page that is
              currently being used by an active university in Italy. I was given
              a design and only implemented it.
            </motion.p>
          </div>
        </motion.div>{" "}
      </div>
    </div>
  );
};

export default PastWorks;
