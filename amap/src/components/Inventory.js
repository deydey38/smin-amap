import React from 'react';
import AddVeggieForm from './AddVeggieForm';

export default class Inventory extends React.Component{
  render(){
    return (
      <div>
          <h2>Inventaire</h2>
          <AddVeggieForm addVeggie={this.props.addVeggie}/>
      </div>
    )
  }
}
