import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Gallery from "../components/Gallery";

export default function GalleryPage() {
  return (
    <div>
      <title>GALLERY</title>
      <Header />
        <Gallery embedId="JLmOteqmDYc" />
        <Gallery embedId="8tjMM67-aao"/>
        <Gallery embedId="0YiirWsRlQ8"/>
      <Footer />
    </div>
  );
}

