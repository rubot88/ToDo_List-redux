import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

Search.propTypes = {
    searchValue: PropTypes.string.isRequired,
    onSearchValueChange: PropTypes.func.isRequired,
    onSearchBlur: PropTypes.func.isRequired
}
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