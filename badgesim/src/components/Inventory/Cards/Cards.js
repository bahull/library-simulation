import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {
  render() {
    console.log(this.props.cardInfo);
    const { cardInfo } = this.props;
    return (
      <div className="cardsBackground">
        <div className="container">
          <img
            src={cardInfo.picture ? cardInfo.picture : ''}
            className="cardsImg"
          />
          <div className="titleAuthor">
            <h2 className="cardsTitle">{cardInfo.book_title}</h2>
            <div className="cardsAuthor">
              <p>by</p> <h3>{cardInfo.book_author}</h3>
            </div>
          </div>
          <div className="cardsStock">
            <h4>In Stock: {cardInfo.status === 'inStock' ? 'Yes' : 'No'}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
