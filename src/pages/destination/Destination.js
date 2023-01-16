import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

const Destination = ({ destinations }) => {
  let [destination_data, setdestination_data] = useState([]);
  const destination_btns = document.getElementsByClassName("destination_btn");
  const handlingButtons = (e) => {
    for (let btn of destination_btns) {
      btn.classList.remove("active");
    }
    e.target.classList.add("active");
    let destination_filtered_data = destinations.filter(
      (dest) => dest.name === e.target.id
    );
    setdestination_data([...destination_filtered_data]);
  };
  useEffect(() => {
    destinations && setdestination_data(destinations);
  }, [destinations]);
  return (
    <section className={`${styles.destination_section}`}>
      <h2 className="d-none">destinations section</h2>
      <div className={`${styles.destination_section_content}`}>
        <h2 className={`${styles.destination_section_header} text-uppercase`}>
          <span>01</span> Pick your destination
        </h2>
        <div className="row justify-content-between align-items-center m-0 p-0">
          <div className="col-12 col-xl-5 m-0">
            <div
              className={`${styles.destination_image_container} w-100 text-center`}
            >
              <img
                src={
                  destination_data[0] && destination_data[0].images.png.slice(1)
                }
                alt="moon"
                className={`${styles.destination_image}`}
              />
            </div>
          </div>
          <div className="col-12 col-xl-5 m-0">
            <div className={`${styles.destination_right_content}`}>
              <button
                className={`${styles.destination_btn} destination_btn active`}
                id="Moon"
                onClick={(e) => {
                  handlingButtons(e);
                }}
              >
                Moon
              </button>
              <button
                className={`${styles.destination_btn} destination_btn`}
                id="Mars"
                onClick={(e) => {
                  handlingButtons(e);
                }}
              >
                Mars
              </button>
              <button
                className={`${styles.destination_btn} destination_btn`}
                id="Europa"
                onClick={(e) => {
                  handlingButtons(e);
                }}
              >
                Europa
              </button>
              <button
                className={`${styles.destination_btn} destination_btn`}
                id="Titan"
                onClick={(e) => {
                  handlingButtons(e);
                }}
              >
                Titan
              </button>
              <div className={`${styles.destination_desc_container}`}>
                <h3 className={`${styles.destination_title}`}>
                  {destination_data[0] && destination_data[0].name}
                </h3>
                <p className={`${styles.destination_desc}`}>
                  {destination_data[0] && destination_data[0].description}
                </p>
                <div className={`${styles.destination_desc_numbers}`}>
                  <div
                    className={`row justify-content-start align-items-center`}
                  >
                    <div className={`col-12 col-sm`}>
                      <h4
                        className={`${styles.destination_desc_numbers_title}`}
                      >
                        avg. distance
                      </h4>
                      <p
                        className={`${styles.destination_desc_numbers_details} p-0`}
                      >
                        {destination_data[0] && destination_data[0].distance}
                      </p>
                    </div>
                    <div className={`col-12 col-sm`}>
                      <h4
                        className={`${styles.destination_desc_numbers_title}`}
                      >
                        est.travel time
                      </h4>
                      <p
                        className={`${styles.destination_desc_numbers_details} p-0`}
                      >
                        {destination_data[0] && destination_data[0].travel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// className={`${}`}
export default Destination;
