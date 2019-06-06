import React from 'react';
import { Link } from 'react-router-dom';

const PhotoSlide = (props) => (
    <div>
        <img src={props.imgSrc} alt={props.imgAlt} />
        <div className='legend centered' >
            <div className='box-layout' >
                <h2 className='box-layout__title' >{props.title}</h2>
                { props.link ? 
                    <Link className='button' to={props.linkTo} >
                        {props.link}
                    </Link>
                : null }
                { props.subtitle ?
                    <h3 className='box-layout__subtitle' >
                        {props.subtitle}
                    </h3>
                : null}
            </div>
        </div>
    </div>
);

export default PhotoSlide;
