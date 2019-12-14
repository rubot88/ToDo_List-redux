import React from 'react';

import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <h1>Todo List</h1>
            <div className="todo-count">
                <span>3 more to do, 0 done</span>
            </div>

        </header>
    );
};

export default Header;