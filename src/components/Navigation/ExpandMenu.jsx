/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const ExpandMenu = ({ route }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <SMenu>
      <MenuButton onClick={toggleMenu}>
        {route.name} {isMenuOpen ? <FaAngleDown /> : <FaAngleRight />}
      </MenuButton>
      <SubRoutesContainer isOpen={!isMenuOpen}>
        {route.subRoutes.map((subRoute) => (
          <SubRoute to={subRoute.link} key={subRoute.name}>
            {subRoute.name}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  );
};

export default ExpandMenu;
const SubRoutesContainer = styled.div`
  display: ${(props) => (props.isOpen ? "none" : "flex")};
  flex-direction: column;
  padding: 1rem;
  z-index: 10;
`;

const SMenu = styled.div`
  /*display: none;*/
`;

const MenuButton = styled.div`
  color: rgb(24, 65, 109);
  font-weight: 600;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color: rgb(24, 65, 109);
  padding: 0.5rem;
  /*font-size: 2rem;*/
`;
