import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Blog from "../components/Blog";
import Metrics from "../components/Metrics";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <HomeWrap>
      <Hero/>
      <Services/>
      <Blog/>
      <Metrics/>
      <Testimonials/>
      <Partners/>
      <Newsletter/>
      <Footer/>
    </HomeWrap>
  );
};

const HomeWrap = styled.main`
  /*position: relative;*/
`;

export default Home;
