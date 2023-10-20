/** @format */

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ExpandMenu from "./ExpandMenu";
import { IoClose } from "react-icons/io5";

const Drawer = ({ isOpen, toggleDrawer, routes }) => {
  return (
    <>
      {isOpen && <Backdrop onClick={toggleDrawer} />}
      <SDrawer isOpen={isOpen}>
        <RightNav>
          <SNavbarBrand>
            <a href="#">LOGO</a>
            <IoClose onClick={toggleDrawer} />
          </SNavbarBrand>
          <NavRoutes>
            {routes.map((route) => {
              if (route.subRoutes) {
                return <ExpandMenu route={route} key={route.name} />;
              }
              return (
                <NavRoute
                  onClick={toggleDrawer}
                  to={route.link}
                  key={route.name}
                >
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
        </RightNav>
      </SDrawer>
    </>
  );
};

export default Drawer;
const SNavbarBrand = styled.h2`
  display: flex;
  justify-content: space-between;
  font-weight: 100;
`;

const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease;
  background-color: rgba(0, 0, 0, 0.2);
`;

const SDrawer = styled.div`
  z-index: 150;
  position: absolute;
  top: 0;
  height: 100vh;
  width: inherit;
  background-color: white;
  transition: 0.3s ease;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});

  @media (max-width: 425px) {
    position: fixed;
    width: 100%;
  }
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;

const NavRoutes = styled.div`
  overflow-y: scroll;
  height: 90vh;
`;

const NavRoute = styled(Link)`
  display: flex;
  text-decoration: none;
  color: rgb(24, 65, 109);
  /*font-size: 2.5rem;*/
  padding: 0.5rem;
  font-weight: 600;
`;
