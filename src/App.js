import "./App.css";
import city_01 from "./assets/city-01.jpg";
import city_02 from "./assets/city-02.jpg";
import city_03 from "./assets/city-03.jpg";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import Rewards from "./pages/Rewards";
import Trips from "./pages/Trips";

const navbarLinks = [
  { url: "#", title: "Home" },
  { url: "#", title: "Trips" },
  { url: "#", title: "Rewards" },
];

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
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
}

export default App;
