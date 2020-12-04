import React, { Component } from 'react';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';
import axios from 'axios'
import ButtonActionForFormsForMaryWithDescriptiveNamingConvention from '../ButtonActionForFormsForMaryWithDescriptiveNamingConvention/ButtonActionForFormsForMaryWithDescriptiveNamingConvention'

class ShoppingList extends Component{
    resetList = (event) => {
        axios.put(`/list/reset`)
            .then((response) => {
                console.log(`reset list`);
                this.props.getShoppingList();
            })
    }

    deleteList = (event) => {
        axios.delete(`/list/delete`)
            .then((response) => {
                console.log('deleted list');
                this.props.getShoppingList();
            })
    }
    
    render(){
       return(
            <>
               <ButtonActionForFormsForMaryWithDescriptiveNamingConvention shoppingList={this.props.shippingList} getShoppingList={this.props.getShoppingList}/>
            <div className="shopping-list">
                { this.props.shoppingList.map((item) => 
                    <ShoppingListItem item={item} key={item.id} shoppingList={this.props.shippingList} getShoppingList={this.props.getShoppingList}/>
                )


                }
            </div>
            </>
        ) // end return
    } // end render
} // end class

export default ShoppingList;
