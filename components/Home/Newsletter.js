import React from "react";

function Newsletter() {
  return (
    <div>
      <footer class="text-gray-600 body-font">
        <div class="border-t border-gray-200">
          <div class="container px-5 py-8 flex flex-col mx-auto items-center">
            <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  class="leading-7 text-sm text-gray-600"
                >
                  EMAIL
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-green-200 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                Subscribe
              </button>
              <p class="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
                Subscribe to our
                <br class="lg:block hidden" />
                newsletter
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Newsletter;
