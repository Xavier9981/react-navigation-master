import React from 'react';
import styled from "styled-components";
import aahefaLogo from "../assets/partners-icons/aahefa-logo.png";
import napsaLogo from "../assets/partners-icons/napsa-logo.png";
import zraLogo from "../assets/partners-icons/zra-logo.png";

function Partners() {
  return (
    <PartnersWrap>
      <div className="partners">
        <h2 className="partners__title">Our Partners</h2>
        <div className="partners__wrap">
          <div className="partner">
            <a href="#">
              <figure>
                <img src={aahefaLogo} alt="partner" />
              </figure>
            </a>
          </div>
          <div className="partner">
            <a href="#">
              <figure>
                <img src={napsaLogo} alt="partner" />
              </figure>
            </a>
          </div>
          <div className="partner">
            <a href="#">
              <figure>
                <img src={zraLogo} alt="partner" />
              </figure>
            </a>
          </div>
        </div>
      </div>
    </PartnersWrap>
  )
}

const PartnersWrap = styled.section`
  padding: 5rem 2.5rem;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  background-color: #e3eaf0;

  .partners{
    .partners__title{
      font-size: 36px;
      text-align: center;
      text-transform: uppercase;
      color: #18416d;
    }

    .partners__title::after{
      content: "";
      display: block;
      width: 5.5em;
      margin: 0.25em auto 0.65em;
      border-top-style: dashed;
      border-top-width: 0.085em;
      border-top-color: #18416d;
      opacity: 0.95;
      /*height: -1.95em;*/
    }

    &__wrap{
      display: flex;
      gap: 5rem;
      padding-block-start: 2rem;
      padding-block-end: 2rem;

      .partner{
        margin: auto;

        a{
          figure{
            width: 125px;
            height: 100%;

            img{
              display: block;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
`;

export default Partners