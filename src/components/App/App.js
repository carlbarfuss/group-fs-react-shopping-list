import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
