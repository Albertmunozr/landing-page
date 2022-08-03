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
        title={"Lorem ipsum dolor sit amet."}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor."
        }
      />
      <Slider
        imageSrc={city_03}
        title={"Lorem ipsum dolor sit amet."}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor."
        }
        flipped={true}
      />
    </div>
  );
};

export default Home;
