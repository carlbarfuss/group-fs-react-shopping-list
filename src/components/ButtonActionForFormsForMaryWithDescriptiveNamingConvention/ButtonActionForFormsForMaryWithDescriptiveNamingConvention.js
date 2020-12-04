import React, { Component } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'


class ButtonActionForFormsForMaryWithDescriptiveNamingConvention extends Component{

    resetList = (event) => {
        axios.put(`/list/reset`)
            .then((response) => {
                console.log(`reset list`);
                this.props.getShoppingList();   
            })
    }

    deleteList = (event) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Your secrets are safe with us.',
                    'success'
                )
                axios.delete(`/list/delete`)
                    .then((response) => {
                        console.log('deleted list');
                        this.props.getShoppingList();
                    })
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Shopping List Restored, thanks for Shopping SMart, shop S-Mart.',
                    'error'
                )
            }
        })
    }

    render(){
        return(
            <div className="shopping-list-buttons"> 
                <h2>Shopping List</h2>
                <button className="btn btn-info" onClick={(event) => this.resetList(event)}>Reset List</button>
                <button className="btn btn-danger shopping-list-delete" onClick={(event) => this.deleteList(event)}>Delete List</button>
            </div>
        )

    }


}


export default ButtonActionForFormsForMaryWithDescriptiveNamingConvention;