import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./DoctorHome.css";

// import required modules
import { EffectFade, Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";

const DoctorHome = () => {
  const [loadDoc, setLoadDoc] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch("https://promise-hospoital-server-jahid900pj.vercel.app/docInfo")
      .then((res) => res.json())
      .then((data) => {
        setLoadDoc(data);
        setLoader(false);
        console.log(data);
      });
  }, []);

  return (
    <div>
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
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper"
      >
        {loadDoc?.map((doc, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="mainDiv">
                <div className="bgDoc rounded-xl border-r-4 border-teal-500 pt-10 pb-16 px-4">
                  <h2 className="text-3xl text-black font-bold text-center mb-16">
                    Top Doctors
                  </h2>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col justify-center items-end">
                      <h2 className="text-2xl lg:text-3xl font-semibold text-right mb-6">
                        {doc?.name}
                      </h2>
                      <h2 className="text-lg lg:text-xl text-right">
                        {doc?.position}
                      </h2>
                      <h2 className="text-lg lg:text-xl font-semibold text-right">
                        {doc?.speciality}
                      </h2>
                    </div>

                    <div className="avatar">
                      <div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] object-cover rounded-full ring ring-primary hover:ring-secondary ring-offset-base-100 ring-offset-2">
                        <img src={doc?.doctorImg} alt="Doctor_Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex justify-center mt-8">
        <Link to="/doctors">
          <button className="btn bg-blue-900 hover:bg-teal-500 border-none text-white">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorHome;
