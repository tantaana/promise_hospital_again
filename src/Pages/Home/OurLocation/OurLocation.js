import React from "react";
import "./OurLocation.css";
import img1 from "../../../image/location1.png";
import img2 from "../../../image/location2.png";
import img3 from "../../../image/location3.png";
import img4 from "../../../image/location4.png";
import img5 from "../../../image/location5.png";
import img6 from "../../../image/location6.png";

const OurLocation = () => {
  const locations = [
    {
      id: 1,
      area: "Old Airport Road",
      city: "Dhaka",
      name: "Promise Hospital Dhaka",
      img: img1,
    },
    {
      id: 2,
      area: "Mehedibag",
      city: "Chittagong",
      name: "Promise Hospital Chittagong",
      img: img2,
    },
    {
      id: 3,
      area: "Kutumbari",
      city: "Rajshahi",
      name: "Promise Hospital Rajshahi",
      img: img3,
    },
    {
      id: 4,
      area: "Netrokuna",
      city: "Khulna",
      name: "Promise Hospital Khulna",
      img: img4,
    },
    {
      id: 5,
      area: "Durgapur",
      city: "Barisal",
      name: "Promise Hospital Barisal",
      img: img5,
    },
    {
      id: 6,
      area: "Sreemongol",
      city: "Sylhet",
      name: "Promise Hospital Sylhet",
      img: img6,
    },
  ];
  return (
    <div className="locationBG">
      <div className="py-14 px-8">
        <h2 className="text-3xl text-white font-bold text-center mb-16">
          Our Location
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {locations.map((location) => (
            <div className="card card-side bg-base-100 shadow-xl duration-300 ease-in-out hover:scale-105 hover:bg-blue-500 hover:text-white">
              <figure>
                <img src={location.img} alt="Movie" className="w-64 h-64" />
              </figure>
              <div className="card-body p-3">
                <h2 className="card-title">{location.area}</h2>
                <p>{location.city}</p>
                <p className="text-base font-semibold">{location.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
