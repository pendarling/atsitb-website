import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Dashboard from '../components/Dashboard';
import AboutUs from '../components/AboutUs';
import BarnHistory from '../components/BarnHistory';
import BarnRewards from '../components/BarnRewards';
import GalleryList from '../components/GalleryList';
import Galleries from '../components/Galleries';
import PaintInfo from '../components/PaintInfo';
import ProductPage from '../components/ProductPage';
import NotFound from '../components/NotFound';

import everyday from '../galleries/everyday';
import valentines from '../galleries/valentines';
import stPaddys from '../galleries/st-paddys';
import easter from '../galleries/easter';
import fairyGarden from '../galleries/fairy-garden';
import outdoor from '../galleries/outdoor';
import americana from '../galleries/americana';
import halloween from '../galleries/halloween';
import autumn from '../galleries/autumn';
import xmas from '../galleries/xmas';

const rockingChairProps = {
  title: 'Rocking Chair',
  imgSrc: '/images/products/rocking-chair.jpg',
  imgAlt: 'rocking-chair',
  price: '$349.99',
  salePrice: '$262.49',
  description: 'The Rustic Rocker features a high supportive back, plush padded seat and smooth upholstery. A sturdy wooden frame lends it a classic, homespun feel that\'s perfect for your traditional, farmhouse or craftsman home. Available in a range of colors: black, taupe, and dark chocolate.',
  dimensions: '40W x 24D x 35H'
};

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path='/' component={ Dashboard } exact />
          <Route path='/about-us' component={ AboutUs } />
          <Route path='/barn-history' component={ BarnHistory } />
          <Route path='/barn-rewards' component={ BarnRewards } />
          <Route path='/paint-info' component={ PaintInfo } />
          <Route path='/gallery' component={ GalleryList } exact />
          

          <Route path='/gallery/everyday' render={() => <Galleries photos={everyday} /> } />
          <Route path='/gallery/valentines' render={() => <Galleries photos={valentines} /> } />
          <Route path='/gallery/st-paddys' render={() => <Galleries photos={stPaddys} /> } />
          <Route path='/gallery/easter' render={() => <Galleries photos={easter} /> } />
          <Route path='/gallery/fairy-garden' render={() => <Galleries photos={fairyGarden} /> } />
          <Route path='/gallery/outdoor' render={() => <Galleries photos={outdoor} /> } />
          <Route path='/gallery/americana' render={() => <Galleries photos={americana} /> } />
          <Route path='/gallery/halloween' render={() => <Galleries photos={halloween} /> } />
          <Route path='/gallery/autumn' render={() => <Galleries photos={autumn} /> } />
          <Route path='/gallery/xmas' render={() => <Galleries photos={xmas} /> } />

          <Route path='/product/rocking-chair' render={() => <ProductPage {...rockingChairProps} /> } />

          <Route component={ NotFound } />
        </Switch>
        <Footer />
      </div>
    </Router>
);

export default AppRouter;
