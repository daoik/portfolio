import { motion } from "framer-motion";

const PastWorks = () => {
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
            {`<`}Past Works{`/>`}
          </div>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }} // Initial animation values
            whileInView={{ opacity: 1, y: 0 }} // Animation to perform
            transition={{ duration: 0.5, delay: 0.2 }} // Transition duration with a delay
            className="ps-8 "
          >
            During my career, I had the chance to work on a variety of projects,
            from small websites to large scale applications. Although most of my
            work cannot be accessed publicly because of the private nature of
            the projects, I still have a few projects that are publicly
            available and can be accessed through the links provided in this
            section.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default PastWorks;
