import React from 'react';
import GalleryListItem from './GalleryListItem';

export default class PhotoGalleryList extends React.Component {
  render() {
    return (
      <div className='content-container' >
        <div className='page-header' >
          <h1 className='page-header__title' >Photo Galleries</h1>
        </div>
        <div className='page-content gallery-list' >
          <GalleryListItem
           linkTo='/gallery/everyday'
           title='Everyday'
           imgSrc='/images/galleries/everyday.jpeg'
           imgAlt='everyday' 
          />
          <GalleryListItem 
            linkTo='/gallery/valentines'
            title='Valentines'
            imgSrc='/images/galleries/valentines.jpg'
            imgAlt='valentines' 
          />
          <GalleryListItem 
            linkTo='/gallery/st-paddys'
            title='St Patricks'
            imgSrc='/images/galleries/st-paddys.jpeg'
            imgAlt='st-paddys' 
          />
          <GalleryListItem 
            linkTo='/gallery/easter'
            title='Easter'
            imgSrc='/images/galleries/easter.jpeg'
            imgAlt='easter'
          />
          <GalleryListItem 
            linkTo='/gallery/fairy-garden'
            title='Fairy Garden'
            imgSrc='/images/galleries/fairy-garden.jpeg'
            imgAlt='fairy-garden'
          />
          <GalleryListItem 
            linkTo='/gallery/outdoor'
            title='Outdoor'
            imgSrc='/images/galleries/outdoor.jpeg'
            imgAlt='outdoor'
          />
          <GalleryListItem 
            linkTo='/gallery/americana'
            title='Americana'
            imgSrc='/images/galleries/americana.jpeg'
            imgAlt='americana'
          />
          <GalleryListItem 
            linkTo='/gallery/halloween'
            title='Halloween'
            imgSrc='/images/galleries/halloween.jpg'
            imgAlt='halloween' 
          />
          <GalleryListItem
            linkTo='/gallery/autumn'
            title='Autumn'
            imgSrc='/images/galleries/autumn.jpeg'
            imgAlt='autumn' 
          />
          <GalleryListItem
            linkTo='/gallery/xmas'
            title='Christmas'
            imgSrc='/images/galleries/xmas.jpeg'
            imgAlt='xmas' 
          />
        </div>
      </div>
    );
  }
}
