import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rewards from "./pages/Rewards";
import Trips from "./pages/Trips";
import Error404 from "./pages/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const navbarLinks = [
  { url: "/", title: "Home" },
  { url: "/trips", title: "Trips" },
  { url: "/rewards", title: "Rewards" },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar navbarLinks={navbarLinks} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
