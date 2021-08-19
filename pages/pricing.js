import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Pricing/Products";
import BuyNow from "../components/Pricing/BuyNow";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function Pricing() {
  return (
    <div>
      <Header />
      <Products />
      <BuyNow />
      <div
        className="icon-container"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Link className="icon-container" href="/contact" passHref>
          <FontAwesomeIcon icon={faAngleLeft} className="icon vert-move" />
        </Link>
        <Link className="icon-container" href="/gallery" passHref>
          <FontAwesomeIcon icon={faAngleRight} className="icon vert-move" />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
