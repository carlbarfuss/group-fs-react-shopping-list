import React, { Component } from 'react';
import axios from 'axios';

class ShoppingListItem extends Component{

    buyItem = (event, itemID) => {
        axios.put(`/list/${itemID}`)
            .then((response) => {
                console.log(`purchased ${itemID}`);
                this.props.getShoppingList();
            })
    }

    deleteItem = (event, itemID) => {
        axios.delete(`/list/${itemID}`)
            .then((response) => {
                console.log(`deleted ${itemID}`);
                this.props.getShoppingList();
            })
    }

    render(){
        return(
            <div className={`shopping-list-item ${this.props.item.purchased && "purchased"}`}>
                <h2>{this.props.item.name}</h2>
                <p className="shopping-list-quantity">{this.props.item.quantity} {this.props.item.unit}</p>
                {this.props.item.purchased ? 
                <p>Purchased</p> : 
                <><button onClick={ (event) => this.buyItem(event, this.props.item.id) }>Buy</button>
                <button onClick={ (event) => this.deleteItem(event, this.props.item.id) }>Remove</button></>
                }
            </div>
        ) // end return
    } // end render
} // end class

export default ShoppingListItem;
