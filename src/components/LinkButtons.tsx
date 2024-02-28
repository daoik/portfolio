import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiCredly } from "react-icons/si";
import { motion } from "framer-motion";
import React from "react";

const LinkButtons = () => {
  const buttonVariants = {
    hidden: { y: -100 },
    visible: { y: 0 },
  };

  const buttonDelay = 0.1;

  return (
    <div className="inline-flex mt-4 z-20 justify-around w-full ">
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
        <motion.a
          key={index}
          href={link.href}
          className="cursor-pointer shadow-xl rounded-full group  bg-gradient-to-br from-neutral-100 to-neutral-400 p-2 hover:border-teal-600"
          transition={{ delay: 1 + index * buttonDelay }}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          {React.cloneElement(link.icon, {
            className:
              "w-10 p-1 group-hover:p-0.5 h-10 text-stone-800 transition-all duration-75  group-hover:text-pink-500",
          })}
        </motion.a>
      ))}
    </div>
  );
};

export default LinkButtons;
