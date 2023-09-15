import React from 'react'
import { BsExclamationLg } from "react-icons/bs";
import styled from "styled-components";
import carolImg from "../assets/Carol-img.jpg"

function Hero() {
  return (
    <HeroSection>
      <div className="heroWrap">
        <div className="heroIntro">
          <div className="introText">
            <h2>It is possible <BsExclamationLg/></h2>
            <p>We’re a Non-discriminatory, Dynamic, Visible and Accessible provider of Student Loans and Scholarships for higher education to eligible Zambians.</p>
            <p>With HELSB any eligible Zambian can get a Student Loan or Scholarship, check if you’re a beneficiary.</p>
          </div>
      
          <div className="introBtns">
            <div><a href="/student-loans">Student Loans</a></div>
            <div><a href="/student-scholarships">Scholarships</a></div>
          </div>
        </div>

        <div className="heroImg">
          <figure><img src={carolImg} alt="alt" srcset="" /></figure>
        </div>
      </div>
    </HeroSection>
  )
}

const HeroSection = styled.section`
  padding: 5rem 2.5rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  .heroWrap{
    display:flex; 
    gap: 8%;
    /*flex-wrap: wrap;*/

    .heroIntro{
      width: 400px;
      margin: auto;

      .introText{
        h2{
          font-size: 36px;
          font-weight: 900;
          color: #C11E2F;

          svg{
            fill: #17AA97;
            font-size: 27px;
            margin-inline-start: -12px;
          }

        }

        p{
          font-size: 18px;
          line-height: 1.25;
          margin-block-start: 15px;
        }
      }

      .introBtns{
        display: flex;
        gap: 2rem;
        margin-block-start: 30px;

        div{
          a{
            font-weight: 600;
            text-decoration: none;
            border-radius: 15px;
            border-width: 2px;
            border-style:solid;
            border-color: #18416d;
            padding: 0.5rem 2rem;
          }
        }

        div:nth-child(1){
          a{
            color: rgb(255,255,255);
            background-color: #18416d;
          }
        }

        div:nth-child(2){
          a{
            color: #18416d;
          }
        }
      }
    }

    .heroImg{
      width: 60%;
      display: flex;
        figure{
          width: 550px;
          height: 350px;
          margin: auto;

        img{
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      } 
    }
  }
`;

export default Hero