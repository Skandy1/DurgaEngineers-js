import React from 'react'

const page = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-2xl font-semibold title-font mb-4 text-red-500">About Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We are a team of highly experienced and motivated professionals in the fire fighting and security equipment industry. We are passionate about our customers and their satisfaction; the blend of quality and economy that we provide has been the reason for our success and the trust that our clients have bestowed in us.</p>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">25+</h2>
          <p className="leading-relaxed">Turnkey Solutions</p>
        </div>
      </div>
      <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">20+</h2>
          <p className="leading-relaxed">Satisfied Customers</p>
        </div>
      </div>
      <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">15+</h2>
          <p className="leading-relaxed">Consultations</p>
        </div>
      </div>
    </div>
  </div>
</section>
  {/* Our team 1 */}
<section className="text-gray-600 body-font">
<div className="flex flex-col text-center w-full mb-10 mt-4">
      <h1 className="sm:text-4xl text-2xl font-semibold title-font text-red-500">Our Team</h1>
    </div>
  <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-600">“ Raghavendra E O “
      </h1>
      <p className="mb-8 leading-relaxed text-justify text-gray-900">He comes with a decade of experience in the firefighting industry, having worked in Qatar and Saudi Arabia as a project manager in operations for Armour Fire Fighting Company LLC. Co. and Arab Projects for Safety Co. Ltd.
        <br/>
        <br/>
In the past, he worked in the projects of Bhavini (Bharatiya vidhyut Prasara Nigam), Nuclear Power Plant, Kalpakkam, TN and accumulated extensive know-how in the domain of operations and has executed projects in the domains of FM 200, Novec systems, Kitchen wood systems, and URL & FM-approved fire pump rooms.</p>
    </div>
  </div>
</section>
{/* our team 2 */}
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Sheshadri H V
      </h1>
      <p className="mb-8 leading-relaxed">He comes with close to two decades of experience in firefighting industry background and worked in KAFEX as Project Manager Operations for 13 years.
        <br />
        <br />
In the past, he has accumulated decades of extensive know-how in the domain of customer support, having served as a customer interaction coordinator in the banking domain.</p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
  </div>
</section>

</>
  )
}

export default page