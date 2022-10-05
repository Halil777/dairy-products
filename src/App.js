import React from "react";
import Footer from "./components/footer/Footer";
import ImgSlider from "./components/imgSlider/ImgSlider";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import Service from "./pages/service/Service";
import VideoPage from "./pages/video/VideoPage";

function App() {
  return (
    <div style={{ background: "#EAEEFF" }}>
      <React.Fragment key={"right"} className="App" id={"App"}>
        <Navbar />
        <ImgSlider />
        <Service />
        <Products />
        <About />
        <VideoPage />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
