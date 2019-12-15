import React from 'react'

import './add-item-form.scss';

const AddItemForm = () => {
    return (
        <form className="add-item-form d-flex">
            <input
                className="form-control"
                type="text"
                placeholder="What needs to bo be done?"/>
                <button
                className="btn btn-outline-secondary">Add</button>
        </form>
            )
        }
        
export default AddItemForm;