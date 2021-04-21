import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Products from './Products';
import Rating from './Rating';
import {Button} from 'react-bootstrap';
import JumboTronComponent from './JumboTronComponent';

class App extends Component {

  formatName(user) {
    return `${user.firstName}  ${user.lastName}`;
  }

  render() {
    const user = {
      firstName : 'Gajabalaji',
      lastName : 'Raman'
    };

    const isEnabled = false;

    const products = ['Learning React', 'Pro React', 'Beginning React'];
    const listProducts = products.map((product) => <li key={product.toString()}>{product}</li>)
    console.log (listProducts);
    return (
      <div>
        <Products/>
        <JumboTronComponent>
          This is the body of the jumbo tron Component.
        </JumboTronComponent>
        <h1>Hello, {this.formatName(user)}</h1>
        <ul>{listProducts}</ul>
        <Button variant="primary" disabled = {!isEnabled}>Default</Button>
        <Rating rating="1"/>
        <Rating rating="2"/>
        <Rating rating="3"/>
        <Rating rating="4"/>
        <Rating rating="5"/>
      </div>

    );  
  }
}

export default App;
