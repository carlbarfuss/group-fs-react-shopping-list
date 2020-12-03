import React, { Component } from 'react';

class ShoppingListItem extends Component{
    render(){
        return(
            <div className="shopping-list-item">
                <h2>{this.props.item.name}</h2>
                <p>{this.props.item.quantity} {this.props.item.unit}</p>
                <button>Buy</button>
                <button>Remove</button>
            </div>
        ) // end return
    } // end render
} // end class

export default ShoppingListItem;
