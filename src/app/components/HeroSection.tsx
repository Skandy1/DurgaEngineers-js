"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import heroImg from "@/assets/heroImg.jpg";

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 10, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="text-gray-600 body-font mb-12"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          variants={itemVariants}
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-600">
            Welcome to Durga Engineers:
            <br className="hidden lg:inline-block" />
            Your Trusted Fire Protection Partner
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
            At Durga Engineers, we are committed to providing reliable,
            end-to-end fire protection and security solutions for a wide variety
            of industries. With years of experience and a strong team of
            professionals, we offer a blend of expertise, quality, and
            affordability. Our mission is to safeguard lives and assets by
            providing robust fire fighting systems, consultancy services, and
            ongoing maintenance through our Annual Maintenance Contracts (AMC).
          </p>
          <div className="flex justify-center">
            <motion.button
              className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-full text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover More
            </motion.button>
            <motion.button
              className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded-full text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact us
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          variants={itemVariants}
        >
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={heroImg}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
