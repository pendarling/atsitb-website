import React from 'react';
import Gallery from 'react-photo-gallery';

const Galleries = (props) => (
    <div>
      <Gallery photos={props.photos} />;
    </div>
  );

export default Galleries;
