import html5 from "../assets/icons/html5.svg";
import css from "../assets/icons/css.svg";
import js from "../assets/icons/js.svg";
import ts from "../assets/icons/ts.svg";
import react from "../assets/icons/react.svg";
import next from "../assets/icons/next.svg";
import tailwind from "../assets/icons/tailwind.svg";
import figma from "../assets/icons/figma.svg";
import node from "../assets/icons/node.svg";
import { motion } from "framer-motion";

const TechStack = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.8 },
  };

  const delay = 0.2;

  return (
    <div className="flex flex-col">
      <div className="w-full flex-row border-t-2 border-b-2 border-teal-950 flex h-44 py-5 shadow-inner group bg-gradient-to-br from-slate-950 to-slate-900">
        {[html5, css, js, ts, react, next, tailwind, figma, node].map(
          (img, index) => (
            <motion.img
              src={img}
              key={index}
              alt="html5 logo"
              transition={{ delay: index * delay }}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              className="group-hover:transition-all cursor-pointer hover:scale-110 hover:opacity-100 !saturate-0 hover:!saturate-100 hover:sibling-saturate-50"
            />
          )
        )}
      </div>
      <div className="mx-auto">
        <div className="m-2 w-96 text-center text-neutral-200">
          <div className="rounded-lg w-full  relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Initial animation values
              animate={{ opacity: 1, y: 0 }} // Animation to perform
              transition={{ duration: 0.5 }} // Transition duration
              className="w-full h-full p-4"
            >
              <div className="text-3xl p-1 py-5 font-semibold">
                {`<`}Tech Stack{`/>`}
              </div>{" "}
              <motion.p
                initial={{ opacity: 0, y: 20 }} // Initial animation values
                animate={{ opacity: 1, y: 0 }} // Animation to perform
                transition={{ duration: 0.5, delay: 0.2 }} // Transition duration with a delay
                className=" text-lg"
              >
                While I may be good using a specific tech stack which includes
                React Next.js and Tailwind, by leveraging the power of LLMs and
                Artificial Intelligence, I can quickly learn and adapt to new
                technologies and frameworks, in a matter of days. Right now I am
                working in using different frontend frameworks like Angular, Vue
                and Svelte.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
