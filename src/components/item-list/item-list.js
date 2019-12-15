import React, { Component } from 'react'

import ItemDetails from '../item-details';

import './item-list.scss';


class componentName extends Component {
    state = {
        items: [
            { id: 1, label: 'Drink Coffee' },
            { id: 2, label: 'Learn React' },
            { id: 3, label: 'Make Awesome App' }
        ]
    }
    render() {
        const { items } = this.state;
        const renderItems = items.map(({ id, label }) => {
            return (
                <li
                    className="item list-group-item"
                    key={id}>
                    <ItemDetails label={label} />
                </li>
            );
        });
        return (
            <ul className="item-list list-group">
                {renderItems}
            </ul>
        )
    }
}

export default componentName
