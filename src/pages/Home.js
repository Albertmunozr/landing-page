import React from "react";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import city_01 from "../assets/city-01.jpg";
import city_02 from "../assets/city-02.jpg";
import city_03 from "../assets/city-03.jpg";

const Home = () => {
  return (
    <div>
      <Hero imageSrc={city_01} />
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

export default Home;
