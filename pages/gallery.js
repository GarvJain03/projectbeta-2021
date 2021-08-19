import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function GalleryPage() {
  return (
    <div>
      <Header />
      <Gallery embedId="JLmOteqmDYc" />
      <Gallery embedId="8tjMM67-aao" />
      <Gallery embedId="0YiirWsRlQ8" />
      <div
        className="icon-container"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Link className="icon-container" href="/pricing" passHref>
          <FontAwesomeIcon icon={faAngleLeft} className="icon vert-move" />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
