import React from "react";
import greens from "@/assets/projects/greens.png";
import Image from "next/image";
const projects = [
  {
    projectName: "THE GREENS",
    location: "ANEKAL, BENGALURU",
    client: "SANCHAYA ESTATES",
    projectValue: "₹ 3.7 crore",
    contactPerson: {
      name: "Mr Nagaraj",
      phone: "9876543210",
    },
    projectDetails: [
      { label: "No of Blocks", value: "17 Blocks + Club House" },
      { label: "No of Floors", value: "Ground + 9 Floors" },
    ],
    image: greens,
    products:
      "Fire Hydrant System, Sprinkler System, Fire Alarm System and Fire Extinguishers in all Floors",
  },
  // Add more projects if needed
];

const OngoingProject = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="flex flex-wrap w-full mt-10 container">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-red-500">
              Ongoing Projects
            </h1>
            <div className="h-1 w-20 bg-gray-700 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-900">
            Durga Engineers is currently engaged in several key projects,
            bringing cutting-edge fire protection systems to high-rise
            residential buildings, commercial establishments, and industrial
            facilities. These ongoing projects showcase our expertise in
            implementing comprehensive fire safety measures, including fire
            hydrants, sprinkler systems, alarm systems, and more. Our team works
            closely with clients to ensure timely execution and compliance with
            the latest fire safety standards.
          </p>
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {projects.map((project, index) => (
              <div key={index} className="p-3 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-60 md:h-24 w-full object-cover object-center"
                    src={project.image}
                    alt={project.projectName}
                  />
                  <div className="p-4 bg-white">
                    <h2 className="tracking-widest text-xs title-font font-medium text-red-500 mb-1">
                      {project.location}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                      {project.projectName}
                    </h1>
                    <p className="leading-relaxed mb-2 text-black">
                      <strong>Client:</strong> {project.client}
                      <br />
                      <strong>Contact Person:</strong>{" "}
                      {project.contactPerson.name}
                      {project.contactPerson.phone && (
                        <>
                          <br />
                          <strong>Phone:</strong> {project.contactPerson.phone}
                        </>
                      )}
                    </p>
                    <div className="leading-relaxed mb-2 text-gray-900">
                      {project.projectDetails.map((detail, idx) => (
                        <p key={idx}>
                          <strong className="text-red-500">
                            {detail.label}:{" "}
                          </strong>
                          {detail.value}
                        </p>
                      ))}
                    </div>
                    <p className="leading-relaxed text-black mb-2">
                      <strong>Products:</strong> {project.products}
                    </p>
                    <div className="flex justify-between items-end">
                      <span></span>{" "}
                      {/* Empty span to push project value to the right */}
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
    </div>
  );
};

export default OngoingProject;
