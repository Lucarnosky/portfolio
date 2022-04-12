import React, { Component } from 'react';
import './FileSocket.css';
export default class File extends Component {

    render() {
        const selection = this.props.selected ? 'selected' : '';
        const classes = `file-socket ${selection}`;
        return (
            <li className={classes} onClick={this.props.onClick}>
                <nobr>
                    <img src={this.props.logo} alt="js" className="file-icon" />
                    <span className="file-name-text">{this.props.name}</span>
                </nobr>
            </li>
        );
    }
}