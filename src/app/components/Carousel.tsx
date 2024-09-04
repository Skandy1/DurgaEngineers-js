"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import firstSlide from "@/assets/firstSlide.jpg";
import secondSlide from "@/assets/secondSlide.jpeg";
import thirdSlide from "@/assets/third.jpeg";
import fourthSlide from "@/assets/fourthSlide.png";
import Link from "next/link";

const CarouselBannerWrapper = () => {
  const carouselData = [
    {
      sliderImage: firstSlide,
      content: (
        <div className="absolute inset-y-0 left-0 flex items-center px-8 sm:ml-14">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white "
          >
            <h1 className="text-4xl font-bold ">Welcome to Durga Engineers</h1>
            <p className="mt-4 text-lg">
              Your trusted partner for advanced fire protection and safety
              solutions.
            </p>
            <Link href="/services">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-full text-lg cursor-pointer mt-6"
              >
                Discover More
              </motion.button>
            </Link>
          </motion.div>
        </div>
      ),
    },
    {
      sliderImage: secondSlide,
      content: (
        <div className="absolute inset-y-0 left-0 flex items-center px-8 sm:ml-14">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <h1 className="text-4xl font-bold">20+ Satisfied Customers</h1>
            <p className="mt-4 text-lg">
              Providing effective fire security systems for clients locations.
            </p>
            <Link href="/milestones">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 text-lg cursor-pointer mt-6 rounded-full"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </div>
      ),
    },
    {
      sliderImage: thirdSlide,
      content: (
        <div className="absolute inset-y-0 left-0 flex items-center px-8 sm:ml-14">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <h1 className="text-4xl font-bold">Expert Consultancy Services</h1>
            <p className="mt-4 text-lg">
              Ensuring your fire protection systems meet all the safety
              standards.
            </p>
            <Link href="/contact">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 text-lg cursor-pointer mt-6 rounded-full"
              >
                Get Expert Advice
              </motion.button>
            </Link>
          </motion.div>
        </div>
      ),
    },
    {
      sliderImage: fourthSlide,
      content: (
        <div className="absolute inset-y-0 left-0 flex items-center px-8 sm:ml-14">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <h1 className="text-4xl font-bold">Periodic Maintenance</h1>
            <p className="mt-4 text-lg">
              Keep your fire systems fully operational with our Annual
              Maintenance Contracts (AMC).
            </p>
            <Link href="/contact">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-full text-lg cursor-pointer mt-6"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {carouselData.map(
            (
              obj: { sliderImage: any; content: React.ReactNode },
              index: number
            ) => (
              <CarouselItem key={index} className="relative">
                <div className="relative h-80 sm:h-[30rem] w-full">
                  <Image
                    src={obj.sliderImage}
                    alt={`slider-image-${index}`}
                    height={800} // Updated height for desktop view
                    width={2000}
                    quality={100}
                    className="h-80 sm:h-[30rem] w-full object-cover" // Adjusted height for mobile and desktop
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                </div>
                {obj.content}
              </CarouselItem>
            )
          )}
        </CarouselContent>

        <div className="absolute left-16 top-1/2 sm:top-1/2">
          <CarouselPrevious className="opacity-50 hover:opacity-100" />
        </div>
        <div className="absolute right-16 top-1/2 sm:top-1/2">
          <CarouselNext className="opacity-50 hover:opacity-100" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselBannerWrapper;
