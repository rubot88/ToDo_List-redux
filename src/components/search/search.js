import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import './search.scss';

const Search = ({ searchValue, onSearchValueChange, onSearchBlur }) => {
    return (
        <div className="search">
            <input
                className="form-control"
                type="text"
                placeholder="type to search"
                value={searchValue}
                onChange={onSearchValueChange}
                onBlur={onSearchBlur} />
        </div>
    );
};

const mapStateToProps = ({ searchValue }) => {
    return {
        searchValue
    }
};

const mapDispatchToProps = (dispatch) => {
    const { onSearchValueChange, onSearchBlur } = bindActionCreators(actions, dispatch);

    return {
        onSearchValueChange,
        onSearchBlur
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);