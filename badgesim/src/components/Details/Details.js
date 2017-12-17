import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Details.css';

class Details extends Component {
  render() {
    const {books} = this.props
    return (
      <div>
        <img src={}
        <h1>{console.log(this.props.books[this.props.match.params.id])}</h1>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, {})(Details);
