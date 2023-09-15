import React from 'react'
import styled from "styled-components";


import {BsFacebook} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {BiLogoInstagramAlt} from "react-icons/bi";

function Footer() {
  return (
    <FooterSection>
      <div className="footer-links">
        <div>
          <figure>
            <img src="" alt="logo" />
          </figure>
        </div>
        <div>
          <ul>
            <h2>Institution Info</h2>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Terms and conditions</a></li>
            <li><a href="#">Customer service</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <h2>Top Links</h2>
            <li><a href="#">Student Loans</a></li>
            <li><a href="#">Repay Student Loan</a></li>
            <li><a href="#">Scholarships</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <h2>Social Links</h2>
            <li><a href="#"><BsFacebook/></a></li>
            <li><a href="#"><BsTwitter/></a></li>
            <li><a href="#"><BsLinkedin/></a></li>
            <li><a href="#"><BiLogoInstagramAlt/></a></li>
          </ul>
        </div>
        <div></div>
        <div></div>
      </div>
    </FooterSection>
  )
}

const FooterSection = styled.section`
  background-color: #18416d;
  .footer-links{
    display: flex;
  }
  

`;

export default Footer