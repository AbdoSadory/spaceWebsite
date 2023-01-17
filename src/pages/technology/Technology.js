import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./style.module.css";

const Technology = ({ technology, loading, error }) => {
  let [technology_data, setTechnology_data] = useState([]);
  useEffect(() => {
    technology && setTechnology_data([...technology]);
    console.log(technology);
  }, [technology]);
  return (
    <section className={`${styles.technology_section} technology_section`}>
      <h2 className="d-none">technology data</h2>
      {error && <div className="notFoundPage">Error During Fetching</div>}
      {loading && <div className="notFoundPage">Loading</div>}
      {technology_data && (
        <div className={`${styles.technology_section_content}`}>
          <h2 className={`${styles.technology_section_header} text-uppercase`}>
            <span>03</span> SPACE LAUNCH 101
          </h2>
          <div className="w-100">
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              slidesPerView={1}
              spaceBetween={20}
            >
              {technology_data.length === 0 ? (
                <SwiperSlide>
                  <h2 className="text-light text-uppercase w-100 text-center">
                    Loading
                  </h2>
                </SwiperSlide>
              ) : (
                technology_data.map((technologyElement) => (
                  <SwiperSlide key={technologyElement.name} className="p-0">
                    <div className={`${styles.technology_card}`}>
                      <div
                        className={`row justify-content-end align-items-center m-0 p-0`}
                      >
                        <div
                          className={`${styles.technology_card_content} col-12 col-xl-5 px-0`}
                        >
                          <p
                            className={`${styles.technology_role} text-uppercase`}
                          >
                            The technology ...
                          </p>
                          <h2
                            className={`${styles.technology_name} text-uppercase`}
                          >
                            {technologyElement.name}
                          </h2>
                          <p className={`${styles.technology_description}`}>
                            {technologyElement.description}
                          </p>
                        </div>
                        <div
                          className={`${styles.technology_card_image} col-12 col-xl-5 mx-0 px-0`}
                        >
                          <img
                            className={`${styles.technology_img} d-none d-xl-inline`}
                            src={
                              technologyElement.images
                                ? require("../../" +
                                    technologyElement.images.portrait.slice(2))
                                : require("../../assets/technology/image-launch-vehicle-portrait.jpg")
                            }
                            alt="technology"
                          />
                          <img
                            className={`${styles.technology_img} d-xl-none`}
                            src={
                              technologyElement.images
                                ? require("../../" +
                                    technologyElement.images.landscape.slice(2))
                                : require("../../assets/technology/image-launch-vehicle-landscape.jpg")
                            }
                            alt="technology"
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
      )}
    </section>
  );
};

export default Technology;
