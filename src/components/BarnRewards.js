import React from 'react';

const BarnRewards = () => (
    <div className='content-container' >
        <div className='page-header' >
            <h1 className='page-header__title' >Barn Rewards</h1>
        </div>
        <div className='page-content' >
        <div className='page-content__item' >
          <h2 className='page-content__header' >Earn 1 point for every $1 spent</h2>
          <p className='page-content__text' >
            Introducing our new fully automatic barn rewards! No more keeping track of that little yellow card, now all you need is your phone number. Earn 1 point for every $1 spent(sale-items included!) pre-tax in the store -- Earn a $15 store credit for every 300 points accumulated, or save up and earn a $50 store credit with 900 points. Bring in your old Barn Rewards cards for double points in the new system. Stop in and sign-up today!
          </p>
          <p className='page-content__text' >
            *Rewards cannot be redeemed until 10 days after earned, but never expire after that.*
          </p>
          <div className='page-content--inner show-for-desktop' >
            <img className='page-content__img-sq' src='/images/loyalty/1.png' alt='loyalty' />
          </div>
          </div>
          <div className='page-content__item' >
            <div >
              <img className='page-content__item page-content__img' src='/images/loyalty/2.png' alt='loyalty' />
              <img className='page-content__item page-content__img' src='/images/loyalty/3.png' alt='loyalty' />
            </div>
          </div>
        </div>
    </div>
);

export default BarnRewards;
