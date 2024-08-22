import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full text-gray-600 body-font bg-white">
      <div className="px-4 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image
            className="h-10 w-10" // Adjusted size for better alignment
            src={logo}
            quality={100}
            height={40}
            width={40}
            alt="Durga Engineers"
          />
          <span className="ml-3 text-xl">Durga Engineers</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-center">
          © 2024 Durga Engineers
        </p>
      </div>
    </footer>
  );
};

export default Footer;
