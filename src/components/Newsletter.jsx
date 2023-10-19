import React from 'react';
import styled from "styled-components";

function Newsletter() {
  return (
    <NewsletterWrap>
        <div className="newsletter">
         <h2 className="newsletter__title">Subscribe to our weekly newsletter</h2>
         <p className="newsletter__sub-title">Sign up for our newsletter below and be the first to know of the new Student loans, Scholarships, and Career opportunities.</p>
         
        <form action="" method="get" className="newsletter__form">
          <input type="email" name="email" id="email" placeholder="Enter your email address here..."/>
          <input type="submit" value="Sign up" />
         </form>
         
         
        </div>
    </NewsletterWrap>
  )
}

const NewsletterWrap = styled.section`
  padding-inline: 2.5rem;
  padding-block: 5rem;
  min-height: 20vh;
  display: flex;
  justify-content: center;

  .newsletter{
    &__title,&__sub-title{
      text-align: center;
      width: 50%;
      margin: 2.5rem auto; 
    }

    &__title{
      font-size: 36px;
      /*font-weight: 900;*/
      text-transform: uppercase;
    }

    &__sub-title{
      font-size: 18px;
    }

    
    &__form{
      display: flex;
      justify-content: center;
      gap: 2rem;

      input[type=email],input[type=submit] {
        border-radius: 2rem;
      }

      input[type=email]{
        background-color: white;
        /*background-image: url('searchicon.png');*/
        background-position: 10px 10px;
        background-repeat: no-repeat;
        padding-left: 40px;
        width: 50%;
        border-color: #18416d;
        border-style: solid;
      }

      input[type=submit] {
        background-color: #18416d;
        color: white;
        padding: 12px 20px;
        border: none;
        cursor: pointer;
        float: right;
        font-weight: 600;
      }
    }
  }

  @media screen and (max-width: 425px) {
    padding-inline-start: 2rem;
    padding-inline-end: 2rem;

    .newsletter{
        &__title,&__sub-title{
          width: 100%;
          margin: 2.5rem auto; 
        }

        &__title{
          font-size: 36px;
        }

        &__sub-title{
          font-size: 18px;
        }

        
        &__form{
          flex-direction: column;
          gap: 0.5rem;

          input[type=email],input[type=submit] {
            border-radius: 2rem;
          }

          input[type=email]{
            background-color: white;
            /*background-image: url('searchicon.png');*/
            background-position: 10px 10px;
            background-repeat: no-repeat;
            padding-left: 40px;
            height: 39px;
            width: 100%;
            border-color: #18416d;
            border-style: solid;
          }

          input[type=submit] {
            background-color: #18416d;
            color: white;
            padding: 12px 20px;
            border: none;
            cursor: pointer;
            float: right;
            font-weight: 600;
          }
        }
      }
      
  }

`;

export default Newsletter