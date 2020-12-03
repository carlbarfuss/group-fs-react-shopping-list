import React, { Component } from 'react';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';

class ShoppingList extends Component{
    render(){
        return(
            <div className="shopping-list">
                { this.props.shoppingList.map((item) => 
                    <ShoppingListItem item={item} key={item.id} shoppingList={this.props.shippingList} getShoppingList={this.props.getShoppingList}/>
                )


                }
            </div>
        ) // end return
    } // end render
} // end class

export default ShoppingList;
