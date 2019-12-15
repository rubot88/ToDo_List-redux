import React, { Component } from 'react';

class Filter extends Component {
    state = {
        buttons: [
            { name: 'All', isActive: true },
            { name: 'Active', isActive: false },
            { name: 'Done', isActive: false }
        ],

    }
    render() {

        const buttons = this.state.buttons.map(({ name, isActive }) => {
            const btnClass = `btn ${isActive ? 'btn-info' : 'btn-outline-secondary'}`;
            return (
                <button
                    key={name}
                    type="button"
                    className={btnClass}>
                    {name}
                </button >
            );
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
};

export default Filter;