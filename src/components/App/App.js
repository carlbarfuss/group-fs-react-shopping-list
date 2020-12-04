import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ShoppingList from '../ShoppingList/ShoppingList';
import ItemInput from '../ItemInput/ItemInput';
const defaultItem = {
  name: '',
  quantity: '',
  unit: ''
};

class App extends Component {


  state = {
    newItem: defaultItem,
    shoppingList: []
  }

  componentDidMount() {
    console.log('ComponentDidMount')
    this.getShoppingList();
  }

  getShoppingList = () => {
    axios.get('/list')
      .then((response) => {
        console.log('Response:', response.data);
        this.setState({
          shoppingList: response.data
        })
      })
      .catch((error) => {
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

  buyItem = (event, itemID) => {
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

  handleChangeFor = (event, propertyName) => {
    this.setState({
      newItem: {
        ...this.state.newItem,
        [propertyName]: event.target.value
      }
    })
  }

  addItem = (event) => {
    event.preventDefault();
    let newItem = this.state.newItem
    console.log('Submitted form, new item is:', newItem);
    axios({
      method: 'POST',
      url: '/list',
      data: newItem
    })
    .then((response) =>{
      // info we want is in the response data property
      console.log("Response", response.data);
      this.getShoppingList();
    })
    .catch((error) =>{
      alert('Something bad happened');
      console.log('error', error);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="banner-header">
          <h1>My Shopping List</h1>
        </header>
        <main>
          <ItemInput addItem={this.addItem} handleChangeFor={this.handleChangeFor} />
          <ShoppingList shoppingList={this.state.shoppingList} getShoppingList={this.getShoppingList} />
        </main>
      </div>
    );
  }
}

export default App;
