import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import bg1 from "../Specialities/SpecialitiesImg/bg1.jpg";

const OurSeciality = ({ imag }) => {
  const { img, speciality, _id, speciality_id } = imag;
  // console.log(img)

  const [loader, setLoader] = useState(false);
  const clickLoader = () => {
    setLoader(true);
  };
  return (
    <Link onClick={clickLoader} to={`/specialities/${speciality_id}`}>
      <div className="flex items-center hover:bg-blue-200 scale-100 hover:scale-105  ease-in-out duration-200 gap-4 border-teal-500 border-2 rounded-xl p-2">
        <img src={img} alt="" srcset="" />
        <h2 className="text-blue-900 font-semibold text-lg">{speciality}</h2>
        <div className="flex justify-center">
          {loader ? (
            <div class="flex flex-col">
              <div
                class="w-8 h-8 rounded-full animate-spin
                        border-4 border-solid border-blue-900 border-t-transparent shadow-md"
              ></div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Link>
  );
};

export default OurSeciality;
