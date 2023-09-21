import React from 'react';
import styled from "styled-components";
import Carousel from "../components/Carousel";


const Testimonial = () => {
        return (
            <TestimonialSection>
            <div className="title_wrap">
                <h3>TESTIMONIALS</h3>
            </div>
            <div className="divCarousel">
                <Carousel /> 
            </div>
            </TestimonialSection>
        )
    }
    
   const TestimonialSection = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  
    .title_wrap{
        color: #F8760B;
        font-size: 30px;
        text-decoration: #18416D dashed underline;
        text-underline-offset: 20px;
        margin-bottom: 20px;
    }
    .divCarousel{
    height: 50%;
    width: 50%;
    }


  `;



export default Testimonial;