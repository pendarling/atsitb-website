import React from 'react';

const PaintInfo = () => (
  <div className='content-container' >
    <div className='page-header' >
      <h1 className='page-header__title' >Rethunk Junk</h1>
    </div>
    <div className='page-content' >
      <img className='page-content__item' src='/images/paint/colors.jpg' alt='paint_colors' height='550' />
      <div className='page-content__item' >
        <h1 className='page-content__header' >Step 1: Prep</h1>
        <p className='page-content__text' >
          No sanding or priming necessary. Using a clean soft cloth, wipe The Prep on all surfaces to be painted. This removes oils, waxes, and dirt and 'preps' the surface for best adhesion of paint.
        </p>
        <h1 className='page-content__header' >Step 2: Paint</h1>
        <p className='page-content__text' >
          Apply Furniture paint with a quality bristle brush. Apply your first coat making sure there are no drips. This is a bonding coat and may appear thin - that's normal and good. When dry to the touch additional coats may be applied. Using a fan speeds up dry time. In most cases two coats is sufficient to cover well.
        </p>
        <h1 className='page-content__header' >Step 3: Personalize</h1>
        <p className='page-content__text' >
          When Furniture Paint is fdry to the touch you can distress. We use an electric hand sander and 80grit sandpaper. Distress all the areas that would normally age with time. Remember that it's only paint and you can repaint - so have fun! Random is good. The distressing will highlight any cool architecture on the piece and gives it some fabulous personality!
        </p>
        <h1 className='page-content__header' >Then...</h1>
        <p className='page-content__text' >
          At this point you can be finished & proud of your masterpiece - or use some of their other fabulous products... <br />
          Tintable Glaze, Dark Glaze, Clear Sealer, Stain Top, Tuff Top, Rethunk Gunk, & Furniture Washes <br />
          Visit <a href='https://www.rethunkjunkbylaura.com' target='_blank' rel='noopener noreferrer' >Rethunk Junk's Website</a> for more tips, tricks, & fun!
        </p>
      </div>
    </div>
  </div>
);

export default PaintInfo;
