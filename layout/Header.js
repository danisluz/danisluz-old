import { Fragment, useEffect, useState } from "react";
import { activeSection } from "../utilits";
import { FormattedMessage, useIntl } from 'react-intl';
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'
import Link from "next/link"


const Header = ({ blog }) => {
  const { locales } = useRouter();
  const intl = useIntl();

  const [sideBarToggle, setSideBarToggle] = useState(false);
  useEffect(() => {
    if (!blog) {
      activeSection();
    }
  }, []);

  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand"></div>
          <button
            className={`toggler-menu ${sideBarToggle ? "open" : ""}`}
            onClick={() => setSideBarToggle(!sideBarToggle)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <header
        className={`header-left ${
          sideBarToggle ? "menu-open menu-open-desk" : ""
        }`}
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <img src="static/img/about-me.jpg" title="Daniel Luz" alt="Image Daniel Luz" />
              </div>
              <h5>Daniel Luz</h5>
            </div>
          </div>
          {blog ? <MenuWithBlog /> : <MenuWithOutBlog locales={locales} setSideBarToggle={setSideBarToggle} sideBarToggle={sideBarToggle} />}
        </div>
        <div className="nav justify-content-center social-icons">
          <a href="https://www.facebook.com/danielsluz" target="_blank">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://www.instagram.com/danisluz/" target="_blank">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://www.linkedin.com/in/danisluz/" target="_blank">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="https://github.com/danisluz" target="_blank">
            <i className="fab fa-github" />
          </a>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;

const MenuWithOutBlog = ({ locales, setSideBarToggle, sideBarToggle  }) => {
  const intl = useIntl();
  const [selectedLocale, setSelectedLocale] = useState("fr");
  const pathSegments = useRouter().locale;

  
  return (
    <ul className="nav nav-menu" id="pp-menu">
      <li data-menuanchor="home" className="active">
        <a 
          href="#home" 
          className="nav-link"
          onClick={() => setSideBarToggle(!sideBarToggle)}
        >
          <i className="ti-home" />
          <span>
            <FormattedMessage id="header.home" />
          </span>
        </a>
      </li>
      <li data-menuanchor="about">
        <a className="nav-link" href="#about" onClick={() => setSideBarToggle(!sideBarToggle)}>
          <i className="ti-id-badge" />
          <span>
            <FormattedMessage id="header.about" />
          </span>
        </a>
      </li>
      <li data-menuanchor="about">
        <a className="nav-link" href="#experience" onClick={() => setSideBarToggle(!sideBarToggle)}>
          <i className="ti-bookmark-alt" />
          <span>
            <FormattedMessage id="header.experiences" />
          </span>
        </a>
      </li>
      <li data-menuanchor="services">
        <a className="nav-link" href="#expertise" onClick={() => setSideBarToggle(!sideBarToggle)}>
          <i className="ti-panel" />
          <span>
            <FormattedMessage id="header.expertises" />
          </span>
        </a>
      </li>
      <li data-menuanchor="contactus">
        <a className="nav-link" href="#contactus" onClick={() => setSideBarToggle(!sideBarToggle)}>
          <i className="ti-map-alt" />
          <span>
            <FormattedMessage id="header.contact" />
          </span>
        </a>
      </li>

      <li data-menuanchor="contactus">
        <div className={styles.translationHeader}>
          {locales.map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              <div
                className={`${styles.languageButton} ${
                  pathSegments === locale ? styles.selectedLanguage : styles.selectedNotLanguage
                }`}
                onClick={() => {setSelectedLocale(locale); setSideBarToggle(!sideBarToggle)}}
              >
                <span>{locale.toUpperCase()}</span>
              </div>
            </Link>
          ))}
        </div>
      </li>

    </ul>
  );
};