import Head from 'next/head'
import { useState } from "react";
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { FormattedMessage, useIntl } from 'react-intl'
import Link from "next/link"

import About from "../components/About";
import Contact from "../components/Contact";
import Expertise from "../components/Expertise";
import TypingAnimation from "../components/TypingAnimation";
import Layout from "../layout/Layout";
import Experience from '../components/Experience';

export default function Home({ dir }) {

  const { locales } = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.home.head.title"})
  const description = intl.formatMessage({ id: "page.home.head.meta.description"})
  const [selectedLocale, setSelectedLocale] = useState("fr");


  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" hrefLang="x-default" />
        <link rel="icon" href="/favicon.ico" hrefLang="fr" />
        <link rel="icon" href="/favicon.ico" hrefLang="en" />
        <link rel="icon" href="/favicon.ico" hrefLang="pt" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

        {/* <!-- plugin CSS --> */}
        <link
          rel="stylesheet"
          href="static/plugin/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="static/plugin/font-awesome/css/all.min.css"
        />
        <link href="static/plugin/et-line/style.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="static/plugin/themify-icons/themify-icons.css"
        />
        <link
          rel="stylesheet"
          href="static/plugin/owl-carousel/css/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="static/plugin/magnific/magnific-popup.css"
        />
        <link
          rel="stylesheet"
          href="static/plugin/scroll/jquery.mCustomScrollbar.min.css"
        />
        {/* <!-- theme css --> */}
        <link href="./static/css/style.css" rel="stylesheet" />

        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>


        <div className={styles.translation}>

          {locales.map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              <div 
                className={`${styles.languageButton} ${selectedLocale === locale ? styles.selectedLanguage : ""}`}
                onClick={() => setSelectedLocale(locale)}
              >
                <span>{locale.toUpperCase()}</span>
              </div>
            </Link>
          ))}
          
        </div>
        
      </header>

      <Layout>
        <section
          id="home"
          data-nav-tooltip="Home"
          className="pp-section pp-scrollable"
        >
          <div className="home-banner">
            <div className="container">
              <div className="row full-screen align-items-center">
                <div className="col-lg-6">
                  <div className="type-box">

                    <h6><FormattedMessage id="page.home.title" values={{ b: (info) => <b>{info}</b> }}/></h6>
                    <h1 className="font-alt">Daniel Luz</h1>
                    <p className="lead">
                      <FormattedMessage id="page.home.sutitle" values={{ b: (info) => <b>{info}</b> }}/> <TypingAnimation />!
                    </p>
                    <p className="desc">
                      <FormattedMessage id="page.home.text" values={{ b: (info) => <b>{info}</b> }}/>
                    </p>
                    <div className="btn-bar">
                      <a
                        className="px-btn px-btn-theme"
                        href="static/pdf/curriculum-developpeur-full-stack.pdf"
                        target="_blank"
                      >
                        <FormattedMessage id="page.home.button" values={{ b: (info) => <b>{info}</b> }}/>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="hb-img">
                    <img src="static/img/banner-daniel.png" title="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Home */}

        <About />
        <Experience />
        <Expertise />
        <Contact />
      </Layout>
    </>
  );
}
