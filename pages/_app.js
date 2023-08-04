import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layout/PreLoader";
import "../styles/glitch.css";
import "../styles/globals.css";

{/* <!-- plugin CSS --> */}
import "../public/static/plugin/bootstrap/css/bootstrap.min.css";
import "../public/static/plugin/font-awesome/css/all.min.css";
import "../public/static/plugin/et-line/style.css";
import "../public/static/plugin/themify-icons/themify-icons.css";
import "../public/static/plugin/owl-carousel/css/owl.carousel.min.css";
import "../public/static/plugin/magnific/magnific-popup.css";
import "../public/static/plugin/scroll/jquery.mCustomScrollbar.min.css";
import "../public/static/plugin/scroll/jquery.mCustomScrollbar.min.css";


function MyApp({ Component, pageProps }) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Daniel Luz</title>

        {/* <!-- Favicon --> */}
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

        {/* <!-- theme css --> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        
      </Head>
      {load && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
