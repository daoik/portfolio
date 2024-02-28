import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiCredly } from "react-icons/si";
import { motion } from "framer-motion";
import React from "react";

const LinkButtons = () => {
  const buttonVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const buttonDelay = 0.1;

  return (
    <div className="inline-flex mt-4  justify-center space-x-5 w-full ">
      {[
        { href: "https://github.com/daoik", icon: <FaGithub /> },
        {
          href: "https://www.linkedin.com/in/dimitris-oikonomou-645373197/",
          icon: <FaLinkedin />,
        },
        { href: "mailto:dimeconomu@gmail.com", icon: <FaEnvelope /> },
        {
          href: "https://www.credly.com/users/dimitrios-alexandros-oikonomou",
          icon: <SiCredly />,
        },
        { href: "tel:+306948223441", icon: <FaPhone /> },
      ].map((link, index) => (
        <motion.div
          key={index}
          className="cursor-pointer rounded-full  border-2 border-stone-800 bg-neutral-200 hover:shadow shadow-purple-600  hover:border-teal-800  group  p-1 "
          transition={{ delay: 1 + index * buttonDelay }}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <a href={link.href}>
            {React.cloneElement(link.icon, {
              className:
                "w-10 p-1  h-10 text-stone-800 transition-all duration-75  group-hover:text-pink-600 ",
            })}
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default LinkButtons;
