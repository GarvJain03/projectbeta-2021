import React, { useState } from "react";

function FAQ() {
  const [question, setquestion] = useState(0);
  return (
    <div>
      <div className="container mx-auto pt-16 bg-gray-100">
        <div className="text-center pb-3 md:pb-10 xl:pb-20">
          <h1 className="px-2 xl:px-0 xl:text-3xl md:text-2xl text-xl font-bold text-gray-800">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="w-10/12 mx-auto">
          <ul>
            <li className="py-6 border-gray-200 border-solid border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">
                  How long does it take to ship the products?
                </h3>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    question === 0 ? setquestion(null) : setquestion(0)
                  }
                >
                  {question === 0 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Close"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Open"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                      <line x1={12} y1={9} x2={12} y2={15} />
                    </svg>
                  )}
                </div>
              </div>
              {question === 0 && (
                <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">
                  The products are usually shipped within 3-4 business days.{" "}
                </p>
              )}
            </li>
            <li className="py-6 border-gray-200 border-solid border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">
                  Can a product be refunded or exchanged?
                </h3>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    question === 1 ? setquestion(null) : setquestion(1)
                  }
                >
                  {question === 1 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Close"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Open"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                      <line x1={12} y1={9} x2={12} y2={15} />
                    </svg>
                  )}
                </div>
              </div>
              {question === 1 && (
                <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">
                  {" "}
                  We have a one week refund and exchange policy. If you feel
                  that something is wrong with the product, you can contact us
                  at our customer care helpline.{" "}
                </p>
              )}
            </li>
            <li className="py-6 border-gray-200 border-solid border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">
                  How long is the warranty period?
                </h3>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    question === 2 ? setquestion(null) : setquestion(2)
                  }
                >
                  {question === 2 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Close"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Open"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                      <line x1={12} y1={9} x2={12} y2={15} />
                    </svg>
                  )}
                </div>
              </div>
              {question === 2 && (
                <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">
                  {" "}
                  Every product comes with a one year warranty period. You can
                  contact the customer support for further details.
                </p>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
