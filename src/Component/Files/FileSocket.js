import React, { Component } from 'react';
import jsLogo from '../../imgs/js.png';

export default class File extends Component {

    render() {
        const selection = this.props.selected ? 'selected' : '';
        const classes = `file-socket ${selection}`;
        return (
            <li className={classes} onClick={this.props.onClick}>
                <img src={jsLogo} alt="js" className="file-icon" />
                <span className="file-name-text">{this.props.name}</span>
            </li>
        );
    }
}