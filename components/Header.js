import React from "react";
import Link from "next/link";
import Toggle from "./Toggle";

function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font bg-white">
        <div
          className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
        >
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">GalaXDevs</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <span className="mr-5 hover:text-gray-900">
              <Link href="/">Home</Link>
            </span>
            <span className="mr-5 hover:text-gray-900">
              <Link href="/about">About Us</Link>
            </span>
            <span className="mr-5 hover:text-gray-900">
              <Link href="/contact">Contact</Link>
            </span>
            <span className="mr-5 hover:text-gray-900">
              <Link href="/pricing">Pricing</Link>
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
