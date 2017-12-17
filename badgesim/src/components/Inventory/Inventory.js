import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Cards from './Cards/Cards';

import './Inventory.css';

class Inventory extends Component {
  componentDidMount() {
    axios.post('/api/userInfo', {
      username: this.props.username,
      userID: this.props.userID
    });
  }
  render() {
    return (
      <div>
        <div className="inventoryHead">
          <div>
            <h1>Browse Inventory</h1>
          </div>
          <div>
            <div className="stockStatus">
              <h4>In Stock </h4>
              <input type="checkbox" />
            </div>
            <div className="stockStatus">
              <h4>Out of Stock </h4>
              <input type="checkbox" />
            </div>
          </div>
          <div className="genreFilter">
            <h4>Genre: </h4>
            <select name="genre" id="genre">
              <option value="">none</option>
            </select>
          </div>
        </div>
        <div className="content">
          <Cards />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, {})(Inventory);
