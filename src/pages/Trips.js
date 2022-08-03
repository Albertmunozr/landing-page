import React from "react";
import city_04 from "../assets/city-04.jpg";
import city_05 from "../assets/city-05.jpg";
import city_06 from "../assets/city-06.jpg";
import Slider from "../components/Slider";

const trips = () => {
  return (
    <div className="trips">
      <Slider
        imageSrc={city_04}
        title={"Lorem ipsum dolor sit amet."}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor."
        }
      />
      <Slider
        imageSrc={city_05}
        title={"Lorem ipsum dolor sit amet."}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor."
        }
        flipped={true}
      />
      <Slider
        imageSrc={city_06}
        title={"Lorem ipsum dolor sit amet."}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor."
        }
      />
    </div>
  );
};

export default trips;
