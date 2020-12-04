import React, { Component } from 'react';
import axios from 'axios'

class ButtonActionForFormsForMaryWithDescriptiveNamingConvention extends Component{

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
                <button onClick={(event) => this.resetList(event)}>Reset List</button>
                <button onClick={(event) => this.deleteList(event)}>Delete List</button>
            </>
        )

    }


}


export default ButtonActionForFormsForMaryWithDescriptiveNamingConvention;