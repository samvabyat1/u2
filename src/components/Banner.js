import React from "react";
import Image from "../assets/avatar.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <div id="home" className="min-h-[85vh] lg:min-h-[78vh] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 ">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[70px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Samvabya
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">Work in</span>
              <TypeAnimation
                sequence={[
                  "Flutter",
                  2000,
                  "React",
                  2000,
                  "Backend",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg lg:mx-0 "
            >
              I'm a student in electronics engineering and decided to progress in development.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg ">Contact me</button>
              <a href="mailto:samvabyat1@gmail.com" className="">
                @samvabyat1
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 ">
              <a href="https://www.linkedin.com/in/samvabya-sarkar-75ab7626b/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/samvabyat1">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/samvabya">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] ">
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
