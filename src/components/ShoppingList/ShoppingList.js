import React, { Component } from 'react';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';

class ShoppingList extends Component{
    render(){
        return(
            <div className="shopping-list">
                { this.props.shoppingList.map((item) => 
                    <ShoppingListItem item={item} key={item.id} />
                )


                }
            </div>
        ) // end return
    } // end render
} // end class

export default ShoppingList;
