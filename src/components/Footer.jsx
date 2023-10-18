/** @format */

import React from "react";
import styled from "styled-components";

import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaRegCopyright } from "react-icons/fa";
import logo from "../assets/icons/Logo.png";

function Footer() {
  return (
    <FooterSection>
      <div className="footer-links">
        <div className="wrap-logo">
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
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Terms and conditions</a>
              </li>
              <li>
                <a href="#">Customer service</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Top Links</h2>
            <ul>
              <li>
                <a href="#">Student Loans</a>
              </li>
              <li>
                <a href="#">Repay Student Loan</a>
              </li>
              <li>
                <a href="#">Scholarships</a>
              </li>
              <li>
                <a href="https://student.helsb.gov.zm" target="_blank">
                  Student Web
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Social Links</h2>
            <ul>
              <li>
                <a href="#">
                  <BsFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <BiLogoInstagramAlt />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright <a href="/">HELSB</a>{" "}
          <span className="copyright-icon">&copy;</span> 2023 | All rights
          reserved
        </p>
        <p>
          <a href="#">Privacy policy</a>
        </p>
      </div>
    </FooterSection>
  );
}

const FooterSection = styled.section`
  background-color: #18416d;
  padding-inline-start: 5rem;
  padding-inline-end: 5rem;
  padding-block-start: 4rem;

  .footer-links {
    display: flex;
    color: #fff;
    justify-content: center;
    gap: 20%;

    .wrap-logo {
      display: flex;
      a {
        margin: auto;

        figure {
          background-color: #fff;
          border-top-right-radius: 4rem;
          border-bottom-left-radius: 4rem;
          padding: 0.5rem 2rem;
        }
      }
    }

    .wrap-footer-links {
      display: flex;
      gap: 7.5rem;

      div {
        h2 {
          /*margin-inline-start: -20px;*/
        }

        h2::after {
          content: "";
          display: block;
          width: 3.5em;
          margin: 0.15em 0 0.75em;
          border-top-width: 0.1em;
          border-top-style: solid;
          border-top-color: #ff9800;
          opacity: 0.75;
        }

        ul {
          list-style-type: none;
          /*padding-inline-start: 40px;*/
          li {
            margin-block-start: 15px;
            a {
              color: #fff;
              text-decoration: none;
            }
          }
        }
      }

      div:nth-child(3) {
        ul {
          display: flex;
          gap: 3rem;

          li {
            a {
              color: #fff;
              text-decoration: none;
              svg {
                font-size: 24px;
              }
            }
          }
        }
      }
    }
  }

  .footer-bottom {
    border-top-width: 1px;
    border-top-color: #6c757d40;
    border-top-style: solid;
    display: flex;
    justify-content: space-between;
    color: #fff;
    margin-block-start: 3.5rem;
    padding-block-start: 1.5rem;
    padding-block-end: 1.5rem;
    p {
      font-size: 14px;

      .copyright-icon {
        svg {
          font-size: inherit;
        }
      }
      a {
        color: #fff;
      }
    }
  }
`;

export default Footer;
