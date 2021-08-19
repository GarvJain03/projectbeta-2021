import React from "react";

function FAQ() {
  const HandleDrop = () => {
    let elements = document.querySelectorAll("[data-menu]");
    for (let i = 0; i < elements.length; i++) {
      let main = elements[i];
      main.addEventListener("click", function () {
        let element = main.parentElement.parentElement;
        let andicators = main.querySelectorAll("svg");
        let child = element.querySelector("p");
        child.classList.toggle("hidden");
        if (child.classList.contains("hidden")) {
          andicators[0].style.display = "block";
          andicators[1].style.display = "none";
        } else {
          andicators[0].style.display = "none";
          andicators[1].style.display = "block";
        }
      });
    }
  };

  return (
    <div>
      <div className="pt-16">
        <div className="container mx-auto pt-5">
          <div className="text-center pb-3 md:pb-10 xl:pb-20">
            <h1 className="px-2 xl:px-0 xl:text-5xl md:text-3xl text-2xl font-extrabold text-gray-800">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="w-10/12 mx-auto">
            <ul>
              <li className="py-6 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-gray-800 text-base md:text-xl xl:text-2xl w-10/12">
                    What does lorem ipsum actually mean?
                  </h2>
                  <button
                    onClick={HandleDrop}
                    data-menu
                    className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded-full"
                  >
                    <div aria-label="open">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden icon icon-tabler icon-tabler-circle-plus"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#A0AEC0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="9" y1="12" x2="15" y2="12" />
                        <line x1="12" y1="9" x2="12" y2="15" />
                      </svg>
                    </div>
                    <div aria-label="close">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-circle-minus"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#A0AEC0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="9" y1="12" x2="15" y2="12" />
                      </svg>
                    </div>
                  </button>
                </div>
                <p className="pt-2 md:pt-3 lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base xl:text-lg rounded-b-lg">
                  Find the latest events updates or create events, concerts,
                  conferences, workshops, exhibitions, and cultural events in
                  all cities of the US. The aim of Eventistan is to promote
                  healthy and entertaining event. Greatest appreciation to you
                  and your team for the outstanding job you did for us. The
                  website is just what we wanted, and we were thrilled with the
                  speed your team exercised.
                </p>
              </li>
              <li className="py-6 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-gray-800 text-base md:text-xl xl:text-2xl w-10/12">
                    How do we know what kind of sounds dinosaurs made?
                  </h2>
                  <button
                    onClick={HandleDrop}
                    data-menu
                    className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded-full"
                  >
                    <div aria-label="open">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-circle-plus"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#A0AEC0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="9" y1="12" x2="15" y2="12" />
                        <line x1="12" y1="9" x2="12" y2="15" />
                      </svg>
                    </div>
                    <div aria-label="close">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden icon icon-tabler icon-tabler-circle-minus"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#A0AEC0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="9" y1="12" x2="15" y2="12" />
                      </svg>
                    </div>
                  </button>
                </div>
                <p className="hidden pt-2 md:pt-3 lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base xl:text-lg rounded-b-lg">
                  Find the latest events updates or create events, concerts,
                  conferences, workshops, exhibitions, and cultural events in
                  all cities of the US. The aim of Eventistan is to promote
                  healthy and entertaining event. Greatest appreciation to you
                  and your team for the outstanding job you did for us. The
                  website is just what we wanted, and we were thrilled with the
                  speed your team exercised.
                </p>
              </li>
              <li className="py-6 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-gray-800 text-base md:text-xl xl:text-2xl w-10/12">
                    Why work from home is not as fun as we thought it would be?
                  </h2>
                  <button
                    onClick={HandleDrop}
                    data-menu
                    className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded-full"
                  >
                    <div aria-label="open">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-circle-plus"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#A0AEC0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="9" y1="12" x2="15" y2="12" />
                        <line x1="12" y1="9" x2="12" y2="15" />
                      </svg>
                    </div>
                    <div aria-label="close">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden icon icon-tabler icon-tabler-circle-minus"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#A0AEC0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="9" y1="12" x2="15" y2="12" />
                      </svg>
                    </div>
                  </button>
                </div>
                <p className="hidden pt-2 md:pt-3 lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base xl:text-lg rounded-b-lg">
                  Find the latest events updates or create events, concerts,
                  conferences, workshops, exhibitions, and cultural events in
                  all cities of the US. The aim of Eventistan is to promote
                  healthy and entertaining event. Greatest appreciation to you
                  and your team for the outstanding job you did for us. The
                  website is just what we wanted, and we were thrilled with the
                  speed your team exercised.
                </p>
              </li>
              <li className="py-6 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-gray-800 text-base md:text-xl xl:text-2xl w-10/12">
                    In what way did human beings started using words?
                  </h2>
                  <button
                    onClick={HandleDrop}
                    data-menu
                    className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded-full"
                  >
                    <div aria-label="open">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-circle-plus"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#A0AEC0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="9" y1="12" x2="15" y2="12" />
                        <line x1="12" y1="9" x2="12" y2="15" />
                      </svg>
                    </div>
                    <div aria-label="close">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden icon icon-tabler icon-tabler-circle-minus"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#A0AEC0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="9" y1="12" x2="15" y2="12" />
                      </svg>
                    </div>
                  </button>
                </div>
                <p className="hidden pt-2 md:pt-3 lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base xl:text-lg rounded-b-lg">
                  Find the latest events updates or create events, concerts,
                  conferences, workshops, exhibitions, and cultural events in
                  all cities of the US. The aim of Eventistan is to promote
                  healthy and entertaining event. Greatest appreciation to you
                  and your team for the outstanding job you did for us. The
                  website is just what we wanted, and we were thrilled with the
                  speed your team exercised.
                </p>
              </li>
              <li className="py-6 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-gray-800 text-base md:text-xl xl:text-2xl w-10/12">
                    Which is the least developed area in the world
                  </h2>
                  <button
                    onClick={HandleDrop}
                    data-menu
                    className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded-full"
                  >
                    <div aria-label="open">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-circle-plus"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#A0AEC0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="9" y1="12" x2="15" y2="12" />
                        <line x1="12" y1="9" x2="12" y2="15" />
                      </svg>
                    </div>
                    <div aria-label="close">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden icon icon-tabler icon-tabler-circle-minus"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#A0AEC0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="9" y1="12" x2="15" y2="12" />
                      </svg>
                    </div>
                  </button>
                </div>
                <p className="hidden pt-2 md:pt-3 lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base xl:text-lg rounded-b-lg">
                  Find the latest events updates or create events, concerts,
                  conferences, workshops, exhibitions, and cultural events in
                  all cities of the US. The aim of Eventistan is to promote
                  healthy and entertaining event. Greatest appreciation to you
                  and your team for the outstanding job you did for us. The
                  website is just what we wanted, and we were thrilled with the
                  speed your team exercised.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
