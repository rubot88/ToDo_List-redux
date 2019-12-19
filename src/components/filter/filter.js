import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions';

const Filter = ({ filterButtons, onFilterChanged }) => {
    const buttons = filterButtons.map(({ name, isActive }) => {
        const btnClass = `btn ${isActive ? 'btn-info' : 'btn-outline-secondary'}`;
        return (
            <button
                key={name}
                type="button"
                className={btnClass}
                onClick={() => onFilterChanged(name)}>
                {name}
            </button >
        );
    });
    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};

Filter.propTypes = {
    filterButtons: PropTypes.arrayOf(PropTypes.object),
    onFilterChanged: PropTypes.func
}

const mapStateToProps = ({ filterButtons }) => ({ filterButtons });

const mapDispatchToProps = (dispatch) => {
    const { onFilterChanged } = bindActionCreators(actions, dispatch);
    return {
        onFilterChanged: (name) => onFilterChanged(name)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);