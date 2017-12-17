import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {
  render() {
    return (
      <div className="cardsBackground">
        <div className="container">
          <img src="" className="cardsImg" />
          <div className="titleAuthor">
            <h1 classNames="cardsTitle">Test Title</h1>
            <div className="cardsAuthor">
              <p>by</p> <h3>fake Author</h3>
            </div>
          </div>
          <div className="cardsStock">
            <h4>In Stock: </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
