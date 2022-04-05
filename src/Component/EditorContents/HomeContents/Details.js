import React, { Component } from 'react';
import "./Details.css";

export default class Details extends Component {

    render() {
        return (
            <div className="detail-content">
                <div className="detail-left-content">
                    <div className="detail-left-title">Who Am I</div>
                    I am a software developer with a passion for creating web applications.<br />
                    I have a background as coglione and computer science.<br />
                    I am currently working in an automotive and logistic company as a software engineer.
                </div>
                <div className="detail-right-content">
                    Test
                </div>
            </div>
        );
    }
}