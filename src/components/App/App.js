import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ShoppingList from '../ShoppingList/ShoppingList';

class App extends Component {

  state = {
    shoppingList: []
  }

  getShoppingList = () => {
    axios.get('/list')
    .then ( (response) => {
      console.log('Response:', response.data);
      this.setState({
        shoppingList: response.data
      })
    })
    .catch( (error) => {
      alert('Something bad happened');
      console.log('Error', error)
    })
  }

  deleteItem = (event, itemID) => {
    console.log(itemID);
    axios.delete(`/list/${itemID}`)
      .then((response) => {
        console.log(`deleted ${itemID}`);
        this.getShoppingList();
      })
  }

  render() {
    return (
      <div className="App">
        <header className="banner-header">
          <h1>My Shopping List</h1>
        </header>
        <main>
          <ShoppingList />
        </main>
      </div>
    );
  }
}

export default App;
