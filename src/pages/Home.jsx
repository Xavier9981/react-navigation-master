import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Blog from "../components/Blog";
import Metrics from "../components/Metrics";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <HomeWrap>
      <Hero/>
      <Services/>
      <Blog/>
      <Metrics/>
      <Footer/>
    </HomeWrap>
  );
};
const HomeWrap = styled.div`
  position: relative;
`;

export default Home;
