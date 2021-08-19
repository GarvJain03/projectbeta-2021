import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../public/Banner.png";
import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={Banner}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Microdosing synth tattooed vexillologist
            </h1>
            <p className="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
            <div className="flex justify-center">
              <button className="transition duration-500 ease-in-out inline-flex text-black bg-white border-2 border-indigo-500 rounded-md py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-lg">
                <Link href="/">Back To Home </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
