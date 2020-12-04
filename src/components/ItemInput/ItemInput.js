import React, { Component } from 'react';

class ItemInput extends Component {

    render() {
        return (
            <div>
                <h2>Add an Item</h2>
                <form onSubmit={this.props.addItem}>
                    <label>Item: </label>
                    <input type="text" value={this.props.newItem.name} onChange={(event) => this.props.handleChangeFor(event, 'name')} />
                    <label>Quantity: </label>
                    <input type="number" value={this.props.newItem.quantity} onChange={(event) => this.props.handleChangeFor(event, 'quantity')} />
                    <label>Unit: </label>
                    <input type="text" value={this.props.newItem.unit} onChange={(event) => this.props.handleChangeFor(event, 'unit')} />
                    <button type="submit">Save</button>
                </form>
            </div>
        ) // end return
    } // end render
} // end class

export default ItemInput;
