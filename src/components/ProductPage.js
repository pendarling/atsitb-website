import React from 'react';

const ProductPage = (props) => (
  <div className='content-container' >
      <div className='page-header' >
          <h1 className='page-header__title' >Product Spotlight</h1>
      </div>
      <div className='page-content' >
          <img className='page-content__item product-page__img' src={props.imgSrc} alt={props.imgAlt} />
          <div className='page-content__item' >
              <h1 className='product-page__title' >{props.title}</h1>
              {props.salePrice ? <h2 className='product-page__s-price' >SALE: {props.salePrice}</h2> : null }
              <h2 className='product-page__price' >Regular: {props.price}</h2>
              <p className='page-content__text' >
                {props.description}
              </p>
              {props.dimensions ? <p className='page-content__text product-page__dimensions' >DIMENSIONS: {props.dimensions}</p> : null }
          </div>
      </div>

  </div>
);

export default ProductPage;
