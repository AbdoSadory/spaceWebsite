import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header id="header" className={`${styles.header_section}`}>
      <nav className="navbar navbar-expand-lg p-0">
        <div className="container-fluid m-0 p-0">
          <div className="ms-4 p-2">
            <Link
              className={`navbar-brand ${styles.header_brand_logo} d-inline-block text-center hide-title`}
              title="brand"
              to="/"
            >
              <img
                className={`${styles.header_brand_logo_img}`}
                src="assets/shared/logo.svg"
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
              src="assets/shared/icon-hamburger.svg"
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
              <li className={`nav-item ${styles.nav_item}`}>
                <Link
                  className={`nav-link hide-title p-4 ${styles.nav_link} text-uppercase`}
                  title="news"
                  aria-current="page"
                  to="/"
                >
                  00 home
                </Link>
              </li>
              <li className={`nav-item ${styles.nav_item}`}>
                <Link
                  className={`nav-link hide-title p-4 ${styles.nav_link} text-uppercase`}
                  title="dimension"
                  to="/destination"
                >
                  01 destination
                </Link>
              </li>
              <li className={`nav-item ${styles.nav_item}`}>
                <Link
                  className={`nav-link hide-title p-4 ${styles.nav_link} text-uppercase`}
                  title="we are"
                  to="/crew"
                >
                  02 crew
                </Link>
              </li>
              <li className={`nav-item ${styles.nav_item}`}>
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
                  src="assets/shared/icon-close.svg"
                  className={` ${styles.nav_icon}`}
                  alt="icon-hamburger"
                />
              </div>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
                <li className={`nav-item ${styles.nav_item_offcanvas}`}>
                  <Link
                    className={`nav-link hide-title p-2
                     ${styles.nav_link_offcanvas} text-uppercase`}
                    title="news"
                    aria-current="page"
                    to="/"
                  >
                    00 home
                  </Link>
                </li>
                <li className={`nav-item ${styles.nav_item_offcanvas}`}>
                  <Link
                    className={`nav-link hide-title p-2
                     ${styles.nav_link_offcanvas} text-uppercase`}
                    title="dimension"
                    to="/destination"
                  >
                    01 destination
                  </Link>
                </li>
                <li className={`nav-item ${styles.nav_item_offcanvas}`}>
                  <Link
                    className={`nav-link hide-title p-2
                     ${styles.nav_link_offcanvas} text-uppercase`}
                    title="we are"
                    to="/crew"
                  >
                    02 crew
                  </Link>
                </li>
                <li className={`nav-item ${styles.nav_item_offcanvas}`}>
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
