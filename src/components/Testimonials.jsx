/** @format */

import React from "react";
import styled from "styled-components";
import testyImg from "../assets/grad.jpg";
import { FaAngleRight } from "react-icons/fa";

function Testimonials() {
  return (
    <TestimonialsWrap>
      <div className="testimonial">
        <h2 className="title">testimonials</h2>

        <div className="testimonials">
          <div className="testimony">
            <div className="testimony__box-1">
              <h2 className="testimony__title">Testimony Title</h2>
              <p className="testimony__poster">
                <span>By: </span>
                <span>HELSB</span>
                <span> | </span>
                <span>Media</span>
              </p>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                et, earum consectetur illo, nostrum sed ullam eveniet deserunt
                temporibus ipsa doloremque est alias. Mollitia magnam quidem
                reprehenderit eum, corrupti repudiandae?
              </p>

              <div className="date">Mon, Mar 2, 2022</div>

              <div className="btn">
                <a href="#">
                  Read More
                  <FaAngleRight />
                </a>
              </div>
            </div>
            <div className="testimony__box-2">
              <figure>
                <img src={testyImg} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </TestimonialsWrap>
  );
}

const TestimonialsWrap = styled.section`
  padding: 5rem 2.5rem;
  min-height: 50vh;
  display: flex;
  justify-content: center;

  .testimonial {
    .title {
      color: #f8760b;
      text-align: center;
      font-size: 36px;
      margin-block-start: 2.5rem;
      margin-block-end: 7.5rem;
      text-transform: uppercase;
    }

    .title::after {
      content: "";
      display: block;
      width: 6.5em;
      margin: 0.25em auto 0.65em;
      border-top-style: dashed;
      border-top-width: 0.065em;
      border-top-color: #18416d;
      opacity: 0.75;
      /*height: -1.95em;*/
    }

    .testimonials {
      position: relative;

      .testimony {
        display: flex;
        width: 100%;
        gap: 3rem;
        box-shadow: 0 0 5px #ccc;

        &__box-1 {
          width: 30rem;
          margin: auto 0;
          padding: 2rem 0 1.5rem 2.5rem;

          .testimony__title {
            font-size: 24px;
            font-weight: 900;
          }

          .testimony__title::after {
            content: "";
            display: block;
            width: 3.5em;
            margin: 0.15em 0 0.75em;
            border-top-width: 0.1em;
            border-top-style: solid;
            border-top-color: #000000;
            opacity: 0.75;
          }

          p {
            font-size: 18px;
          }

          .testimony__poster {
            font-size: 16px;
          }

          .description {
            line-height: 1.5;
            margin-block-start: 15px;
            margin-block-end: 15px;
          }

          .btn {
            margin-block-start: 25px;
            display: flex;
            a {
              display: inherit;
              text-decoration: none;
              color: #17aa97;
              border-color: #17aa97;
              border-style: solid;
              border-width: 2px;
              padding: 0.75rem 2rem;
              border-radius: 3.75rem;

              svg {
                margin: auto;
              }
            }
          }

          .date {
          }
        }

        &__box-2 {
          width: 30rem;
          margin: auto 0;
          padding: 2rem 1.5rem 1.5rem 0;

          figure {
            img {
              display: block;
              object-fit: contain;
              width: 100%;
              height: 100%;
            }
          }
        }
      }

      .testimony::before {
        content: "";
        display: block;
        width: 0.35em;
        margin: 8em 0;
        background-color: #ff9800;
        opacity: 0.75;
        position: absolute;
        top: 0;
        bottom: 0;
      }
    }

    @media screen and (max-width: 425px) {
      .testimonials {
        .testimony {
          flex-direction: column-reverse;
          gap: 3rem;

          &__box-1 {
            width: 100%;
            margin: auto;
            padding: 2rem 1.5rem;

            .testimony__title {
              font-size: 24px;
              font-weight: 900;
            }

            p {
              font-size: 18px;
            }

            .testimony__poster {
              font-size: 16px;
            }
          }

          &__box-2 {
            width: 100%;
            margin: auto;
            padding: 2rem 1.5rem;
          }
        }
      }
    }
  }
`;

export default Testimonials;
