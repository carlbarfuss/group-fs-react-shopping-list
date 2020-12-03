import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ShoppingList from '../ShoppingList/ShoppingList';

class App extends Component {

  state = {
    shoppingList: []
  }

  componentDidMount(){
    console.log('ComponentDidMount')
    this.getShoppingList();
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
    axios.delete(`/list/${itemID}`)
      .then((response) => {
        console.log(`deleted ${itemID}`);
        this.getShoppingList();
      })
  }

  buyItem = (event, ItemID) => {
    axios.put(`/list/${itemID}`)
      .then((response) => {
        console.log(`purchased ${itemID}`);
        this.getShoppingList();
      })
  }

  resetList = (event) => {
    console.log('reset list');
    axios.put('/list/reset')
      .then((response) => {
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
          <ShoppingList shoppingList={this.state.shoppingList} />
        </main>
      </div>
    );
  }
}

export default App;
