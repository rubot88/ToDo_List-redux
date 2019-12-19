import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ items }) => {
    let todo = 0,
        done = 0;
    items.forEach(({ complete }) => complete ? done++ : todo++);
    return (
        <header className="header">
            <h1>Todo List</h1>
            <div className="todo-count">
                <span>{todo} more to do, {done} done</span>
            </div>

        </header>
    );
};

Header.propTypes = {
    items: PropTypes.array
}

const mapStateToProps = ({ items }) => ({ items });

export default connect(mapStateToProps)(Header);