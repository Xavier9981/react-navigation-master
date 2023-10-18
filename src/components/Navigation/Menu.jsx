/** @format */

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
const Menu = ({ route }) => {
  return (
    <SMenu>
      <MenuButton>
        {route.name}
        <IoIosArrowDown />
      </MenuButton>
      <SubRoutesContainer>
        {route.subRoutes.map((subRoute) => (
          <SubRoute to={subRoute.link} key={subRoute.name}>
            {subRoute.name}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  );
};

export default Menu;
const SubRoutesContainer = styled.div`
  position: absolute;
  min-width: 100%;
  display: none;
  flex-direction: column;
  box-shadow: 0 8px 16px 0px rgba(0, 0, 0, 0.2);
  background-color: rgb(255, 255, 255);
  padding-inline: 0.5rem;
  /*padding-block-start: 1.35rem;*/
  left: -1rem;
  /*visibility: visible;*/
  opacity: 0;
  border-radius: 0 0 1rem 1rem;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
  word-break: keep-all;

  /**/
  ::after {
    position: relative;
    content: "";
    height: 2rem;
    width: 2rem;
  }
`;

const SMenu = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${SubRoutesContainer} {
    /*visibility: visible; */
    display: flex;
    opacity: 1;
    cursor: pointer;
  }
`;

const MenuButton = styled.div`
  padding: 0 0.5rem;

  svg {
    /*font-size: 1.75rem;*/
    margin-inline-start: 0.35rem;
  }

  &:hover {
    transition: 0.5s ease;
    color: #fd7e14;
    background-color: white;
    box-shadow: 0px 0px 10px white;
  }
`;

const SubRoute = styled(Link)`
  display: list-item;
  list-style-position: inside;
  list-style-type: circle;
  text-decoration: none;
  /* word-break: keep-all; 
  text-decoration: none;
  width:100%;
  color: #18416d;
  padding: 0 1rem;
  border-radius: 0.5rem;
  transition: 0.3s ease-in;*/
  white-space: nowrap;
  width: 100%;
  color: #18416d;
  padding: 0.5rem 1rem 0.5rem 1rem;
  transition: all 0.3s ease-in 0s;

  &:hover {
    transition: 0.3s ease-in;
    color: #fd7e14;
    /*background-color: #d0a7fc;*/
  }
`;
