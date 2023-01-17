import React from "react";
import styles from "./style.module.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import close_btn from "../../assets/shared/icon-close.svg";
import burger_close_btn from "../../assets/shared/icon-hamburger.svg";
const Header = () => {
  let url = useLocation();
  const nav_items = document.getElementsByClassName("nav-item");
  for (let item of nav_items) {
    item.classList.remove("active", "active_nav_offcanvas");
  }
  if (url.pathname === "/spaceWebsite") {
    const home_nav_item = document.getElementById("nav-item-home");
    const home_nav_item_offcanvas = document.getElementById(
      "nav-item-home-offcanvas"
    );
    home_nav_item && home_nav_item.classList.add("active");
    home_nav_item_offcanvas &&
      home_nav_item_offcanvas.classList.add("active_nav_offcanvas");
  } else if (url.pathname === "/destination") {
    const destination_nav_item = document.getElementById(
      "nav-item-destination"
    );
    const destination_nav_item_offcanvas = document.getElementById(
      "nav-item-destination-offcanvas"
    );
    destination_nav_item && destination_nav_item.classList.add("active");
    destination_nav_item_offcanvas &&
      destination_nav_item_offcanvas.classList.add("active_nav_offcanvas");
  } else if (url.pathname === "/crew") {
    const crew_nav_item = document.getElementById("nav-item-crew");
    const crew_nav_item_offcanvas = document.getElementById(
      "nav-item-crew-offcanvas"
    );
    crew_nav_item && crew_nav_item.classList.add("active");
    crew_nav_item_offcanvas &&
      crew_nav_item_offcanvas.classList.add("active_nav_offcanvas");
  } else if (url.pathname === "/technology") {
    const technology_nav_item = document.getElementById("nav-item-technology");
    const technology_nav_item_offcanvas = document.getElementById(
      "nav-item-technology-offcanvas"
    );
    technology_nav_item && technology_nav_item.classList.add("active");
    technology_nav_item_offcanvas &&
      technology_nav_item_offcanvas.classList.add("active_nav_offcanvas");
  }
  return (
    <header id="header" className={`${styles.header_section}`}>
      <nav className="navbar navbar-expand-lg p-0">
        <div className="container-fluid m-0 p-0">
          <div className="ms-4 p-2">
            <Link
              className={`navbar-brand ${styles.header_brand_logo} d-inline-block text-center hide-title`}
              title="brand"
              to="/spaceWebsite"
            >
              <img
                className={`${styles.header_brand_logo_img}`}
                src={logo}
                alt="logo"
              />
            </Link>
          </div>
          <button
            className={`navbar-toggler me-4 p-2 ${styles.navbar_toggler}`}
            type="button"
            aria-label="Toggle navigation"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <img
              src={burger_close_btn}
              className={` ${styles.nav_icon}`}
              alt="icon-hamburger"
            />
          </button>
          <div
            className={`collapse navbar-collapse ${styles.position_relative}`}
            id="navbarTogglerDemo01"
          >
            <div className={`${styles.line}`}></div>
            <ul
              className={`${styles.navbar_desktop} navbar-nav ms-auto mb-2 mb-lg-0 justify-content-center`}
            >
              <li className={`nav-item ${styles.nav_item}`} id="nav-item-home">
                <Link
                  className={`nav-link hide-title p-4 ${styles.nav_link} text-uppercase`}
                  title="news"
                  aria-current="page"
                  to="/spaceWebsite"
                >
                  00 home
                </Link>
              </li>
              <li
                className={`nav-item  ${styles.nav_item}`}
                id="nav-item-destination"
              >
                <Link
                  className={`nav-link nav-link-destination hide-title p-4 ${styles.nav_link} text-uppercase`}
                  title="dimension"
                  to="/destination"
                >
                  01 destination
                </Link>
              </li>
              <li className={`nav-item  ${styles.nav_item}`} id="nav-item-crew">
                <Link
                  className={`nav-link hide-title p-4 ${styles.nav_link} text-uppercase`}
                  title="we are"
                  to="/crew"
                >
                  02 crew
                </Link>
              </li>
              <li
                className={`nav-item  ${styles.nav_item}`}
                id="nav-item-technology"
              >
                <Link
                  className={`nav-link hide-title p-4 ${styles.nav_link} text-uppercase`}
                  title="agents"
                  to="/technology"
                >
                  03 technology
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="offcanvas offcanvas-end d-lg-none"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
              <div
                className="btn"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <img
                  src={close_btn}
                  className={` ${styles.nav_icon}`}
                  alt="icon-hamburger"
                />
              </div>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
                <li
                  className={`nav-item  ${styles.nav_item_offcanvas}`}
                  id="nav-item-home-offcanvas"
                >
                  <Link
                    className={`nav-link hide-title p-2
                     ${styles.nav_link_offcanvas} text-uppercase`}
                    title="news"
                    aria-current="page"
                    to="/spaceWebsite"
                  >
                    00 home
                  </Link>
                </li>
                <li
                  className={`nav-item  ${styles.nav_item_offcanvas}`}
                  id="nav-item-destination-offcanvas"
                >
                  <Link
                    className={`nav-link hide-title p-2
                     ${styles.nav_link_offcanvas} text-uppercase`}
                    title="dimension"
                    to="/destination"
                  >
                    01 destination
                  </Link>
                </li>
                <li
                  className={`nav-item  ${styles.nav_item_offcanvas}`}
                  id="nav-item-crew-offcanvas"
                >
                  <Link
                    className={`nav-link hide-title p-2
                     ${styles.nav_link_offcanvas} text-uppercase`}
                    title="we are"
                    to="/crew"
                  >
                    02 crew
                  </Link>
                </li>
                <li
                  className={`nav-item  ${styles.nav_item_offcanvas}`}
                  id="nav-item-technology-offcanvas"
                >
                  <Link
                    className={`nav-link hide-title p-2
                     ${styles.nav_link_offcanvas} text-uppercase`}
                    title="agents"
                    to="/technology"
                  >
                    03 technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
