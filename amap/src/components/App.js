import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

export default class App extends React.Component{
constructor() {
    super();
    this.state = {
      veggies: {}
    }
    this.addVeggie = this.addVeggie.bind(this);
  }

  addVeggie(veggie){
    //mettre a jour le state
    const veggies = {...this.state.veggies};
    //ajouter les nouv legumes
    veggies["veggie-1"] = veggie;
    //appliquer le state
    this.setState({veggies});
  }

  render(){
    return (
      <div className="amap">
        <div className="menu">
          <Header tagline="Des bons legumes"/>
        </div>
        <Order/>
        <Inventory addVeggie={this.addVeggie}/>
      </div>
    )
  }
}
