import React, { Component } from 'react';

class ItemInput extends Component{
    render(){
        return(
            <div>
                <h2>Add an Item</h2>
                <form>
                    <label>Item: </label>
                    <input type="text" />
                    <label>Quantity: </label>
                    <input type="number" />
                    <label>Unit: </label>
                    <input type="text" />
                    <button type="submit">Save</button>
                </form>
            </div>
        ) // end return
    } // end render
} // end class

export default ItemInput;
