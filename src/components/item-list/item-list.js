import React, { Component } from 'react'

import ItemDetails from '../item-details';

import './item-list.scss';


class componentName extends Component {
    state = {
        items: [
            { id: 1, label: 'Drink Coffee', complete: true, important: false },
            { id: 2, label: 'Learn React', complete: false, important: false },
            { id: 3, label: 'Make Awesome App', complete: false, important: false }
        ]
    }

    onItemComplete = (id) => {
        this.setState(({ items }) => {
            const newItems = items
                .map(item => item.id === id ?
                    ({ ...item, complete: !item.complete }) :
                    ({ ...item }));
            return {
                items: newItems
            }
        });
    }

    onImportant = (id) => {
        this.setState(({ items }) => {
            const newItems = items
                .map(item => item.id === id ?
                    ({ ...item, important: !item.important }) :
                    ({ ...item }));
            return {
                items: newItems
            }
        })
    }

    onDelete = (id) => {
        this.setState(({ items }) => {
            const idx = items.findIndex(item => item.id === id);
            const newItems = [
                ...items.slice(0, idx),
                ...items.slice(idx + 1)
            ]

            return {
                items: newItems
            }
        })
    }

    render() {

        const { items } = this.state;
        const renderItems = items.map(({ id, label, complete, important }) => {
            return (
                <li
                    className="item list-group-item"
                    key={id}>
                    <ItemDetails
                        label={label}
                        isCompleted={complete}
                        isImportant={important}
                        onItemComplete={() => this.onItemComplete(id)}
                        onImportant={() => this.onImportant(id)}
                        onDelete={()=>this.onDelete(id)} />
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
