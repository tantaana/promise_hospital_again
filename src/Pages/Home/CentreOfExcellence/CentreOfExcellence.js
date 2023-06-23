import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./CentreOfExcellence.css";

// import required modules
import { Grid, Navigation, Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";

const CentreOfExcellence = () => {
  const [speciality, setSpeciality] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch("https://promise-hospoital-server-jahid900pj.vercel.app/specialities")
      .then((res) => res.json())
      .then((data) => {
        setSpeciality(data);
        setLoader(false);
        console.log(data);
      });
  }, []);

  return (
    <div className="my-10">
      <h2
        className="text-3xl font-bold text-center my-8"
        style={{ color: "#1e3a8a" }}
      >
        Centre Of Excellence
      </h2>

      <div className="flex justify-center">
        {loader ? (
          <div class="flex flex-col">
            <div
              class="w-12 h-12 rounded-full animate-spin
                        border-4 border-solid border-blue-900 border-t-transparent shadow-md"
            ></div>
          </div>
        ) : (
          ""
        )}
      </div>

      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
        }}
        modules={[Grid, Autoplay, Navigation, Pagination]}
        className="mySwiper anotherClass"
      >
        {speciality?.map((speciality, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="duration-300 ease-in-out bg-blue-200 hover:bg-teal-500 text-black hover:text-white flex justify-start items-center gap-2 px-2 py-4 rounded-xl">
                <img src={speciality?.img} alt="" />
                <h2 className="text-xl font-semibold">
                  {speciality?.speciality}
                </h2>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex justify-center mt-8">
        <Link to="/specialities">
          <button className="btn bg-blue-900 hover:bg-teal-500 border-none text-white">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CentreOfExcellence;
