import React from 'react';
import PropTypes from 'prop-types';

import './item-details.scss';

const ItemDetails = ({ label }) => {
    return (
        <div className="item-details">
            <div className="label">{label}</div>
            <div className="buttons">
                <button className="btn btn-outline-danger btn-sm">del</button>
                <button className="btn btn-outline-success btn-sm">!</button>
            </div>
        </div>
    );
};

ItemDetails.propTypes = {
    label: PropTypes.string
};

export default ItemDetails;