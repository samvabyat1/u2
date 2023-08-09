import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top "
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent ">About me.</h2>
            <h3 className="h3 mb-4">I'm a Flutter developer.</h3>
            <p className="mb-6">
              Also skilled in android studio, web dev in react.js and next.js, tailwind css, bootsrap, database management and advance ui/ux designing.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary mb-2">A</div>
                <div className="font-primary text-sm tracking-[2px]">
                  Electronics <br />
                  Student
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary mb-2">15+</div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
            </div>
            {/* <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg ">Contact me</button>
              <a className="" href="#">
                My Portfolio
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
