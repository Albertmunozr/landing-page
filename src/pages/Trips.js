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
        title={"Be an explorer!"}
        subtitle={
          "Our platform offers a wide variety of unique travel locations!"
        }
      />
      <Slider
        imageSrc={city_05}
        title={"Memories for a lifetime!"}
        subtitle={"Your dream city is only a few clicks away."}
        flipped={true}
      />
      <Slider
        imageSrc={city_06}
        title={"Memories for a lifetime!"}
        subtitle={"Your dream city is only a few clicks away."}
      />
    </div>
  );
};

export default trips;
