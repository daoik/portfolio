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
    <div className="inline-flex mt-3 z-10 justify-evenly w-full px-5">
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
          className="rounded-full group bg-gradient-to-br from-neutral-900 to-neutral-700 border-slate-300 hover:border-teal-600 border-2 ring-4 ring-stone-900"
          transition={{ delay: index * buttonDelay }}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          {React.cloneElement(link.icon, {
            className:
              "w-10 p-1 group-hover:p-0.5 h-10 text-stone-200 transition-all duration-75 group-hover:text-pink-500",
          })}
        </motion.a>
      ))}
    </div>
  );
};

export default LinkButtons;
