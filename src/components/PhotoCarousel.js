import React from 'react';

import PhotoSlide from './PhotoSlide';

const PhotoCarousel = () => (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            <li data-target="#carouselExampleIndicators" data-slide-to="3" />
            <li data-target="#carouselExampleIndicators" data-slide-to="4" />
        </ol>
        <div className="carousel-inner">
            <PhotoSlide 
                imgSrc='/images/main_carousel/1.jpeg'
                imgAlt='second slide' 
                title="New Electronic Barn Rewards"
                link='Click to find out more!'
                linkTo='/barn-rewards'
                classes='carousel-item photo-carousel active'
            />
            <PhotoSlide 
                imgSrc='/images/main_carousel/2.jpg'
                imgAlt='first slide' 
                title='25% off Rocking Chairs'
                link='Find out more!'
                linkTo='/product/rocking-chair'
                classes='carousel-item photo-carousel'
            />
            <PhotoSlide 
                imgSrc='/images/main_carousel/3.jpeg'
                imgAlt='third slide' 
                title="We've expanded!"
                subtitle='With more than 3000 square feet of decor, we are sure to have something for everyone!'
                classes='carousel-item photo-carousel'
            />
            <PhotoSlide 
                imgSrc='/images/main_carousel/4.jpeg'
                imgAlt='forth slide' 
                title='Want to see more?'
                link='View photo gallery'
                linkTo='/gallery'
                classes='carousel-item photo-carousel'
            />
            <PhotoSlide 
                imgSrc='/images/main_carousel/5.jpg'
                imgAlt='fifth slide' 
                title='Vintage Collectable Sale'
                subtitle='20% off all vintage trucks, cars, buses, & planes!'
                classes='carousel-item photo-carousel'
            />
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="sr-only">Next</span>
        </a>
    </div>
);

export default PhotoCarousel;
