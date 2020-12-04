import React, { Component } from 'react';
import axios from 'axios'

class ButtonActionForFormsForMaryWithDescriptiveNamingConvention extends Component{

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
            <> 
                <button onClick={(event) => this.resetList(event)}>Reset List</button>
                <button onClick={(event) => this.deleteList(event)}>Delete List</button>
            </>
        )

    }


}


export default ButtonActionForFormsForMaryWithDescriptiveNamingConvention;