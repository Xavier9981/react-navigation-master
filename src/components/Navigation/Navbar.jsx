/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import logo from "../../assets/icons/Logo.png";
import { IoClose } from "react-icons/io5";

const Navbar = ({ toggleDrawer, routes, navbarOpen, setNavbarOpen }) => {
  [navbarOpen, setNavbarOpen] = useState(true);

  const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if (window.scrollY > 100) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
  
  return (
    <NavWrapper>
      <nav className={`${show && 'nav__blue'}`}>
        <NavContainer>
          <DrawerButton onClick={toggleDrawer}>
            <div
              className="icon-wrapper"
              onClick={() => setNavbarOpen((prev) => !prev)}
            >
              {navbarOpen ? <i className="hamburger"></i> : <IoClose />}
            </div>
          </DrawerButton>
          <SNavbarBrand>
            <a href="/">
              <img src={logo} alt="Logo" srcset="" />
            </a>
          </SNavbarBrand>
          <RightNav>
            <NavRoutes>
              {routes.map((route) => {
                if (route.subRoutes) {
                  return <Menu route={route} key={route.name} />;
                }
                return (
                  <NavRoute to={route.link} key={route.name}>
                    {route.name}
                  </NavRoute>
                );
              })}
            </NavRoutes>
          </RightNav>
        </NavContainer>
      </nav>
    </NavWrapper>
  );
};

//<LoginButton>Login</LoginButton>
export default Navbar;

const DrawerButton = styled.button`
  all: unset;
  display: none;

  .icon-wrapper {
    position: relative;

    svg {
      font-size: 30px;
      color: rgb(24, 65, 109);
    }

    .hamburger,
    .hamburger::before,
    .hamburger::after {
      background-color: rgb(24, 65, 109);
      height: 3px;
      width: 1.5em;
      border: 0;
      transition: transform 250ms ease-in-out;
    }

    .hamburger.hamburger::before,
    .hamburger::after {
      content: "";
      position: absolute;
    }

    .hamburger::before {
      top: 6px;
    }

    .hamburger::after {
      bottom: 6px;
    }
  }

  @media (max-width: 768px) {
    display: flex;

    .icon-wrapper {
      .hamburger {
        display: block;
      }
    }
  }
`;

const NavWrapper = styled.div`
  nav{
    background-color: #ffffff;
    position: fixed;
    top: 0;
    z-index: 9999;
  }

  .nav{
    height:30px;
    width: 100%;
    position:fixed;
    top:0;
    transition-timing-function: ease-in;
    transition:0.5s
  }

  .nav__blue{
    background-color:blue;
  }
`;

const NavContainer = styled.div`
  padding: 1rem;
  height: 70px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #18416d;
`;
const SNavbarBrand = styled.h2`
  /*font-size: 3rem;*/
  width: 150px;
  a {
    img {
      display: block;
      width: 100%;
    }
  }
`;

const RightNav = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavRoutes = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  /*font-size: 2rem;*/
  align-items: center;
`;

const NavRoute = styled(Link)`
  text-decoration: none;
  color: #18416d;
  padding: 0.5rem;
  transition: 0.5s ease;

  &:hover {
    transition: 0.5s ease;
    color: #fd7e14;
    background-color: white;
    box-shadow: 0px 0px 10px white;
  }
`;
