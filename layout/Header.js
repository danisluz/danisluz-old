import { Fragment, useEffect, useState } from "react";
import { activeSection } from "../utilits";
import { FormattedMessage, useIntl } from 'react-intl';
import { useRouter } from 'next/router'

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
      {/* End Header */}
      {/* nav bar */}
      <header
        className={`header-left ${
          sideBarToggle ? "menu-open menu-open-desk" : ""
        }`}
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <img src="static/img/about-me.jpg" title="" alt="" />
              </div>
              <h5>Daniel Luz</h5>
            </div>
          </div>
          {blog ? <MenuWithBlog /> : <MenuWithOutBlog locales={locales} />}
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

const MenuWithOutBlog = ({ locales }) => {
  const intl = useIntl();
  const [selectedLocale, setSelectedLocale] = useState("fr");
  
  return (
    <ul className="nav nav-menu" id="pp-menu">
      <li data-menuanchor="home" className="active">
        <a className="nav-link" href="#home">
          <i className="ti-home" />
          <span>
            <FormattedMessage id="header.home" />
          </span>
        </a>
      </li>
      <li data-menuanchor="about">
        <a className="nav-link" href="#about">
          <i className="ti-id-badge" />
          <span>
            <FormattedMessage id="header.about" />
          </span>
        </a>
      </li>
      <li data-menuanchor="about">
        <a className="nav-link" href="#experience">
          <i className="ti-bookmark-alt" />
          <span>
            <FormattedMessage id="header.experiences" />
          </span>
        </a>
      </li>
      <li data-menuanchor="services">
        <a className="nav-link" href="#expertise">
          <i className="ti-panel" />
          <span>
            <FormattedMessage id="header.expertises" />
          </span>
        </a>
      </li>
      <li data-menuanchor="contactus">
        <a className="nav-link" href="#contactus">
          <i className="ti-map-alt" />
          <span>
            <FormattedMessage id="header.contact" />
          </span>
        </a>
      </li>

      {/* <li data-menuanchor="contactus">
        <div className={styles.translationHeader}>
          {locales.map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              <div
                className={`${styles.languageButton} ${
                  selectedLocale === locale ? styles.selectedLanguage : ""
                }`}
                onClick={() => setSelectedLocale(locale)}
              >
                <span>{locale.toUpperCase()}</span>
              </div>
            </Link>
          ))}
        </div>
      </li> */}

    </ul>
  );
};

const MenuWithBlog = () => {
  useEffect(() => {
    window.addEventListener("scroll", () =>
      document.querySelector(".blog").classList.add("active")
    );
  }, []);

  return (
    <Fragment>
      <ul className="nav nav-menu" id="pp-menu">
        {/* ... outras entradas de menu ... */}
      </ul>
    </Fragment>
  );
};
