import React from 'react';

const Coin = props => (
  <div>
    <img
      src={props.info.imgSrc}
      alt={props.info.side}
      style={{ width: '200px', height: '200px', margin: '20px' }}
    />
  </div>
);

export default Coin;
