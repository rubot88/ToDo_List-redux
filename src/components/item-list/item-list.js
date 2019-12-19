import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ItemDetails from '../item-details';
import * as actions from '../../actions';

import './item-list.scss';


const ItemList = ({ items, onItemComplete, onItemImportant, onDeleteItem }) => {
    console.log(...items);
    const renderItems = items.map(({ id, label, complete, important }) => {
        return (
            <li
                className="item list-group-item"
                key={id}>
                <ItemDetails
                    label={label}
                    isCompleted={complete}
                    isImportant={important}
                    onItemComplete={() => onItemComplete(id)}
                    onImportant={() => onItemImportant(id)}
                    onDelete={() => onDeleteItem(id)} />
            </li>
        );
    });
    return (
        <ul className="item-list list-group" >
            {renderItems}
        </ul >
    )
};

ItemList.propTypes = {
    items: PropTypes.array,
    onItemComplete: PropTypes.func,
    onItemImportant: PropTypes.func,
    onDeleteItem: PropTypes.func
}

const mapStateToProps = ({ items, searchValue, filterButtons }) => {
    const filterName = filterButtons.filter(({ name, isActive }) => isActive && name)
    let filtered = [];
    switch (filterName) {
        case 'Active':
            filtered = items.filter(({ complete }) => !complete);
            break;
        case 'Done':
            filtered = items.filter(({ complete }) => complete);
            break;
        default:
            filtered = items;
    }

    if (searchValue !== '') {
        filtered = filtered
            .filter(({ label }) => label
                .toLowerCase()
                .includes(searchValue.toLowerCase()));
    }

    return {
        items: filtered
    }
};
const mapDispatchToProps = (dispatch) => {
    const { onItemComplete, onItemImportant, onDeleteItem } = bindActionCreators(actions, dispatch)
    return {
        onItemComplete: (id) => onItemComplete(id),
        onItemImportant: (id) => onItemImportant(id),
        onDeleteItem: (id) => onDeleteItem(id)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
