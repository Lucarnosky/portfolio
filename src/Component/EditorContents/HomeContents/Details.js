import React, { Component } from 'react';
import "./Details.css";

export default class Details extends Component {

    render() {
        return (
            <div className="detail-content">
                <div className="detail-left-content">
                    <div className="detail-left-title" id="whoAmI">Who Am I</div>
                    Born on the 22 of January of the 1991 in a small city in Italy I've been always interested in computer and tech.<br />
                    At the age of 8 I got my first child PC, a Clementoni one, which had a Basic compiler and pack of instructions which teach you how to make basic programming.<br/>
                    I have a background as barebu and computer science.<br />
                    I am currently working in an automotive and logistic company as a software engineer and team leader.<br />
                    I am also a student at the University of Bologna, studying computer science and engineering.<br />
                    <br />
                    <div className="detail-left-title" id="whatIDo">What I Do</div>
                    I am a full stack developer, I have experience in the following technologies:<br />
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Bootstrap</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>GitLab</li>
                        <li>GitFlow</li>
                        <li>GitHub Pages</li>
                        <li>GitLab Pages</li>
                        <li>Webpack</li>
                        <li>Webpack Dev Server</li>
                        <li>Webpack Hot Module Replacement</li>
                        <li>Webpack Bundle Analyzer</li>
                        <li>Webpack Bundle Size Analyzer</li>
                    </ul>
                    <br />
                    <div className="detail-left-title" id="myExperience">My Experiences</div>
                    From May 2012 to August 2016 I worked as a software engineer at a logistic company.<br />
                    I was responsible for the development of the software for the company.<br />
                    <div className="detail-left-title" id="mySkills">My Skills</div>
                    Test Here
                </div>
                <div className="detail-right-content">
                    <div className="detail-right-title">Sections</div>
                    <a className="detail-shortcut" href="#whoAmI">Who am I</a>
                    <a className="detail-shortcut" href="#whatIDo">What I Do</a>
                    <a className="detail-shortcut" href="#myExperience">My Experiences</a>
                    <a className="detail-shortcut" href="#mySkills">My Skills</a>
                </div>
            </div>
        );
    }
}