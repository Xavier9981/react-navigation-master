import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Blog from "../components/Blog";
import Metrics from "../components/Metrics";
const Home = () => {
  return (
    <HomeWrap>
      <Hero/>
      <Services/>
      <Blog/>
      <Metrics/>
    </HomeWrap>
  );
};
const HomeWrap = styled.div`
  position: relative;
`;

export default Home;
