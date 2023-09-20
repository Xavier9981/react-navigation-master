import React from "react";
import styled from "styled-components";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
const Home = () => {
  return (
    <HomeWrap>
      <Hero/>
      <Services/>
      <Blog/>
      <Metrics/>
      <Testimonial/>
      <Footer/>
    </HomeWrap>
  );
};
const HomeWrap = styled.div`
  position: relative;
`;

export default Home;
