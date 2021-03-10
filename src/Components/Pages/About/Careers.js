import React from "react";
import CareersBanner from "../../../images/careers/Careers-Banner.jpg";
import Intern from "../../../images/careers/Careers-1.jpg";

import Logo from "../../../images/stacked/text-only.png";

const Careers = () => {
  return (
    <>
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage: `url(${CareersBanner})`,
          }}
          className="w-full h-full relative  bg-cover bg-center bg-no-repeat lg:bg-top"
        >
          <span
            className="w-full h-full md:h-full absolute opacity-50 bg-black bg-cover"
            id="career-overlay"
          />

          <div className="banner-text sticky flex flex-col justify-between">
            {/* <div className="flex flex-col space-y-24"> */}
            <div className="sticky pt-4 pl-4 pr-4 h-14 w-1/2">
              <img src={Logo} alt="Con mi madre logo" className="z-10" />
            </div>

            <div className="career-title sticky z-10 flex self-end pr-4 pb-2 text-gray-500 text-4xl font-medium tracking-widest text-center">
              <div id="title1">Careers</div>
            </div>
          </div>
        </div>
      </div>
      {/* Careers Blue Content */}
      <div>
        <div className="bg-blue-500 text-gray-500 text-2xl shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
          <p>
            Con Mi MADRE is looking for passionate, self-starters who want to
            contribute to building our Nation's future Latina leaders and
            educated workforce. With our five-pillars, unique curriculum and
            over 20 years working with young Latinas and their mothers, we
            believe we have what it takes to achieve our vision!
          </p>
          <br />
          <p>
            Please look at our current openings for opportunities to join our
            familia!
          </p>
        </div>
      </div>

      {/*  Openings */}
      <div className="text-center p-6 pb-10 pt-10 bg-gray-500">
        <h3 className="text-4xl text-pink-500 font-semibold">
          Current Openings
        </h3>
        <p className="text-2xl">There are no openings at this time</p>
      </div>

      {/* Internships */}
      <div className="bg-blue-500 text-gray-500 text-2xl shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <div className="w-full h-full">
          <div
            style={{
              backgroundImage: `url(${Intern})`,
            }}
            className="intern-img bg-cover bg-top bg-no-repeat"
          ></div>
        </div>
        <h3 className="text-4xl font-semibold pt-6">Internships</h3>
        <br />
        <div className="pb-6">
          <h3 className="text-3xl pb-2">
            Programming Intern (Central Texas & Fort Worth Chapter)
          </h3>
          <p className="text-2xl">
            Con Mi MADRE offers opportunities for current social work students
            to help with the implementation and execution of programming
            services. Interested students must reach out to their School of
            Social Work Field Office to initiate this process.
          </p>
        </div>
        <div className="pb-6">
          <h3 className="text-3xl pb-2">
            Communications Intern (Central Texas or Fort Worth chapter)
          </h3>
          <p className="text-2xl">
            Con Mi MADRE is seeking a creative and dynamic student to assist in
            marketing and communications efforts (part-time). Click here for
            more information
          </p>
        </div>
        <div className="pb-6">
          <h3 className="text-3xl pb-2">
            Development Intern (Central Texas chapter)
          </h3>
          <p className="text-2xl">
            Con Mi MADRE is seeking an organized and passionate student to
            assist with fundraising, grants, and events (part-time). Click here
            for more information
          </p>
        </div>
      </div>

      <div className="text-center p-6 pb-10 pt-10 text-pink-500 bg-gray-500">
        <p className="text-2xl">
          For more information on any job or internship opening, please reach
          out to info@conmimadre.org
        </p>
      </div>
    </>
  );
};

export default Careers;
