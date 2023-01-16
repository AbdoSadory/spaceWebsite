import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./style.module.css";

const Crew = ({ crew }) => {
  let [crew_data, setcrew_data] = useState([]);
  useEffect(() => {
    crew && setcrew_data([...crew]);
  }, [crew]);
  return (
    <section className={`${styles.crew_section} crew_section`}>
      <h2 className="d-none">Crew data</h2>
      <div className={`${styles.crew_section_content}`}>
        <h2 className={`${styles.crew_section_header} text-uppercase`}>
          <span>02</span> Meet your crew
        </h2>
        <div className="w-100">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper"
            slidesPerView={1}
          >
            {crew_data.length === 0 ? (
              <SwiperSlide>
                <h2 className="text-light text-uppercase w-100 text-center">
                  Loading
                </h2>
              </SwiperSlide>
            ) : (
              crew_data.map((crewMember) => (
                <SwiperSlide key={crewMember.name} className="p-0 m-0">
                  <div className={`${styles.crew_card}`}>
                    <div
                      className={`row justify-content-between align-items-center m-0 p-0`}
                    >
                      <div
                        className={`${styles.crew_card_content} col-12 col-xl-5 px-0`}
                      >
                        <p className={`${styles.crew_role} text-uppercase`}>
                          {crewMember.role}
                        </p>
                        <h2 className={`${styles.crew_name} text-uppercase`}>
                          {crewMember.name}
                        </h2>
                        <p className={`${styles.crew_bio}`}>{crewMember.bio}</p>
                      </div>
                      <div
                        className={`${styles.crew_card_image} col-12 col-xl-5 mx-0 px-0`}
                      >
                        <img
                          className={`${styles.crew_img}`}
                          src={crewMember.images.png.slice(1)}
                          alt="crew person"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
// className={`${}`}
export default Crew;
