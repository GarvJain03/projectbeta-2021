import { useEffect } from "react";
import AOS from "aos";
import { appName } from "../lib/constants";

import "aos/dist/aos.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {" "}
      <title>{appName}</title>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
