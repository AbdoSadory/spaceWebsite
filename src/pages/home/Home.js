import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Home = () => {
  return (
    <section className={`${styles.home_section}`}>
      <h2 className="d-none">Space Tourism Home Page</h2>
      <div className={`${styles.home_section_content} container`}>
        <div className="row justify-content-between align-items-center m-0 p-0">
          <div className="col-12 col-xl-5 m-0 ">
            <p className={`${styles.title_heading_5} text-uppercase`}>
              So, you want to travel to
            </p>
            <h3 className={`${styles.title_heading_1} text-uppercase`}>
              space
            </h3>
            <p className={`${styles.desc_body_text}`}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="col-12 col-xl-5 m-0">
            <div className={`${styles.explore_link_container}`}>
              <Link
                to="/destination"
                className={`${styles.explore_link} text-decoration-none text-uppercase`}
              >
                explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
