import React, { Component } from 'react';
import "./Home.css";

export default class HomeSection extends Component {

    render(){
        return(
            <div className='homeContent'>
                <div className='homeContent-title'>
                    Who am I?
                </div>
                <div className='homeContent-text'>
                    I am a software developer with a passion for creating web applications.<br/>
                    I have a background in software engineering and computer science.<br/>
                    I am currently working in an automotive and logistic company as a software engineer.
                </div>  

            </div>
        );
    }
}