import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

export default class App extends React.Component{
  render(){
    return (
      <div className="amap">
        <div className="menu">
          <Header/>
        </div>
        <Order/>
        <Inventory/>
      </div>
    )
  }
}
