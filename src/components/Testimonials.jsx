import React from 'react';
import styled from "styled-components";

function Testimonials() {
  return (
    <TestimonialsWrap>
      <div className="testimonial">
        <h2 className="title">testimonial</h2>

        <div className="testimonials">
          <div className="testimony"></div>
        </div>
      </div>
    </TestimonialsWrap>
  )
}

const TestimonialsWrap = styled.section`
  padding: 5rem 2.5rem;
  min-height: 50vh;
  display: flex;
  justify-content: center;

  .testimonial{
    .title{
      color: #F8760B;
      text-align: center;
      font-size: 36px;
      margin-block-start: 2.5rem;
      margin-block-end: 7.5rem;
      text-transform: uppercase;
    }

   .title::after{
      content: "";
      display: block;
      width: 6.5em;
      margin: 0.25em auto 0.65em;
      border-top-style: dashed;
      border-top-width: 0.065em;
      border-top-color: #18416D;
      opacity: 0.75;
      /*height: -1.95em;*/
    }
  }

`;

export default Testimonials