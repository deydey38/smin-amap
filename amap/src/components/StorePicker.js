import React from 'react';

export default class StorePicker extends React.Component{
  render(){
    return (
      <form className="store-selector">
        <h2>Entrez un nom de magasin</h2>
        <input type="text" placeholder="Nom du magasin"/>
        <button type="submit">Visiter le magasin </button>
      </form>
    )
  }
}
