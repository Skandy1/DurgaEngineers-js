import React from "react";
import Image from "next/image";
import installation from "@/assets/installation.jpg";
import design from "@/assets/design.jpg";
import productlist from "@/assets/product-list.png";
import amc from "@/assets/amc.jpg";
import exting from "@/assets/products/Extinguisher.jpg";
import fm200 from "@/assets/products/fm200.jpg";
import inlet from "@/assets/products/inlet.png";
import callpoint from "@/assets/products/callpoint.jpg";
import sprinkler from "@/assets/products/sprinkler.jpg";
import alarm from "@/assets/products/alarm.jpg";
import hose from "@/assets/products/hose.jpg";
import valve from "@/assets/products/valve.jpg";
import falarm from "@/assets/products/falarm.jpg";
import yhydrant from "@/assets/products/yhydrant.jpg";
import drum from "@/assets/products/drum.jpg";
import door from "@/assets/products/door.png";

const page = () => {
  return (
    <>
      {/* // Services */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-red-500">
                Our Services
              </h1>
              <div className="h-1 w-20 bg-gray-700 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-900">
              At Durga Engineer, we specialize in fire protection systems
              through expert design, installation, product sales, and reliable
              AMC services to ensure safety and compliance.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={design}
                  alt="content"
                />
                <h2 className="text-lg text-red-400 font-bold title-font mb-4">
                  Design & Consultation
                </h2>
                <p className="leading-relaxed text-base">
                  We design customized fire protection systems, ensuring safety,
                  compliance, and seamless integration with your infrastructure
                  using the latest technologies.{" "}
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={installation}
                  alt="content"
                />
                <h2 className="text-lg text-red-400 font-bold title-font mb-4">
                  Installation
                </h2>
                <p className="leading-relaxed text-base">
                  We offer expert installation of fire protection systems,
                  ensuring reliable, compliant setups that integrate seamlessly
                  with your existing infrastructure.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={productlist}
                  alt="content"
                />
                <h2 className="text-lg text-red-400 font-bold title-font mb-4">
                  Resale of Products
                </h2>
                <p className="leading-relaxed text-base">
                  We offer a wide range of high-quality fire protection items
                  for sale, including alarms, extinguishers, and suppression
                  systems.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={amc}
                  alt="content"
                />
                <h2 className="text-lg text-red-400 font-bold title-font mb-4">
                  Annual Maintenance Contract{" "}
                </h2>
                <p className="leading-relaxed text-base">
                  Our AMC ensures regular inspections, maintenance, and prompt
                  repairs for fire protection systems, keeping them in optimal
                  working condition year-round.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fire Inspection  */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-red-500">
                Fire Inspection
              </h1>
              <div className="h-1 w-20 bg-gray-700 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-900">
            At Durga Engineers, we specialize in comprehensive fire inspection services designed to ensure the safety of your building, assets, and occupants. Our team of qualified experts conducts regular fire inspections to assess your fire safety systems and ensure they comply with the latest fire safety regulations and standards.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={design}
                  alt="content"
                />
                <h2 className="text-lg text-red-400 font-bold title-font mb-4">
                  Design & Consultation
                </h2>
                <p className="leading-relaxed text-base">
                  We design customized fire protection systems, ensuring safety,
                  compliance, and seamless integration with your infrastructure
                  using the latest technologies.{" "}
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={installation}
                  alt="content"
                />
                <h2 className="text-lg text-red-400 font-bold title-font mb-4">
                  Installation
                </h2>
                <p className="leading-relaxed text-base">
                  We offer expert installation of fire protection systems,
                  ensuring reliable, compliant setups that integrate seamlessly
                  with your existing infrastructure.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={productlist}
                  alt="content"
                />
                <h2 className="text-lg text-red-400 font-bold title-font mb-4">
                  Resale of Products
                </h2>
                <p className="leading-relaxed text-base">
                  We offer a wide range of high-quality fire protection items
                  for sale, including alarms, extinguishers, and suppression
                  systems.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={amc}
                  alt="content"
                />
                <h2 className="text-lg text-red-400 font-bold title-font mb-4">
                  Annual Maintenance Contract{" "}
                </h2>
                <p className="leading-relaxed text-base">
                  Our AMC ensures regular inspections, maintenance, and prompt
                  repairs for fire protection systems, keeping them in optimal
                  working condition year-round.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Products */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-red-500">
                Product Library
              </h1>
              <div className="h-1 w-20 bg-gray-700 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-900">
              Our expertise lies in transforming on-demand products into highly
              effective fire protection systems, tailored for installation in
              any indoor environment.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={exting}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Fire Extinguisher
                </h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={fm200}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  FM 200 System
                </h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={inlet}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Fire Brigade Inlet{" "}
                </h2>
                <p className="mt-1">2/4 Way</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={callpoint}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Manual Call Point
                </h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={sprinkler}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Sprinkler
                </h2>
                <p className="mt-1">Pendent, Sidewall, Upright</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={alarm}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Fire Detector
                </h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={hose}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  RRL Hose
                </h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={valve}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Hydrant Valve
                </h2>
                <p className="mt-1">Single, Double</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={falarm}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Fire Alarm System
                </h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={yhydrant}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Branch Pipe
                </h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={drum}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Hose Reel Drum
                </h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={door}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Hose Shutter Door/Box
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
