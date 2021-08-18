import React from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import R2D2 from "../../public/R2D2.png";
import Link from "next/link";

function HeroSection() {
  return (
    <div>
      <title>HOME</title>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
            data-aos="slide-left"
          >
            <h1
              style={{ color: "#14183E" }}
              className="title-font sm:text-4xl text-3xl mb-4 font-medium"
            >
              The Artoo-Detoo
            </h1>
            <p className="mb-8 leading-relaxed">
              R2D2 is your go to companion. Ranging from the plug of your
              television to the engine of your car, it can fix anything in just
              a span of few minutes.
            </p>
            <div className="flex justify-center">
              <Link href="/features">
                <button
                  style={{
                    borderRadius: "20px",
                    filter:
                      "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))",
                  }}
                  className="transition duration-500 ease-in-out inline-flex text-gray-900 bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 transform hover:-translate-y-1 hover:scale-110 rounded text-lg"
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>
          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            data-aos="slide-right"
          >
            <Image
              className="object-cover object-center rounded"
              alt="R2D2"
              src={R2D2}
            />
          </div>
        </div>
      </section>
      <a className="icon-container" href="#mission">
        <FontAwesomeIcon icon={faAngleDown} className="icon animate-bounce" />
      </a>
    </div>
  );
}

export default HeroSection;
