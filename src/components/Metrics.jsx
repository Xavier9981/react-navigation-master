import React from 'react';
import styled from "styled-components";
import Employment from "../assets/svg/employment.svg";
import Scholarship from "../assets/svg/scholarship.svg";
import StudentLoan from "../assets/svg/student-loan.svg";
import Wave1 from "../assets/svg/wave-1.svg";
import Wave2 from "../assets/svg/wave-2.svg";

function Metrics() {
  return (
    <MetricsSection>
        <div className="metrics">
            <figure className="metrics__wave-top"><img src={Wave1} alt="wave1" /></figure>
            <div className="metrics__wrapper">
                <h2 className="section__title">Statistics</h2>
                <p className="section__sub-title">It is possible, ever since the establishment of HELSB which replaced the Bursaries Committee below are a couple of metrics we’ve managed to achieve.</p>
                <div className="inner__wrapper">
                    <div className="metric">
                        <figure className="metric__icon"><img src={StudentLoan} alt="Student Loan" /></figure>
                        <div className="metric__stat"><h2>205K</h2></div>
                        <div className="metric__description">Students Loans offered</div>
                    </div>

                    <div className="metric">
                        <figure className="metric__icon"><img src={Scholarship} alt="Student Loan" /></figure>
                        <div className="metric__stat"><h2>205K</h2></div>
                        <div className="metric__description">Students Loans offered</div>
                    </div>

                    <div className="metric">
                        <figure className="metric__icon"><img src={Employment} alt="Student Loan" /></figure>
                        <div className="metric__stat"><h2>205K</h2></div>
                        <div className="metric__description">Students Loans offered</div>
                    </div>
                </div>
            </div>
            <figure className="metrics__wave-bottom"><img src={Wave2} alt="wave2" /></figure>
        </div>
    </MetricsSection>
  )
}

const MetricsSection = styled.section`
    background-color: #18416d;
    color: #ffffff;
    .metrics{
        &__wave-top,
        &__wave-bottom{
            background-color: #18416d;
            img{
                background-color: #fff;
            }
        }

        &__wrapper{
            

            .section__title{
                font-size: 36px;
                text-align: center;
            }

            .section__title::after{
                content: "";
                display: block;
                width: 5.5em;
                margin: 0.25em auto 0.65em;
                border-top-style: dashed;
                border-top-width: 0.085em;
                border-top-color: #ffffff;
                opacity: 0.95;
                /*height: -1.95em;*/
            }

            .section__sub-title{
                text-align: center;
                width: 50%;
                margin: 4rem auto 0;
            }

            .inner__wrapper{
                display: flex;
                justify-content: center;
                gap: 5%;
                margin-block-start: 50px;
                margin-block-end: 50px;

                .metric{
                    &__icon{
                        display: flex;

                        img{
                            margin: auto;
                            width: 130px;
                        }
                    }

                    &__stat,&__description{
                        text-align: center;
                    }

                    &__stat{

                    }

                    &__description{
                    

                    }
                }
            }
        }
    }

`;
export default Metrics