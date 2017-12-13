import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import AddBooks from './components/AddBooks/AddBooks';
import Login from './components/Login/Login';
import Inventory from './components/Inventory/Inventory';
import Details from './components/Details/Details';
import EditBooks from './components/EditBooks/EditBooks';
import Cart from './components/Cart/Cart';
import MyBooks from './components/MyBooks/MyBooks';
import Header from './components/Header/Header';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props.location);
    return (
      <div className="App">
        {this.props.location.pathname !== '/' && <Header />}
        <div className="innerContent">
          <Switch>
            <Route path="/inventory" component={Inventory} />
            <Route path="/details/:id" component={Details} />
            <Route path="/edit/:id" component={EditBooks} />
            <Route path="/add" component={AddBooks} />
            <Route path="/cart" component={Cart} />
            <Route path="/myBooks" component={MyBooks} />
            <Route exact path="/" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(App));
// export default connect(mapStateToProps)(App);
