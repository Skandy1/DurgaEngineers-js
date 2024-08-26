import React from "react";
import expertise from "@/assets/expertiseNew.jpg";
import Image from "next/image";

const Expertise = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-red-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6">
            {/* <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0"> */}
            <h1 className="sm:w-2/5 title-font sm:text-4xl text-3xl mb-4 font-medium text-red-600">
              Our Expertise
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 font-medium">
              At Durga Engineers, we are proud to offer competitive, reliable,
              and unparalleled expertise in fire protection and safety
              solutions. Our extensive experience in the industry, combined with
              our in-depth knowledge of fire safety regulations, ensures that we
              deliver comprehensive, customized, and compliant systems. Here is
              why our expertise stands out:
            </p>
          </div>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full">
              <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="title-font text-sm text-red-500 font-semibold mb-1 tracking-wider">
                      In-Depth Knowledge of Fire Safety Regulations
                    </h2>
                    <p className="leading-relaxed">
                      We stay up-to-date with the latest standards, including
                      the National Building Code, TAC, Karnataka State Fire &
                      Emergency Services, and NFPA guidelines, ensuring full
                      compliance for your safety.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-semibold title-font text-sm text-red-500 mb-1 tracking-wider">
                      Customized Fire Protection Systems
                    </h2>
                    <p className="leading-relaxed">
                      Our fire safety solutions are specifically designed to fit
                      the needs of various situations, including commercial
                      spaces and industrial facilities, to provide the best
                      possible protection.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="5" r="3"></circle>
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-semibold title-font text-sm text-red-500 mb-1 tracking-wider">
                      Turnkey Fire Protection Solutions
                    </h2>
                    <p className="leading-relaxed">
                      Our team provides complete, end-to-end fire protection
                      services, handling everything from design to installation
                      and ensuring a smooth implementation process.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-semibold title-font text-sm text-red-500 mb-1 tracking-wider">
                      Adopting best cutting-edge technology
                    </h2>
                    <p className="leading-relaxed">
                      We integrate the latest fire protection technologies to
                      ensure that your systems are efficient, reliable, and
                      capable of responding swiftly in an emergency.
                    </p>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-semibold title-font text-sm text-red-500 mb-1 tracking-wider">
                      Ongoing Maintenance and Support
                    </h2>
                    <p className="leading-relaxed">
                      With our Annual Maintenance Contracts (AMC), we provide
                      regular maintenance and prompt support to keep your fire
                      safety systems in top condition, 24/7.
                    </p>
                  </div>
                </div>
              </div>
              <Image
                className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                src={expertise}
                alt="step"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Expertise;
