import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions';

import './add-item-form.scss';

class AddItemForm extends Component {
    static propTypes = {
        labelValue: PropTypes.string,
        onItemAdded: PropTypes.func,
        onLabelChange: PropTypes.func
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded();
    }

    render() {
        const { labelValue, onLabelChange } = this.props;
        return (
            <form
                className="add-item-form d-flex"
                onSubmit={this.onSubmit}>
                <input
                    value={labelValue}
                    onChange={onLabelChange}
                    className="form-control"
                    type="text"
                    placeholder="What needs to bo be done?" />
                <button className="btn btn-outline-secondary">Add</button>
            </form>
        )
    }
}



const mapStateToProps = ({ labelValue }) => ({ labelValue });

const mapDispatchToProps = (dispatch) => {
    const { onItemAdded, onLabelChange } = bindActionCreators(actions, dispatch)
    return {
        onItemAdded: onItemAdded,
        onLabelChange: (event) => onLabelChange(event)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemForm);