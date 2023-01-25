import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider.jsx";
import Footer from "../components/Footer";
import Card from "../components/Card.jsx";
import TextArea from "../components/TextArea";
import HomeBox from "../components/HomeBox";
const HomePage = () => {
  return(
      <div>
          <Navbar/>
          <Slider/>
          <HomeBox/>
          <TextArea/>
          <Card/>
          <Footer/>

      </div>
  )
}
export default HomePage;