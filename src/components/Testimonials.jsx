import React from 'react';
import styled from "styled-components";

function Testimonials() {
  return (
    <TestimonialsWrap>
      <div className="testimonial">
        <h2 className="title">testimonial</h2>

        <div className="testimonials">
          <div className="testimony">
            <div className="testimony__box-1">
              <h2 className="testimony__title">Testimony Title</h2>
              <p className="testimony__poster">
                <span>By:</span>
                <span>HELSB</span>
                <span>|</span>
                <span>Media</span>
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et, earum consectetur illo, nostrum sed ullam eveniet deserunt temporibus ipsa doloremque est alias. Mollitia magnam quidem reprehenderit eum, corrupti repudiandae?</p>

              <div className="btn"><a href="#">Read More</a></div>

              <div className="date">Mon, Mar 2, 2022</div>
            </div>
            <div className="testimony__box-2"><figure><img src="" alt="" /></figure></div>
          </div>
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