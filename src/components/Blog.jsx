import React from 'react';
import { LuAsterisk } from "react-icons/lu";
import { RiArrowRightFill } from "react-icons/ri";
import styled from "styled-components";
import placeholder from "../assets/icons/img_placeholder.png";

function Blog() {
  return (
    <BlogSection>
     <div className="section__title">
        <h2>What's new?</h2>
    </div>
     <div className="blogs">
        <div className="blogs__blog">
            <div className="blog__img-wrap">
                <figure>
                    <img src={placeholder} alt="Blog image" />
                </figure>
            </div>
            <div className="blog__headline-wrap">
                <h2 className="blog__title">Post Title</h2>
                <p className="blog__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo et voluptates, natus non optio velit dolorum repudiandae excepturi quidem illo error qui nemo sit provident dolorem recusandae nobis, eius tenetur.</p>
                <a href="" className="blog__btn">Read more <RiArrowRightFill/></a>
            </div>
        </div>

        <div className="blogs__blog">
            <div className="blog__img-wrap">
                <figure>
                    <img src={placeholder} alt="Blog image" />
                </figure>
            </div>
            <div className="blog__headline-wrap">
                <h2 className="blog__title">Post Title</h2>
                <p className="blog__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo et voluptates, natus non optio velit dolorum repudiandae excepturi quidem illo error qui nemo sit provident dolorem recusandae nobis, eius tenetur.</p>
                <a href="" className="blog__btn">Read more <RiArrowRightFill/></a>
            </div>
        </div>
     </div>

     <div className="see__all"><a href="/all blogs"> <LuAsterisk/><LuAsterisk/>See More<LuAsterisk/><LuAsterisk/></a></div>
       
    </BlogSection>
  )
}
 const BlogSection = styled.section`
    min-height: 100vh;
    padding: 2.5rem 4rem;
    
    
    .section__title{
        color: #F8760B;
        text-align: center;
        font-size: 30px;
        margin-block-start: 2.5rem;
        margin-block-end: 7.5rem;
    }

   .section__title::after{
        content: "";
        display: block;
        width: 9em;
        margin: 0.25em auto 0.65em;
        border-top-style: dashed;
        border-top-width: 0.085em;
        border-top-color: #18416D;
        opacity: 0.95;
        /*height: -1.95em;*/
    }

    .blogs{
        display: grid;
        gap: 10rem;

        &__blog{
            display: flex;
            justify-content: center;
            gap: 9.5rem;

            .blog__img-wrap{
                width: 300px;
                display: flex;

                figure{
                    margin: auto;
                    img{
                        display: block;
                        object-fit: contain;
                        width: 100%;
                        height: 100%;
                    }
                }
            }

            .blog__headline-wrap{
                width: 350px;
                display: flex;
                flex-direction: column;
                gap: 2rem;

                .blog__title{
                    color: #18416D;
                }

                .blog__description{
                    line-height: 1.25;
                    font-size: 18px;
                }

                .blog__btn{
                    padding: 0.45rem 2rem;
                    color: #ffffff;
                    text-decoration: none;
                    background-color: #17AA97;
                    border-color: #17AA97;
                    border-radius: 15px;
                    border-style: solid;
                    border-width: 2px;
                    width: fit-content;
                    display: flex;
                    gap: 0.5rem;
                }

            }
        }

        &__blog:nth-child(2){
            flex-direction: row-reverse;
        }
    }

    .see__all{
        display: flex;
        padding-block-start: 50px;

        a{
            display: flex;
            margin: auto;
            text-decoration: none;
            padding: 0.45rem 2rem;
            background-color: #F8760B;
            color: #ffffff;
            border-radius: 15px;
        }
    }
 `;

export default Blog