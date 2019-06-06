import React from 'react';
import { Link } from 'react-router-dom';

const GalleryListItem = (props) => (
  <div className='gallery-list__item' >
    <Link className='gallery-list__link' to={props.linkTo} >
      <h4 className='gallery-list__text' >{props.title}</h4>
      <img src={props.imgSrc} alt={props.imgAlt} />
    </Link>
  </div>
);

export default GalleryListItem;