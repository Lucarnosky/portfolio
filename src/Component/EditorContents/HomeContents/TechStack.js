import React, { Component } from 'react';
import "./TechStack.css";

export default class TechStack extends Component {

    render(){
        return(
            <div className="detail-content">
                <div className="detail-left-content">
                    <div className="detail-left-title" id="backend">Back-End</div>
                    For no tech people the back-end is the engine of the project, is hidden, not seen but is what make everything works.<br/>
                    For the building of the back-end, depdending on the architecture and the need of the projects, I have a sull suite of tool which I use to build it.<br/>
                    Here a list of what I use:
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>PHP</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>Postegre</li>
                    </ul>              

                    <br/><br/>
                    <div className="detail-left-title" id="frontend">Front End</div><br/>
                    <div className="detail-left-title" id="onpremises">On Premises</div><br/>
                    <div className="detail-left-title" id="tools">Tools</div><br/>
                    <div className="detail-left-title" id="tecniques">Tecniques</div><br/>

                </div>
                <div className="detail-right-content">
                    <div className="detail-right-title">Sections</div>
                    <a className="detail-shortcut" href="#backend">Back End</a>
                    <a className="detail-shortcut" href="#frontend">Front End</a>
                    <a className="detail-shortcut" href="#onpremises">On Premises</a>
                    <a className="detail-shortcut" href="#tools">Tools</a>
                    <a className="detail-shortcut" href="#tecniques">Tecniques</a>
                </div>
            </div>
        );
    }
}