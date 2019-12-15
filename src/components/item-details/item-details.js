import React from 'react';
import PropTypes from 'prop-types';

import './item-details.scss';

const ItemDetails = ({ label, isCompleted, isImportant, onItemComplete, onImportant, onDelete }) => {
    let itemClass = 'label';
    if (isCompleted) itemClass += ' completed';
    if (isImportant) itemClass += ' important';
    return (
        <div className="item-details">
            <div className={itemClass}
                onClick={onItemComplete}>{label}</div>
            <div className="buttons">
                <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={onDelete}>del</button>
                <button
                    className="btn btn-outline-success btn-sm"
                    onClick={onImportant}>!</button>
            </div>
        </div >
    );
};

ItemDetails.propTypes = {
    label: PropTypes.string,
    isCompleted: PropTypes.bool,
    isImportant: PropTypes.bool,
    onItemComplete: PropTypes.func,
    onImportant: PropTypes.func,
    onDelete: PropTypes.func
};

export default ItemDetails;