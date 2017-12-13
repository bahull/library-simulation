import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import './Inventory.css';

class Inventory extends Component {
  componentDidMount() {
    console.log(this.props.userID);
    axios.post('/api/userInfo', {
      username: this.props.username,
      userID: this.props.userID
    });
  }
  render() {
    return <div>Inventory Page</div>;
  }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, {})(Inventory);
