import React from 'react'
import styled from "styled-components";


import {BsFacebook} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {BiLogoInstagramAlt} from "react-icons/bi";
import logo from "../assets/icons/Logo.png"

function Footer() {
  return (
    <FooterSection>
      <div className="footer-links">
        <div>
          <a href="/">
            <figure>
              <img src={logo} alt="Logo" srcset="" />
            </figure>
          </a>
        </div>
        <div className="wrap-footer-links">
          <div>
            <h2>Institution Info</h2>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Terms and conditions</a></li>
              <li><a href="#">Customer service</a></li>
            </ul>
          </div>
          <div>
            <h2>Top Links</h2>
            <ul>
              <li><a href="#">Student Loans</a></li>
              <li><a href="#">Repay Student Loan</a></li>
              <li><a href="#">Scholarships</a></li>
            </ul>
          </div>
          <div>
            <h2>Social Links</h2>
            <ul>
              <li><a href="#"><BsFacebook/></a></li>
              <li><a href="#"><BsTwitter/></a></li>
              <li><a href="#"><BsLinkedin/></a></li>
              <li><a href="#"><BiLogoInstagramAlt/></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright HELSB-ICT @ 2023 | All rights reserved</p>
        <p><a href="#">Privacy policy</a></p>
      </div>
    </FooterSection>
  )
}

const FooterSection = styled.section`
  background-color: #18416d;
  padding: 5rem 4rem;


  .footer-links{
    display: flex;
    color: #fff;
    justify-content: center;
    gap: 15%;

    div:nth-child(1) figure{
      background-color: #fff;
      border-top-right-radius: 4rem;
      border-bottom-left-radius: 4rem;
      display: flex;
      padding: 0.5rem 2rem;

      a{
        margin: auto;
      }
    }

    .wrap-footer-links {
      display: flex;
      gap: 5rem;

      div{
        h2{
          margin-inline-start: -20px;
        }
        ul{
          li{
            margin-block-start: 10px;
            a{
              color: #fff;
              text-decoration: none;
            }
          }
        }
      }

      div:nth-child(3){
        ul{
          display: flex;
          gap: 3rem;
          list-style-type: none;
          li{

            a{
              color: #fff;
              text-decoration: none;
              svg{
                font-size: 24px;
              }
            }
          }
        }
      }
    }
  }

  .footer-bottom{
    border-top: 1px solid #6c757d;
    display: flex;
    justify-content: space-between;
    color: #fff;
    padding-top: 10px;
  }
  

`;

export default Footer