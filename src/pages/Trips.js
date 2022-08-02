import React from "react";
import Slider from "../components/Slider";

const trips = () => {
  return (
    <div>
      <Slider
        imageSrc={city_02}
        title={"Be an explorer!"}
        subtitle={
          "Our platform offers a wide variety of unique travel locations!"
        }
      />
      <Slider
        imageSrc={city_03}
        title={"Memories for a lifetime!"}
        subtitle={"Your dream city is only a few clicks away."}
        flipped={true}
      />
    </div>
  );
};

export default trips;
