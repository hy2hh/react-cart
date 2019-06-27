import React, { Component } from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Products from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { isAuthenticated } from './repository';

export default class App extends Component {
  
  logOut() {
    localStorage.removeItem('x-access-token');
    console.log(localStorage.getItem('x-access-token'));
  }

  render() {
    const auth = isAuthenticated();
    console.log(auth);
    console.log(localStorage.getItem('x-access-token'));
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <Link className="navbar-brand" to="/">ShoppingCart</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div>
                <div className="navbar-nav">
                  <Link className="nav-item nav-link" to="/">Products</Link>
                  <Link className="nav-item nav-link" to="/cart">Cart</Link>
                  { (auth) ? <Link className="nav-item nav-link" to="/checkout">Checkout</Link>: ''}
                  {
                    ( auth ) ? 
                      ( <a className="nav-item nav-link" href="/" onClick={this.logOut}>Log out</a>) : 
                      ( <Link className="nav-item nav-link float-right" to="/login">Log in</Link> )
                   }
                </div>
              </div>
            </div>
          </nav>
          <div className="container">
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            { (!auth) ? <Route exact path="/login" component={Login} /> : '' }
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
