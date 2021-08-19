import React from "react";
import Link from "next/link";
import Toggle from "./Toggle";
import { appName } from "../lib/constants";

function Header() {
  return (
    <div className="headerelements">
      <header
        className="text-gray-600 body-font"
        data-aos="slide-up"
        data-aos-duration="1000"
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-700 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl" style={{ fontWeight: "bold" }}>
              {appName}
            </span>
          </span>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <span className="mr-5 hover:text-gray-900">
              <Link className="mr-5 hover:text-gray-900" href="/">
                Home
              </Link>
            </span>
            <span className="mr-5 hover:text-gray-900">
              <Link className="mr-5 hover:text-gray-900" href="/about">
                About Us
              </Link>
            </span>
            <span className="mr-5 hover:text-gray-900">
              <Link className="mr-5 hover:text-gray-900" href="/contact">
                Contact
              </Link>
            </span>
            <span className="mr-5 hover:text-gray-900">
              <Link className="mr-5 hover:text-gray-900" href="/pricing">
                Pricing
              </Link>
            </span>
            <span className="mr-5 hover:text-gray-900">
              <Link className="mr-5 hover:text-gray-900" href="/gallery">
                Gallery
              </Link>
            </span>
          </nav>
          <button className="inline-flex items-center border-0 py-1 px-3 mt-4 md:mt-0">
            <Toggle />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
