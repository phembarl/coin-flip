import React, { Component } from 'react';
import Coin from '../Coin';
import { choice } from '../../helpers';

class CoinFlip extends Component {
  static defaultProps = {
    coins: [
      {
        side: 'heads',
        imgSrc:
          'https://foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18777.jpg',
      },
      {
        side: 'tails',
        imgSrc:
          'https://foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18776.jpg',
      },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      coin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
  }

  flip = () => {
    const newCoin = choice(this.props.coins);

    this.setState(st => ({
      ...st,
      coin: newCoin,
      nFlips: st.nFlips + 1,
      nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
      nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0),
    }));
  };

  render() {
    return (
      <div>
        <h2>Let's flip a coin</h2>
        {this.state.coin && <Coin info={this.state.coin} />}
        <button onClick={this.flip}>Flip Me!</button>
        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{' '}
          heads and {this.state.nTails} tails
        </p>
      </div>
    );
  }
}

export default CoinFlip;
