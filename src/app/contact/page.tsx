import Link from "next/link";
import React from "react";
import ContactForm from "../components/ContactForm";

const page = () => {
  return (
    <>
      <div>
        <section className="text-gray-900 bg-white body-font relative">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className=" text-red-400 tracking-widest font-medium title-font mb-1 mt-4">
                Interested in discussing fire protection solutions ?
              </h2>
              <h1 className="sm:text-3xl sm:w-4/5 text-red-500 text-2xl font-medium title-font mb-4 text-center mx-auto">
                For inquiries related to our fire protection systems and
                solution, we would be happy to connect.
              </h1>

              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
                Feel free to reach out to discuss partnerships or how we can
                assist with your fire protection needs.
              </p>
            </div>
          </div>
          <div className="container px-5  mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-600 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.6169066549623!2d77.535626!3d12.996336999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU5JzQ2LjgiTiA3N8KwMzInMDguMyJF!5e0!3m2!1sen!2sin!4v1725284742070!5m2!1sen!2sin"
                // <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.6169066549623!2d77.535626!3d12.996336999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU5JzQ2LjgiTiA3N8KwMzInMDguMyJF!5e0!3m2!1sen!2sin!4v1725284742070!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                loading="lazy"
                style={{
                  filter: "grayscale(1) contrast(1.2) opacity(0.8)",
                }}
              ></iframe>

              <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1  text-red-400">
                    Durga Engineers, S 72, Ujwala, 3rd Cross,3 rd Stage,
                    Kirloskar Colony, Basaveshwara Nagar, Bengaluru 560079
                  </p>
                </div>

                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <Link className="text-red-400 leading-relaxed" href="/">
                    durgaengineers19@gmail.com <br />
                    info.durga19@gmail.com
                  </Link>
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed text-red-400">
                    +91 8095254515 <br />
                    +91 9945299352
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <p className="leading-relaxed mb-5">
                If you prefer, you can also fill out the contact form below, and
                We will get back to you as soon as possible:
              </p>
              <ContactForm />
              <p className="text-xs text-gray-600 text-opacity-90 mt-3">
                Our average response time is under 2 days 😄
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-white py-5"></div>
    </>
  );
};

export default page;
