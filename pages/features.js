/* eslint-disable @next/next/no-img-element */
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";
import { appName } from "../lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";

export default function Features() {
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://media.discordapp.net/attachments/869407124223053868/877976704444952626/Banner.png"
            width="100"
            height="100"
            layout="fill"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              FEATURES
            </h1>
            <p className="mb-8 leading-relaxed">
              R2-D2 stands for Second Generation Robotic Droid Series-2,
              according to a Star Wars encyclopedia published after the release
              of the film Star Wars. A skilled starship mechanic and a reliable
              droid, he is full of himself and his superior manners with all of
              the knowledge he had punched into him. Tends to be a worrier. R2D2
              is a purely mechanical droid for delivery messages, confidential
              codes, hardware repair, and navigation assistance. Artoo can be
              used to repair various appliances with mechanical and electrical
              configurations. It also has an inbuilt projector to stream video
              content at your discretion. Messages can be delivered in the form
              of holograms to other robots using the {appName} cloud. It is also
              helpful for students as it can help them evaluate their
              performance by uploading their test answers inside it using our
              very own app. It is also helpful towards senior citizens. You can
              set reminders and it will deliver the medicines and other
              necessities to your bedside. Because droids learn and grow, R2-D2
              has grown smarter and more intelligent without a memory wipe.
            </p>
            <div className="flex justify-center">
              <button className="transition duration-500 ease-in-out inline-flex text-black bg-white border-2 border-indigo-500 rounded-md py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-lg">
                <Link href="/">Back To Home </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                1.8K
              </h2>
              <p className="leading-relaxed">Offices</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                35
              </h2>
              <p className="leading-relaxed">Countries</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="sm:text-4xl text-3xl text-gray-900">
                <FontAwesomeIcon icon={faInfinity} />
              </h2>
              <p className="leading-relaxed">Efforts</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
