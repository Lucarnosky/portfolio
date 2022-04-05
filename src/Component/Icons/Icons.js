import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Icons.css';

export default class Icon extends Component {
    
    render() {
        var classStatus = '';
        if (this.props.selected)
            classStatus = "selected-icon"
        else
            classStatus = "icon"
        return (
            <div className={classStatus} onClick={this.props.onClick}>
                <FontAwesomeIcon icon={this.props.icon} />
            </div>
        );
    }
}