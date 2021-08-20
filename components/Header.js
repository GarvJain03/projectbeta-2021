import React from "react";
import Link from "next/link";
import { appName } from "../lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="headerelements">
      <header
        className="nav text-gray-600 body-font bg-white"
        data-aos="slide-up"
        data-aos-duration="1000"
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-700 rounded-full"
              viewBox="0 0 24 24"
            >
              <FontAwesomeIcon icon={faRobot} />
            </svg>
            <span className="ml-3 text-xl" style={{ fontWeight: "bold" }}>
              {appName}
            </span>
          </span>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <span className="transition duration-500 ease-in-out p-2 rounded mr-5 hover:bg-blue-300 ">
              <Link href="/">Home</Link>
            </span>
            <span className="transition duration-500 ease-in-out p-2 rounded mr-5 hover:bg-blue-300">
              <Link href="/about">About Us</Link>
            </span>
            <span className="transition duration-500 ease-in-out p-2 rounded mr-5 hover:bg-blue-300">
              <Link href="/contact">Contact</Link>
            </span>
            <span className="transition duration-500 ease-in-out p-2 rounded mr-5 hover:bg-blue-300">
              <Link href="/pricing">Pricing</Link>
            </span>
            <span className="transition duration-500 ease-in-out p-2 rounded mr-5 hover:bg-blue-300">
              <Link href="/gallery">Gallery</Link>
            </span>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
