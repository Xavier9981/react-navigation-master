import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import styled from "styled-components";
import carol from "../assets/Carol-img.jpg";
import milner from "../assets/milner.png";

const Carousel = () => {
  return (
    <CarouselSection>
    <div> 
      <div className="main">
          <div className="content-side">
              <div className="title-section">
                  <h1>Testimony Title</h1> 
              <p className='title-section helbs'>
                      
                      <span>
                          <span>By: </span>
                              Helsb | Media
                      </span>
                      <hr className="line"/>
              </p>
              </div>
              
              
              <div className='desc'> 
                  <p>
                      lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                      ad minim veniam, quis nostrud
                  </p>
              </div>
            
            <div>
                  <a href="#" className='lien'>
                          <h3 className="txt">Read More</h3>
                          <CgArrowLongRight size={30}/>
                  </a>
                  <p>
                          <span>02 Sept 2022 </span>
                          <span> | </span>
                          <span>0 Comments </span>
                  </p>
              </div>

          </div>

          <div className="image-side">
            <img className="img-section" src={milner} />
          </div>
      </div>
  </div>
    </CarouselSection>
  );
};

const CarouselSection = styled.section`

        .main{
            margin: 1.5rem;
            display: flex;
            flex-direction: row;
            background-color: #3DCA8D;

          
          }

          .content-side{
            display:flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 20px;
            white-space: wrap;
            background-color: #3DCA8D;
            color: white;
          
          }

          .content-side h1 {
            font-family:'Roboto Slab';
          }

          .lien {

            color: white;
            display: flex;
            flex-direction: row;
            align-items: space-between; 
            justify-content: center;
            gap: 10px; 
            max-width: 100%;
            width: max-content;
            text-decoration: none;
            border: 3px solid white;
            border-radius: 10px;
            padding: 5px;
            
          }
          
          .desc{
            text-align: justify;
          }

          .txt{
            white-space: nowrap;
          }
        
          .line {
            border : 2px dashed white;
            
          }

          .title-section{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            gap: 2.5rem;
          }

        
          .helbs{
            gap: 1.5rem;
            
          }

          .image-side{
            width: 100%;
            height: 100%;
            border-radius: 10px;
            clip-path: polygon(53% 100%, 0 0, 100% 0, 100% 100%);
            
          }
          .img-section{
            height:100%;
            width: 100%;
            object-fit: cover;
          }


        `;

export default Carousel;
