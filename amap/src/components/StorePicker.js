import React from 'react';
import {getFunName} from '../helpers'
import PropTypes from 'prop-types';

class StorePicker extends React.Component{
  constructor(){
    super();
    this.goToStore = this.goToStore.bind(this);
  }

  goToStore(event){
    const storeId = this.storeInput.value;
    console.log(`on va vers ${storeId}`);
    event.preventDefault();
    this.props.history.push(`store/${storeId}`);

  }

  render(){
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Entrez un nom de magasin</h2>
        <input type="text" ref={(toto) => {this.storeInput = toto}} placeholder="Nom du magasin" defaultValue={getFunName()}/>
        <button type="submit">Visiter le magasin </button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: PropTypes.objects
}

export default StorePicker;
