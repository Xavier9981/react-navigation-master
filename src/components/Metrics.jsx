/** @format */

import React from "react";
import styled from "styled-components";
import StudentLoan from "../assets/svg/student-loan.svg";
import Scholarship from "../assets/svg/scholarship.svg";
import Employment from "../assets/svg/employment.svg";
/*<!--<figure className="metrics__wave-top"><img src={Wave1} alt="wave1" /></figure>-->*/
function Metrics() {
  return (
    <MetricsSection>
      <div className="metrics">
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

        <div className="metrics__wrapper">
          <div className="inner__wrapper-content">
            <h2 className="section__title">Statistics</h2>
            <p className="section__sub-title">
              It is possible, ever since the establishment of HELSB which
              replaced the Bursaries Committee below are a couple of metrics
              we’ve managed to achieve.
            </p>
            <div className="inner__wrapper">
              <div className="metric">
                <figure className="metric__icon">
                  <img src={StudentLoan} alt="Student Loan" />
                </figure>
                <div className="metric__stat">
                  <h2>205K</h2>
                </div>
                <div className="metric__description">
                  <p>Students Loans offered</p>
                </div>
              </div>

              <div className="metric">
                <figure className="metric__icon">
                  <img src={Scholarship} alt="Student Loan" />
                </figure>
                <div className="metric__stat">
                  <h2>10K</h2>
                </div>
                <div className="metric__description">
                  <p>Scholarships offered</p>
                </div>
              </div>

              <div className="metric">
                <figure className="metric__icon">
                  <img src={Employment} alt="Student Loan" />
                </figure>
                <div className="metric__stat">
                  <h2>100K</h2>
                </div>
                <div className="metric__description">
                  <p>Previous Beneficiaries Currently under Employment</p>
                </div>
              </div>
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
    </MetricsSection>
  );
}

const MetricsSection = styled.section`
  background-color: #18416d;
  color: #ffffff;

  .metrics {
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
      height: 150px;
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
      height: 104px;
      transform: rotateY(180deg);
    }

    .custom-shape-divider-bottom-1695377409 .shape-fill {
      fill: #ffffff;
    }

    &__wrapper {
      /*margin-top: 155px;*/

      .inner__wrapper-content {
        height: 100%;

        .section__title {
          font-size: 36px;
          text-align: center;
          text-transform: uppercase;
        }

        .section__title::after {
          content: "";
          display: block;
          width: 5.2em;
          margin: 0.25em auto 0.65em;
          border-top-style: dashed;
          border-top-width: 0.065em;
          border-top-color: #ffffff;
          opacity: 0.75;
          /*height: -1.95em;*/
        }

        .section__sub-title {
          font-size: 18px;
          text-align: center;
          width: 50%;
          margin: 4rem auto 0;
        }

        .inner__wrapper {
          display: flex;
          justify-content: center;
          gap: 10%;
          margin-block-start: 50px;
          margin-block-end: 50px;

          .metric {
            width: 14rem;
            display: flex;
            flex-direction: column;
            /*gap: 1.5rem;*/

            &__icon {
              display: flex;

              img {
                margin: auto;
                width: 100px;
              }
            }

            &__stat,
            &__description {
              text-align: center;
            }

            &__stat {
              h2 {
                font-weight: 900;
                font-size: 36px;
                margin-block-start: 0.85em;
              }

              h2::after {
                content: "";
                display: block;
                width: 1.5rem;
                margin: 0.25em auto 0.25em;
                border-top-style: solid;
                border-top-width: 0.065em;
                border-top-color: #ffffff;
                opacity: 0.75;
                /*height: -1.95em;*/
              }
              /*h2::before{
                                content: "";
                                display: block;
                                width: 0.75rem;
                                margin: 0.25em auto 0.65em;
                                border-top-style: dashed;
                                border-top-width: 0.065em;
                                border-top-color: #ffffff;
                                opacity: 0.75;
                                height: -1.95em;
                            }*/
            }

            &__description {
              p {
                line-height: 1.25;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    .metrics {
      /*bottom wave separator*/
      .custom-shape-divider-bottom-1695377409 {
        position: relative; /**/
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
        height: 104px;
        transform: rotateY(180deg);
      }

      .custom-shape-divider-bottom-1695377409 .shape-fill {
        fill: #ffffff;
      }
      /*display: none;*/
      &__wrapper {
        .inner__wrapper-content {
          height: 100%;

          .section__sub-title {
            font-size: 18px;
            text-align: center;
            width: 100%;
            margin: 4rem auto 0;
          }
          .inner__wrapper {
            flex-direction: column;
            gap: 5rem;

            .metric {
              margin: auto;
              width: 18rem;
              display: flex;
              flex-direction: column;
              gap: 1.5rem;

              &__icon {
                display: flex;

                img {
                  margin: auto;
                  width: 130px;
                }
              }

              &__stat,
              &__description {
                text-align: center;
              }

              &__stat {
                h2 {
                  font-weight: 900;
                  font-size: 36px;
                }

                h2::after {
                  content: "";
                  display: block;
                  width: 0.75rem;
                  margin: 0.25em auto 0.65em;
                  border-top-style: dashed;
                  border-top-width: 0.065em;
                  border-top-color: #ffffff;
                  opacity: 0.75;
                  /*height: -1.95em;*/
                }
                /*h2::before{
                                content: "";
                                display: block;
                                width: 0.75rem;
                                margin: 0.25em auto 0.65em;
                                border-top-style: dashed;
                                border-top-width: 0.065em;
                                border-top-color: #ffffff;
                                opacity: 0.75;
                                height: -1.95em;
                            }*/
              }

              &__description {
                p {
                  line-height: 1.25;
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default Metrics;
