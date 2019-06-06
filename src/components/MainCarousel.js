import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';
import PhotoSlide from './PhotoSlide';

const MainCarousel = () => (
  <Carousel infiniteLoop dynamicHeight width='100%' >
    <PhotoSlide 
      imgSrc='/images/main_carousel/1.jpeg'
      imgAlt='first slide'
      title='New Electronic Barn Rewards'
      link='Click to find out more!'
      linkTo='/barn-rewards'
    />
    <PhotoSlide 
      imgSrc='/images/main_carousel/2.jpg'
      imgAlt='second slide'
      title='25% off Rocking Chairs'
      link='Find out more!'
      linkTo='/product/rocking-chair'
    />
    <PhotoSlide 
      imgSrc='/images/main_carousel/3.jpeg'
      imgAlt='third slide' 
      title="We've expanded!"
      subtitle='With more than 3000 square feet of decor, we are sure to have something for everyone!'
    />
    <PhotoSlide 
      imgSrc='/images/main_carousel/4.jpeg'
      imgAlt='forth slide' 
      title='Want to see more?'  
      link='View photo gallery'
      linkTo='/gallery'
    />
    <div>
        <img src='/images/main_carousel/5.jpg' alt='fifth slide' />
        <div className='legend centered' >
            <div className='box-layout' >
                <h2 className='box-layout__title' >Vintage Collectable Sale</h2>
                <h3 className='box-layout__subtitle' >20% off all vintage trucks, cars, buses, & planes!</h3>
            </div>
        </div>
    </div>
  </Carousel>
);

export default MainCarousel;
