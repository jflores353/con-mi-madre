import React from "react";

import Johanna from "../../../images/team/JohannaHeadshot.jpg";
import Marcie from "../../../images/team/MarcieHeadshot.jpg";
import Heaven from "../../../images/team/HeavenHeadshot.jpg";
import Alicia from "../../../images/team/AliciaHeadshot.jpg";
import Valerie from "../../../images/team/ValerieHeadshot.jpg";
import Vanessa from "../../../images/team/VanessaHeadshot.jpg";
import Isabella from "../../../images/team/IsabellaHeadshot.jpg";
// import Mariana from "../../../images/team/MarianaHeadshot.jpg";
// import Lorena from "../../../images/team/LorenaHeadshot.jpg";
import Jessenia from "../../../images/team/JesseniaHeadshot.jpg";
import Iliana from "../../../images/team/IlianaHeadshot.jpg";
import Carla from "../../../images/team/CarlaHeadshot.jpg";
import TeamBanner from "../../../images/team/OurTeamBanner.jpg";

import Logo from "../../../images/stacked/text-only.png";

const OurTeam = () => {
  return (
    <>
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage: `url(${TeamBanner})`,
          }}
          className="w-full h-full md:h-full relative  bg-cover bg-top bg-no-repeat"
        >
          <span
            className="w-full h-full md:h-full absolute opacity-50 bg-black bg-cover"
            id="career-overlay"
          />

          <div className="banner-text sticky flex flex-col justify-between">
            <div className="sticky pt-4 pl-4 h-14 w-1/2">
              <img src={Logo} alt="Con mi madre logo" className="z-10" />
            </div>

            <div className="career-title sticky z-10 flex self-end pr-4 pb-2 text-gray-500 text-4xl font-medium tracking-widest text-center">
              <div id="title1">Our Team</div>
            </div>
          </div>
        </div>
      </div>
      {/* Profiles with Images */}
      <div className="grid xs:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-12 lg:gap-4 bg-gray-500 p-4 md:p-12">
        <div className="rounded h-full flex flex-col items-center md:flex-row md:justify-start md:items-start p-4 bg-gray-500">
          <div
            style={{
              backgroundImage: `url(${Johanna})`,
            }}
            className="md:w-1/2 h-48 mt-3 md:mt-0 bg-cover bg-center bg-no-repeat"
          ></div>
          <div className="flex md:w-1/2 md:h-48 flex-col text-center md:text-left md:justify-between md:pl-5">
            <div>
              <h2 className="">Executive Director</h2>
              <h3 className="font-semibold text-xl">
                Johanna Moya Fabregas, Ph.D.
              </h3>
              <p className="pb-4 font-light">she/her/ella</p>
            </div>
            <div>
              <a
                className="semi-bold text-lg hover:text-pink-500"
                href="mailto:johanna@conmimadre.org?subject=Mail%20from%20website"
              >
                Email Johanna
              </a>
            </div>
          </div>
        </div>
        <div className="rounded flex flex-col items-center md:flex-row  md:justify-start p-4 md:items-start bg-gray-500">
          <div
            style={{
              backgroundImage: `url(${Marcie})`,
            }}
            className="md:w-1/2 h-48 mt-3 md:mt-0 bg-cover bg-center bg-no-repeat"
          ></div>
          <div className="flex md:w-1/2 md:h-48 flex-col text-center md:text-left md:justify-between md:pl-5">
            <div>
              <h2 className="">Director of Finance</h2>
              <h3 className="font-semibold text-xl">Marcie Cast</h3>
              <p className="pb-4 font-light">she/her/ella</p>
            </div>
            <div>
              <a
                className="semi-bold text-lg hover:text-pink-500"
                href="mailto:marcie@conmimadre.org?subject=Mail%20from%20website"
              >
                Email Marcie
              </a>
            </div>
          </div>
        </div>
        <div className="rounded flex flex-col items-center md:flex-row  md:justify-start p-4 md:items-start bg-gray-500">
          <div
            style={{
              backgroundImage: `url(${Heaven})`,
            }}
            className="md:w-1/2 h-48 mt-3 md:mt-0 bg-cover bg-center bg-no-repeat"
          ></div>
          <div className="flex md:w-1/2 md:h-48 flex-col text-center md:text-left md:justify-between md:pl-5">
            <div>
              <h2 className="">Development Manager</h2>
              <h3 className="font-semibold text-xl">
                Heaven Guerrero Wilbanks
              </h3>
              <p className="pb-4 font-light">she/her/ella</p>
            </div>
            <div>
              <a
                className="semi-bold text-lg hover:text-pink-500"
                href="mailto:heaven@conmimadre.org?subject=Mail%20from%20website"
              >
                Email Heaven
              </a>
            </div>
          </div>
        </div>
        <div className="rounded flex flex-col items-center md:flex-row  md:justify-start p-4 md:items-start bg-gray-500">
          <div
            style={{
              backgroundImage: `url(${Alicia})`,
            }}
            className="flex  md:w-1/2 h-48  mt-3 md:mt-0 bg-cover bg-center bg-no-repeat"
          ></div>
          <div className="flex md:w-1/2 md:h-48 flex-col text-center md:text-left md:justify-between md:pl-5">
            <div>
              <h2 className="">Data Manager</h2>
              <h3 className="font-semibold text-xl">Alicia Guerrero</h3>
              <p className="pb-4 font-light">she/her/ella</p>
            </div>
            <div>
              <a
                className="semi-bold text-lg hover:text-pink-500"
                href="mailto:alicia@conmimadre.org?subject=Mail%20from%20website"
              >
                Email Alicia
              </a>
            </div>
          </div>
        </div>
        <div className="rounded flex flex-col items-center md:flex-row  md:justify-start p-4 md:items-start bg-gray-500">
          <div
            style={{
              backgroundImage: `url(${Valerie})`,
            }}
            className="md:w-1/2 h-48 mt-3 md:mt-0 bg-cover bg-center bg-no-repeat"
          ></div>
          <div className="flex md:w-1/2 md:h-48 flex-col text-center md:text-left md:justify-between md:pl-5">
            <div>
              <h2 className="">Administrative Assistant</h2>
              <h3 className="font-semibold text-xl">Valerie Villareal</h3>
              <p className="pb-4 font-light">she/her/ella</p>
            </div>
            <div>
              <a
                className="semi-bold text-lg hover:text-pink-500"
                href="mailto:valerie@conmimadre.org?subject=Mail%20from%20website"
              >
                Email Valerie
              </a>
            </div>
          </div>
        </div>
        <div className="rounded flex flex-col items-center md:flex-row  md:justify-start p-4 md:items-start bg-gray-500">
          <div
            style={{
              backgroundImage: `url(${Vanessa})`,
            }}
            className="md:w-1/2 h-48 mt-3 md:mt-0 bg-cover bg-center bg-no-repeat"
          ></div>
          <div className="flex md:w-1/2 md:h-48 flex-col text-center md:text-left md:justify-between md:pl-5">
            <div>
              <h2 className="">Central Texas Program Director</h2>
              <h3 className="font-semibold text-xl">Vanessa Gonzales</h3>
              <p className="pb-4 font-light">she/her/ella</p>
            </div>
            <div>
              <a
                className="semi-bold text-lg hover:text-pink-500"
                href="mailto:vanessa@conmimadre.org?subject=Mail%20from%20website"
              >
                Email Vanessa
              </a>
            </div>
          </div>
        </div>
        <div className="rounded flex flex-col items-center md:flex-row  md:justify-start p-4 md:items-start bg-gray-500">
          <div
            style={{
              backgroundImage: `url(${Isabella})`,
            }}
            className="md:w-1/2 h-48 mt-3 md:mt-0 bg-cover bg-center bg-no-repeat"
          ></div>
          <div className="flex md:w-1/2 md:h-48 flex-col text-center md:text-left md:justify-between md:pl-5">
            <div>
              <h2 className="">Fort Worth Program Director</h2>
              <h3 className="font-semibold text-xl">Isabella Vasquez</h3>
              <p className="pb-4 font-light">she/her/ella</p>
            </div>
            <div>
              <a
                className="semi-bold text-lg hover:text-pink-500"
                href="mailto:isabella@conmimadre.org?subject=Mail%20from%20website"
              >
                Email Isabella
              </a>
            </div>
          </div>
        </div>
        {/* <div className="rounded flex flex-col items-center md:flex-row  md:justify-start p-4 md:items-start bg-gray-500">
          <div
            style={{
              backgroundImage: `url(${Mariana})`,
            }}
            className="flex  w-48 h-48  mt-3 md:mt-0 bg-cover bg-center bg-no-repeat"
          ></div>
          <div className="flex flex-col text-center md:text-left md:pl-5">
            <h2 className="pt-3">Central Texas Success Program Coordinator</h2>
            <h3 className="font-semibold text-xl">Mariana Zamora</h3>
            <p className="pb-4 font-light">she/her/ella</p>
            <a
              className="semi-bold text-lg hover:text-pink-500"
              href="mailto:mariana@conmimadre.org?subject=Mail%20from%20website"
            >
              Email Mariana
            </a>
          </div>
        </div> */}
        {/* <div className="rounded flex flex-col items-center md:flex-row  md:justify-start p-4 md:items-start bg-gray-500">
          <div
            style={{
              backgroundImage: `url(${Lorena})`,
            }}
            className="flex  w-48 h-48  mt-3 md:mt-0 bg-cover bg-center bg-no-repeat"
          ></div>
          <div className="flex flex-col text-center md:text-left md:pl-5">
            <h2 className="pt-3">Central Texas Program Coordinator</h2>
            <h3 className="font-semibold text-xl">Lorena Sierra</h3>
            <p className="pb-4 font-light">she/her/ella</p>
            <a
              className="semi-bold text-lg hover:text-pink-500"
              href="mailto:lorena@conmimadre.org?subject=Mail%20from%20website"
            >
              Email Lorena
            </a>
          </div>
        </div> */}
        <div className="rounded flex flex-col items-center md:flex-row  md:justify-start p-4 md:items-start bg-gray-500">
          <div
            style={{
              backgroundImage: `url(${Jessenia})`,
            }}
            className="md:w-1/2 h-48 mt-3 md:mt-0 bg-cover bg-center bg-no-repeat"
          ></div>
          <div className="flex md:w-1/2 md:h-48 flex-col text-center md:text-left md:justify-between md:pl-5">
            <div>
              <h2 className="">Central Texas Program Coordinator</h2>
              <h3 className="font-semibold text-xl">Jessenia Balderas</h3>
              <p className="pb-3 font-light">she/her/ella</p>
            </div>
            <div>
              <a
                className="semi-bold text-lg hover:text-pink-500"
                href="mailto:jessenia@conmimadre.org?subject=Mail%20from%20website"
              >
                Email Jessenia
              </a>
            </div>
          </div>
        </div>
        <div className="rounded flex flex-col items-center md:flex-row  md:justify-start p-4 md:items-start bg-gray-500">
          <div
            style={{
              backgroundImage: `url(${Iliana})`,
            }}
            className="md:w-1/2 h-48 mt-3 md:mt-0 bg-cover bg-center bg-no-repeat"
          ></div>
          <div className="flex md:w-1/2 md:h-48 flex-col text-center md:text-left md:justify-between md:pl-5">
            <div>
              <h2 className="">Fort Worth Program Coordinator</h2>
              <h3 className="font-semibold text-xl">Iliana Montoya</h3>
              <p className="pb-4 font-light">she/her/ella</p>
            </div>
            <div>
              <a
                className="semi-bold text-lg hover:text-pink-500"
                href="mailto:iliana@conmimadre.org?subject=Mail%20from%20website"
              >
                Email Iliana
              </a>
            </div>
          </div>
        </div>
        <div className="rounded flex flex-col items-center md:flex-row  md:justify-start p-4 md:items-start bg-gray-500">
          <div
            style={{
              backgroundImage: `url(${Carla})`,
            }}
            className="md:w-1/2 h-48 mt-3 md:mt-0 bg-cover bg-center bg-no-repeat"
          ></div>
          <div className="flex md:w-1/2 md:h-48 flex-col text-center md:text-left md:justify-between md:pl-5">
            <div>
              <h2 className="">Fort Worth Program Coordinator</h2>
              <h3 className="font-semibold text-xl">Carla Gonzales Vasquez</h3>
              <p className="pb-4 font-light">she/her/ella</p>
            </div>
            <div>
              <a
                className="semi-bold text-lg hover:text-pink-500"
                href="mailto:carla@conmimadre.org?subject=Mail%20from%20website"
              >
                Email Carla
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div>
          <div className="space-y-3">
            <div className="pt-6 bg-blue-500 text-gray-500 text-xl m-auto text-center p-3">
            <h3 className="font-bold text-2xl">Johanna</h3>
              <p className="p-3 pb-6 font-light">
                Dr. Johanna Moya Fábregas received her undergraduate degree in
                Latin American Studies and French from the University of
                Wisconsin-Madison and her doctorate in History at Indiana
                University-Bloomington. The role of Executive Director at Con Mi
                MADRE brings together Dr. Moya Fábregas’ background and personal
                mission of empowering Latina students and their families by
                breaking down barriers to success. Her professional experience
                is anchored in higher education, leadership, and mentoring both
                in the United States and Puerto Rico, where she fulfilled the
                roles of professor, editor, project manager, and consultant.
                Education is one of the biggest values in her family, who moved
                to the United States in search of opportunities for their
                daughter. An immigrant herself, Johanna came to the United
                States at the age of 14 after living in four Latin American
                countries, and her parents became the biggest advocates for her
                advanced education. She personally identifies with Con Mi
                MADRE's mission because she has lived it.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="pt-6 bg-gray-500 text-xl m-auto text-center p-3">
            <h3 className="font-bold text-2xl">Marcie</h3>
            <p className="pb-3">she/her/ella</p>
            <p className="p-3 pb-6 font-light">
              Marcie is a senior member of Con Mi MADRE’s leadership team and is
              responsible for all accounting systems, processes, and financial
              reporting. Additionally, she helps manage HR functions and office
              operations. Marcie has a BBA in Accounting from Texas State
              University and finds great joy in being a part of an organization
              run by women whose mission involves empowering and supporting
              other women. In her spare time, Marcie enjoys spending time with
              her family, cooking/baking, and working on craft projects.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="pt-6 bg-blue-500 text-gray-500 text-xl m-auto text-center p-3">
            <h3 className="font-bold text-2xl">Heaven Guerrero Wilbanks</h3>
            <p className="p-3 pb-6 font-light">
              Heaven leads the fundraising and communication efforts for Con Mi
              MADRE. She has an M.S. in Human Resource Management and a B.S. in
              Business Administration from Texas State University. Heaven
              believes education is the key to lifting marginalized communities
              and loves working for an organization that actively empowers women
              and girls through education. In her free time, Heaven enjoys
              painting, playing board games, volunteering, and spending time
              with her family.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="pt-6 bg-gray-500 text-xl m-auto text-center p-3">
            <h3 className="font-bold text-2xl">Alicia Guerrero</h3>
            <p className="p-3 pb-6 font-light">
              Alicia oversees data management protocols and leads the analysis
              and reporting for Con Mi MADRE. She has a BA in Art/Education from
              St. Edward’s University and a M.Ed. in Educational Policy and
              Planning from the University of Texas at Austin. Alicia is
              passionate about using data and research to push for more equal
              opportunities for marginalized students so they can achieve
              success. During her free time, Alicia likes to work out, travel,
              and make art.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="pt-6 bg-blue-500 text-gray-500 text-xl m-auto text-center p-3">
            <h3 className="font-bold text-2xl">Valerie Villareal</h3>
            <p className="p-3 pb-6 font-light">
              Valerie is Con Mi MADRE’s Administrative Assistant providing
              administrative support to ensure efficient operation of the
              office. She supports managers and employees through a variety of
              tasks related to organization and communication. Responsible for
              confidential and time sensitive material and is familiar with a
              variety of the field's concepts, practices and procedures. Valerie
              has a Real Estate Brokerage Licensing Associate of Applied Science
              Degree. Valerie loves being part of a mission that empowers and
              uplifts young women to follow their dreams and achieve their goals
              and feels blessed to be a part of such tremendous growth and
              success. Valerie enjoys spending time with her family, cooking and
              listening to music.
            </p>
          </div>
        </div>
        <div className="space-y-3">
     
          <div className="pt-6 bg-gray-500 text-xl m-auto text-center p-3">
            <h2 className="pt-3 font-semibold">
              Central Texas Program Director
            </h2>
            <h3 className="font-bold text-2xl pb-3">Coming Soon</h3>
            <p pb-3>Pronouns</p>
            <p className="p-3 pb-6 font-light"></p>
          </div>
        </div> */}

      {/* <div className="space-y-3">
      ="flex m-auto w-48 h-48  bg-cover bg-center bg-no-repeat"
            ></div>
          <div className="pt-6 bg-blue-500 text-gray-500 text-xl m-auto text-center p-3">
            <h2 className="pt-3 font-semibold">Fort Worth Program Director</h2>
            <h3 className="font-bold text-2xl pb-3">Coming Soon</h3>
            <p>Pronouns</p>
            <p className="p-3 pb-6 font-light"></p>
          </div>
        </div> */}
      {/* 
        <div className="space-y-3">
          <div className="pt-6 bg-gray-500 text-xl m-auto text-center p-3">
       
            <h2 className="pt-3 font-semibold">
              Central Texas Success Program Coordinator
            </h2>
            <h3 className="font-bold text-2xl">Mariana Zamora</h3>
            <p className="pb-3">she/her/ella</p>
            <p className="p-3 pb-6 font-light">
              Mariana Zamora is a Licensed Master Social Worker (LMSW) and
              serves as Con Mi MADRE’s Success Program Coordinator, primarily
              responsible for providing advising services to undergraduate
              students to help them navigate the transition to college, overcome
              first-generation student challenges, and plan for their career.
              Before entering the professional field, Mariana was a student at
              Texas State University where she earned her bachelor and master's
              degree in social work. As a first-generation college graduate with
              7+ years of experience working in the field of college access and
              student success, Mariana is passionate about empowering others
              through education because she understands the positive impact a
              post-secondary education can make on breaking intergenerational
              cycles. In her free time, Mariana enjoys floating the river,
              collecting artwork, and spending time with family
            </p>
          </div>
        </div> */}

      {/* <div className="space-y-3">
          <div className="pt-6 bg-blue-500 text-gray-500 text-xl m-auto text-center p-3">
      
            <h2 className="pt-3 font-semibold">
              Central Texas Program Coordinator
            </h2>
            <h3 className="font-bold text-2xl">Lorena Sierra</h3>
            <p className="pb-3">she/her/ella</p>
            <p className="p-3 pb-6 font-light">
              Lorena Sierra is a Program Coordinator for the Central Texas
              chapter. She facilitates group sessions with students at selected
              Con Mi MADRE schools, developed the College Academies Program for
              high school juniors and seniors, and works one-on-one with
              students in the Individual Coaching/Mentoring Program. Lorena
              obtained her bachelor's degree in social work from St. Edward’s
              University and was recognized as Social Work Student of the Year
              in 2016-2017. She is currently a master’s student at The Steve
              Hicks School of Social Work and is a St. David’s Foundation
              Bilingual Social Work Scholar. Lorena is a proud first-generation
              Latina that believes in the power of community, serving others,
              and the importance of empowering families in their journeys to
              post-secondary education. In her free time, Lorena enjoys
              connecting with friends and family, dancing, and working out.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="pt-6 bg-gray-500 text-xl m-auto text-center p-3">
       
            <h2 className="pt-3 font-semibold">
              Central Texas Program Coordinator
            </h2>
            <h3 className="font-bold text-2xl">Jessenia Balderas</h3>
            <p className="pb-3">she/her/ella</p>
            <p className="p-3 pb-6 font-light">
              Jessenia Balderas is a Program Coordinator for the Central Texas
              chapter. She facilitates group sessions with students at selected
              Con Mi MADRE schools, while working and engaging families
              participating in the program. Jessenia was the first in her
              immediate family to attend college and graduated with her
              Bachelors Degree in Social Work from the Steve Hicks School of
              Social Work at The University of Texas at Austin. During her
              undergraduate years Jessenia was a work-study student at Con Mi
              MADRE. The organization not only solidified Jessenia’s choice to
              become a Social Worker, but also helped foster her passion for
              education and empowering the next generation of Latina leaders. In
              her free time, Jessenia enjoys going on walks with her pup,
              working out with her team, and spending quality time with friends
              and family.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="pt-6 bg-blue-500 text-gray-500 text-xl m-auto text-center p-3">
            <h2 className="pt-3 font-semibold">
              Fort Worth Program Coordinator
            </h2>
            <h3 className="font-bold text-2xl">Iliana Montoya</h3>
            <p className="pb-3">she/her/ella</p>
            <p className="p-3 pb-6 font-light">
              Iliana is a Program Coordinator in the Fort Worth Chapter of Con
              Mi MADRE. She leads groups, engages not only with students but
              also their families and staff at all 4 Con Mi MADRE Schools in
              FWISD. She has had the opportunity to engage more in the community
              while working for Con Mi MADRE. She has a bachelor's in social
              work from Tarleton State University. Her passion began with
              wanting to advocate for those individuals who do not have a voice,
              and need someone to step up for them, especially in the
              Latino/Hispanic community. Iliana enjoys exploring new restaurants
              and food, taking pictures, going on road trips and spending time
              with family.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="pt-6 bg-gray-500 text-xl m-auto text-center p-3">
            <div
              style={{
                backgroundImage: `url(${Carla})`,
                borderWidth: "8px",
                borderStyle: "ridge",
                borderColor: "rgb(200,220,90)",
              }}
              className="pb-3 flex m-auto w-48 h-48  bg-cover bg-center bg-no-repeat"
            ></div>
            <h2 className="pt-3 font-semibold">
              Fort Worth Program Coordinator
            </h2>
            <h3 className="font-bold text-2xl">Carla Gonzales Vasquez</h3>
            <p className="pb-3">she/her/ella</p>
            <p className="p-3 pb-6 font-light">
              Carla is a Program Coordinator for the Fort Worth Con Mi MADRE
              Chapter. Some of her duties include leading group sessions with
              students at selected Con Mi MADRE FWISD Schools, while working and
              engaging families participating in the program. Carla is a
              first-generation student born and raised in Mexico and obtained
              her master's degree in Social Work from Tarleton State University.
              She enjoys working for an organization that empowers young girls
              through education. During her free time Carla enjoys cooking,
              spending time with friends and family, playing with her birds and
              trying out new makeup trends.
            </p>
          </div>
        </div> */}

      <div className="bg-green-500 text-xl m-auto text-center p-3 pb-6">
        <div>
          <h2 className="pt-3 font-extrabold text-4xl">Board Of Directors</h2>
          <h3 className="font-bold text-2xl pt-3 pb-2">Executive Committee</h3>
        </div>

        <div>
          <h2>Veronica Rosas Fernandez - Chair</h2>
          <h3 className="pb-2">Elephant Labs, Inc., CFO, COO </h3>
        </div>

        <div>
          <h2>Lillian Gray - Secretary </h2>
          <h3 className="pb-2">
            Bank of America, Assistant Vice President, Community Relations
            Manager
          </h3>
        </div>

        <div>
          <h2>Justin Rosas – Member at Large </h2>
          <h3 className="pb-3">Orrick, Herrington, & Sutcliffe, Attorney</h3>
        </div>

        <div className="pb-3">
          <h2 className="font-bold text-2xl pt-3 pb-2">
            Additional Board Members
          </h2>

          <div>
            <h2>Ashley Rae Aoshima </h2>
            <h3 className="pb-2">Wells Fargo, Branch Manager </h3>
          </div>
          <div>
            <h2>Anais Cruz </h2>
            <h3 className="pb-2">
              Central Health, Program Manager-Communications & Community
              Engagement
            </h3>
          </div>
          <div>
            <h2>Leticia Mendoza </h2>
            <h3>
              Texas Disposal Systems, Director of Marketing and Communications
            </h3>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default OurTeam;
