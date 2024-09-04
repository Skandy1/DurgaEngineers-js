import React from "react";
import greens from "@/assets/projects/greens.png";
import sjr from "@/assets/projects/sjr.png";
import sjrh from "@/assets/projects/sjrh.png";
import sjrp from "@/assets/projects/sjrp.png";
import bata from "@/assets/projects/bata.png";
import kphc from "@/assets/projects/kphc.png";
import kspts from "@/assets/projects/kspts.png";
import akshaya from "@/assets/projects/akshaya.png";
import rosseta from "@/assets/projects/rosseta.png";
import sjrvr from "@/assets/projects/sjrvr.png";
import union from "@/assets/projects/union.png";
import spectrum from "@/assets/projects/spectrum.png";
import sjrpc from "@/assets/projects/sjrpc.png";
import Image from "next/image";
const projects = [
  {
    projectName: "AKSHAYA  REGALIA",
    location: "UTTARA HALLI, BENGALURU",
    client: "AKSHAYA REGALIA.A.O A BENGALURU",
    projectValue: "₹ 8 L",
    contactPerson: {
      name: "Mr Prasanna Bhat",
      phone: "+91-9742822822",
    },
    projectDetails: [
      { label: "No of Blocks", value: "6 Blocks" },
      { label: "No of Floors", value: "Ground + 4 Floors" },
    ],
    image: akshaya,
    products:
      "Fire Hydrant System, Sprinkler System, Fire Alarm System and Fire Extinguishers in all Floors",
  },
  {
    projectName: "SJR  VOGUE RESIDENCES",
    location: "WHITEFIELD, BENGALURU",
    client: "SJR PRIMECORPORATION PVT LTD",
    projectValue: "₹ 19 L",
    contactPerson: {
      name: "Mr Vinay Kumar",
    },
    projectDetails: [
      { label: "No of Blocks", value: "3 Blocks + Club House" },
      { label: "No of Floors", value: "Ground - 16 Floors" },
    ],
    image: sjrvr,
    products:
      "Fire Hydrant System, Sprinkler System, Fire Alarm System and Fire Extinguishers in all Floors",
  },
  {
    projectName: "KARNATAKA STATE POLICE TRAINING SCHOOL",
    location: "JYOTHI NAGAR, MYSORE",
    client: "VINODKUMAR CONSTRUCTIONS",
    projectValue: "₹ 20 L",
    contactPerson: {
      name: "Mr Vinod Kumar",
      phone: "+91-9880542272",
    },
    projectDetails: [
      { label: "No of Blocks", value: "Auditorium, School , And Office Space" },
      { label: "No of Floors", value: "Ground + 4 floors" },
    ],
    image: kspts,
    products:
      "Fire Hydrant System, Sprinkler System, Fire Alarm System and Fire Extinguishers in all Floors",
  },
  {
    projectName: "SJR PALAZZA CITY",
    location: "SARJAPURA ROAD, BENGALURU",
    client: "SJR PRIMECORPORATION PVT LTD",
    projectValue: "₹ 21 L",
    contactPerson: {
      name: "Mr Rajendra Kumar",
      phone: "+91-86182 75906",
    },
    projectDetails: [
      { label: "No of Blocks", value: "12 Blocks" },
      { label: "No of Floors", value: "Ground - 18 Floors" },
    ],
    image: sjrpc,
    products:
      "Fire Hydrant System, Sprinkler System in all Floors, Fire Alarm System and Fire Extinguishers in all Floors",
  },
  {
    projectName: "KARNATAKA POLICE HOUSING CORPORATION",
    location: "NAGARABHAVI, BENGALURU",
    client: "GREENGLOBAL SOLUTIONS BENGALURU",
    projectValue: "₹ 30 L",
    contactPerson: {
      name: "Mr Vishak K G",
      phone: "+91-9845802029",
    },
    projectDetails: [
      { label: "No of Blocks", value: "2 Blocks" },
      { label: "No of Floors", value: "Ground + 9 Floors" },
    ],
    image: kphc,
    products:
      "Fire Hydrant System , Sprinkler System, Fire Alarm System and Fire Extinguishers in both blocks",
  },
  {
    projectName: "KARNATAKA POLICE HOUSING CORPORATION",
    location: "NAGARABHAVI, BENGALURU",
    client: "RPP INFRA PROJECTS LTD BENGALURU",
    projectValue: "₹ 32 L",
    contactPerson: {
      name: "Mr Karthikeyan",
    },
    projectDetails: [
      { label: "No of Blocks", value: "2 Blocks" },
      { label: "No of Floors", value: "Ground + 9 Floors" },
    ],
    image: kphc,
    products:
      "Fire Hydrant System , Sprinkler System, Fire Alarm System and Fire Extinguishers in both blocks",
  },
  {
    projectName: "BATA INDIA LTD",
    location: "SIPCOT HOSUR, TAMIL NADU",
    client: "MEGATRON SOLUTIONS PVT LTD BENGALURU",
    projectValue: "₹ 32 L",
    contactPerson: {
      name: "Mr Mahesh Hegde",
      phone: "+91-98450 42655",
    },
    projectDetails: [
      { label: "Project Details", value: "Ware House , Ground Floor " },
    ],
    image: bata,
    products:
      "Contains safety of Hydrant System, Sprinkler System, Fire alarm System and Fire Extinguisher",
  },
  {
    projectName: "UNION CITY",
    location: "WHITEFIELD, BENGALURU",
    client: "PRIMECO BENGALURU",
    projectValue: "₹ 33 L",
    contactPerson: {
      name: "Mr Syed Zeeshan",
      phone: "+91-9035881351",
    },
    projectDetails: [
      { label: "No of Blocks", value: "3 blocks" },
      {
        label: "No of Floors",
        value: "Ground + 14 Floors 2 Blocks office space , 1 Block  Hotel",
      },
    ],
    image: union,
    products:
      "Fire Hydrant System, Sprinkler System, Water Curtain System, Detection system and Fire Extinguishers",
  },
  {
    projectName: "SJR HAMILTON HOMES",
    location: "RAYASANDRA, BENGALURU",
    client: "SJR PRIMECORP BENGALURU",
    projectValue: "₹ 72 L",
    contactPerson: {
      name: "Mr Rajendra Kumar",
      phone: "+91-8618275906",
    },
    projectDetails: [
      { label: "No of Blocks", value: "16 Blocks + Club House" },
      { label: "No of Floors", value: "Ground + 9 Floors" },
    ],
    image: sjrh,
    products:
      "Fire Hydrant System, Fire Alarm System and Fire Extinguishers in all Blocks",
  },
   
  {
    projectName: "SPECTRUM HOTEL BLOCK",
    location: "BANNERAGHATTA ROAD, BENGALURU",
    client: "PRIMECO BENGALURU",
    projectValue: "₹ 81 L",
    contactPerson: {
      name: "Mr Syed Zeeshan",
      phone: "+91-9035881351",
    },
    projectDetails: [
      // { label: "No of Blocks", value: "12 Blocks" },
      { label: "No of Floors", value: " Basement, Ground and 12 Floors" },
    ],
    image: spectrum,
    products:
      "Fire Hydrant System, Sprinkler System in all Floors, Fire Detection system and Fire Alarm System",
  },
  {
    projectName: "SJR BLUE WATER",
    location: "HARALURU, BENGALURU",
    client: "SJR PRIMECORP BENGALURU",
    projectValue: "₹ 86 L",
    contactPerson: {
      name: "Mr Rajendra Kumar",
      phone: "+91-8618275906",
    },
    projectDetails: [
      { label: "No of Blocks", value: "11 Blocks + Club House" },
      { label: "No of Floors", value: "Basement, Ground and 16 Floors" },
    ],
    image: sjr,
    products:
      "Fire Hydrant System, Sprinkler System, Fire Alarm System and Fire Extinguishers in all Floors",
  },
  
  {
    projectName: "SJR PALAZZA CITY CLUB HOUSE",
    location: "SARJAPURA ROAD, BENGALURU",
    client: "SJR PRIMECORPORATION PVT LTD",
    projectValue: "₹ 1.13 Cr",
    contactPerson: {
      name: "Mr Rajendra Kumar",
      phone: "+91-86182 75906",
    },
    projectDetails: [
      {
        label: "Places of installation",
        value:
          "Club House, Spa, gym, Swimming pool, Party Hall, Ampi theatre, Parking Area, Tennis Court.",
      },
      { label: "No of Floors", value: "Ground + 6 Floors" },
    ],
    image: sjrp,
    products:
      "Fire Hydrant , Sprinkler System, Fire Detection System, Fire Extinguishers  in all Floors",
  },
  // Add more projects if needed
];

const CompletedProject = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-wrap w-full my-10 container">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-red-500">
            Completed Projects
          </h1>
          <div className="h-1 w-20 bg-gray-700 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-900 mb-16">
          Over the years, we have successfully completed numerous projects
          across various sectors, implementing robust fire protection and safety
          systems. From residential complexes to large industrial plants, we
          have delivered high-quality solutions that meet <b>NBC</b> and{" "}
          <b>NFPA</b> standards. Our commitment with the clients is to ensure
          that each project will be completed with precision, safeguarding lives
          and assets for years to come. Our moto is we delivery the projects
          which has zero re-work post handover.
        </p>
        <div className="flex flex-wrap -m-3">
          {projects.map((project, index) => (
            <div key={index} className="p-3 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col justify-between">
                <Image
                  className="lg:h-60 md:h-24 w-full object-cover object-center"
                  src={project.image}
                  alt={project.projectName}
                />
                <div className="p-4 bg-white flex flex-col flex-grow">
                  <h2 className="tracking-widest text-xs title-font font-medium text-red-500 mb-1">
                    {project.location}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                    {project.projectName}
                  </h1>
                  <div className="leading-relaxed mb-2 text-gray-900">
                    {project?.projectDetails?.map((detail, idx) => (
                      <p key={idx}>
                        <strong className="text-red-500">
                          {detail.label}:{" "}
                        </strong>
                        {detail.value}
                      </p>
                    ))}
                  </div>
                  {/* Use mt-auto to push the value to the bottom */}
                  <div className="mt-auto flex justify-end">
                    <span className="text-red-500 text-sm font-semibold">
                      {project.projectValue}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompletedProject;
