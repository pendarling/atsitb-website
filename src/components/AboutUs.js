import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => (
  <div className='content-container' >
      <div className='page-header' >
          <h1 className='page-header__title' >About Us</h1>
      </div>
      <div className='page-content' >
          <img className='page-content__item page-content__img' src='/images/about_us/1.jpeg' alt='barn' />
          <div className='page-content__item' >
              <h2 className='page-content__header' >Established 1998</h2>
              <p className='page-content__text' >
              In 1998 All That Stuff In The Barn opened for business in the beautiful Swiss hamlet of Midway, Utah. Our historic barn was built in the 1860's and has been in the Zenger family since 1897. <Link to='/barn-history' >Click Here</Link> to read the complete story of the Zenger family and the history of the barn. We hope you enjoy browsing through our barn filled with inviting garden, home decor, and gift selections.
              </p>
              <p className='page-content__text' >
              We are 45 minutes from Salt Lake City, 20 minutes from Park City, and 30 minutes from Provo-Orem area. The Heber Valley is one of the most beautiful places in northern Utah.
              </p>
              <div className='page-content page-content--inner' >
                  <div className='page-content__item' >
                      <h2 className='page-content__header' >Hours:</h2>
                      <ul className='page-content__text' >
                          <li>Monday: 10am-6pm</li>
                          <li>Tuesday: 10am-6pm</li>
                          <li>Wednesday: 10am-6pm</li>
                          <li>Thursday: 10am-6pm</li>
                          <li>Friday: 10am-6pm</li>
                          <li>Saturday: 10am-6pm</li>
                          <li>Sunday: 12pm-4pm</li>
                      </ul>
                  </div>
                  <div className='page-content__item' >
                      <h2 className='page-content__header' >Contact</h2>
                      <p className='page-content__text' >
                          168 W 100 N <br />
                          Midway, UT 84049 <br />
                          435-654-5889 <br />
                          thebarn@barnsecurity.com
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </div>
);

export default AboutUs;