/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <section
        className="text-gray-600 body-font overflow-hidden"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="container px-5 py-12 mx-auto">
          <h1 className="text-3xl font-bold title-font text-gray-900 mb-12 text-center">
            Our Team
          </h1>
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <img
                alt="blog"
                src="https://media.discordapp.net/attachments/872351236559605810/877987190997680168/DIVYAM.jpg?width=663&height=663"
                className="w-40 h-40 rounded-full flex-shrink-0 object-cover object-center"
              />
              <br />
              <p className="leading-relaxed mb-8">
                I am Divyam Prusty, a high-schooler at Delhi Public School R.K.
                Puram. I like to build different kinds of projects. I have a
                keen interest in Comp. Sc. and tech. I am willing to pursue
                major in Computer Science in my undergrad and want to become a
                DevOp.
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a
                  className="text-indigo-700 inline-flex items-center"
                  href="https://github.com/divyamprusty"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWIdth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWIdth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWIdth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
              <a className="inline-flex items-center">
                <span className="flex-grow flex flex-col">
                  <span className="title-font font-medium text-gray-900">
                    DIVYAM PRUSTY
                  </span>
                  <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                    UI DEVELOPER
                  </span>
                </span>
              </a>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <img
                alt="blog"
                src="https://images-ext-1.discordapp.net/external/TFUcM9sDVxkmi00__mbAsEG4h1vm02YfjMl4-YKEkYU/%3Fwidth%3D568%26height%3D610/https/media.discordapp.net/attachments/863776406537240576/868184486293147748/Garv.jpg"
                className="w-40 h-40 rounded-full flex-shrink-0 object-cover object-center"
              />
              <br />
              <p className="leading-relaxed mb-8">
                I am Garv Jain, a high schooler at DPS RK Puram. I am passionate
                about computer science and technology. I like to build projects
                using programming and I also have a keen interest in product
                design and robotics. I want to pursue majors in Computer Science
                after high school and become a software developer.
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a
                  className="text-indigo-700 inline-flex items-center"
                  href="https://github.com/GarvJain03"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWIdth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWIdth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWIdth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
              <a className="inline-flex items-center">
                <span className="flex-grow flex flex-col">
                  <span className="title-font font-medium text-gray-900">
                    GARV JAIN
                  </span>
                  <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                    DESIGNER
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div
        className="icon-container"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Link className="icon-container" href="/" passHref>
          <FontAwesomeIcon icon={faAngleLeft} className="icon vert-move" />
        </Link>
        <Link className="icon-container" href="/contact" passHref>
          <FontAwesomeIcon icon={faAngleRight} className="icon vert-move" />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
