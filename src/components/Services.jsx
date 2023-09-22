import React from "react";
/*import { BigGradientText, CenterText } from "../styles";*/
import styled from "styled-components";
import business from "../assets/icons/business.png";
import institution from "../assets/icons/institution.png";
import people from "../assets/icons/people.png";
import bground from "../assets/background.png";

const Services = () => {
  return (
    <ServicesSection>
      <div className="services">

        <div className="service">
          <div className="service__img__wrap">
            <figure>
              <img src={people} alt="People icon." />
            </figure>  
          </div>
          <div className="service__title__subtitle">
            <h2 className="title">Beneficiaries</h2>
            <p className="subtitle">Are you a beneficiary of the Student Loan Scheme?</p>
          </div>
          <div className="service__btn">
            <a href="/beneficiaries">Learn more</a>
          </div>
        </div>

        <div className="service">
          <div className="service__img__wrap">
            <figure>
              <img src={business} alt="Business building icon." />
            </figure>  
          </div>
          <div className="service__title__subtitle">
            <h2 className="title">Employers</h2>
            <p className="subtitle">Are you an Employer in Zambia?</p>
          </div>
          <div className="service__btn">
            <a href="/business">Learn more</a>
          </div>
        </div>

        <div className="service">
          <div className="service__img__wrap">
            <figure>
              <img src={institution} alt="Institution building icon." />
            </figure>  
          </div>
          <div className="service__title__subtitle">
            <h2 className="title">Institutions</h2>
            <p className="subtitle">Are you a Higher Learning Institution in Zambia?</p>
          </div>
          <div className="service__btn">
            <a href="/institutions">Learn more</a>
          </div>
        </div>
      </div>
    </ServicesSection>
  );
};

const ServicesSection = styled.section`
  display: flex;
  min-height: 50vh;
  background-image:url(${bground});
  padding: 15rem 5rem;

  .services{
    display: flex;
    margin: auto;
    gap: 3rem;

    .service{
      width: 250px;
      display: grid;
      gap: 1.5rem;

      &__img__wrap{
        display: flex;
        figure{
          margin: auto;
        }
      }
      
      &__title__subtitle{
        text-align: center;
        .title{
          /*font-size: 36px;*/
          font-weight: 900;
          color: #F8760B;
        }
        .subtitle{
          line-height: 1.25;
          font-size: 18px;
        }
      }

      &__btn{
        text-align: center;
        margin-block-start: 15px;
        a{
          font-weight: 600;
          padding: 0.75rem 2rem;
          border-color: #17AA97;
          text-decoration: none;
          color: #17AA97;
          border-radius: 2rem;
          border-style: solid;
          border-width: 2px;
        }
      }
    }
  }
`;
export default Services;
