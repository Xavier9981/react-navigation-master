/** @format */

import React from "react";
import styled from "styled-components";
import aahefaLogo from "../assets/partners-icons/aahefa-logo.png";
import napsaLogo from "../assets/partners-icons/napsa-logo.png";
import zraLogo from "../assets/partners-icons/zra-logo.png";

function Partners() {
  return (
    <PartnersWrap>
      <div className="partners">
        <div class="custom-shape-divider-top-1695375677">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="partners__wrap-content">
          <h2 className="partners__title">Our Partners</h2>
          <div className="partners__wrap">
            <div className="partner">
              <a target="_blank" href="https://www.aahefa.org/">
                <figure>
                  <img
                    src={aahefaLogo}
                    alt="Association of African Higher Education Financing Agencies"
                  />
                </figure>
              </a>
            </div>
            <div className="partner">
              <a target="_blank" href="https://www.napsa.co.zm/">
                <figure>
                  <img
                    src={napsaLogo}
                    alt="National Pension Scheme Authority"
                  />
                </figure>
              </a>
            </div>
            <div className="partner">
              <a target="_blank" href="https://www.zra.org.zm/">
                <figure>
                  <img src={zraLogo} alt="Zambia Revenue Authority" />
                </figure>
              </a>
            </div>
          </div>
        </div>

        <div class="custom-shape-divider-bottom-1695377409">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </PartnersWrap>
  );
}

const PartnersWrap = styled.section`
  //padding: 5rem 2.5rem;
  //display: flex;
  //justify-content: center;

  background-color: #e3eaf0;

  .partners__title {
    font-size: 36px;
    text-align: center;
    text-transform: uppercase;
    color: #18416d;
  }

  .partners {
    position: relative;
    /*top wave opacity separator*/
    .custom-shape-divider-top-1695375677 {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
    }

    .custom-shape-divider-top-1695375677 svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 85px;
    }

    .custom-shape-divider-top-1695375677 .shape-fill {
      fill: #ffffff;
    }

    /*bottom wave separator*/
    .custom-shape-divider-bottom-1695377409 {
      position: relative;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      transform: rotate(180deg);
    }

    .custom-shape-divider-bottom-1695377409 svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 85px;
      transform: rotateY(180deg);
    }

    .custom-shape-divider-bottom-1695377409 .shape-fill {
      fill: #ffffff;
    }

    .partners__wrap-content {
      min-height: 100%;
      padding-inline: 0.5rem; 
      padding-block: 2rem 0;

      .partners__title::after {
        content: "";
        display: block;
        width: 3.5em;
        margin: 0.25em auto 0.65em;
        border-top-width: 0.065em;
        border-top-style: dashed;
        border-top-color: #18416d;
        opacity: 0.75;
      }

      .partners__wrap {
        display: flex;
        justify-content: center;
        gap: 5%;
        padding-block-start: 2rem;
        padding-block-end: 2rem;

        .partner {
          margin: auto 0;

          a {
            figure {
              width: 125px;
              height: 100%;

              img {
                display: block;
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 425px) {
    .partners {
      position: relative;
      /*top wave opacity separator*/
      .custom-shape-divider-top-1695375677 svg {
        height: 85px;
      }

      /*bottom wave separator*/
      .custom-shape-divider-bottom-1695377409 svg {
        height: 85px;
      }

      .partners__wrap-content {
        min-height: 100%;

        .partners__wrap {
          flex-direction: column;
          gap: 3rem;

          .partner {
            margin-inline: auto;
          }
        }
      }
    }
  }
`;

export default Partners;
