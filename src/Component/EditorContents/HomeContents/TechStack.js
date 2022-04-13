import React, { Component } from 'react';

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
                        <li>Laravel</li>
                        <li>Codeigniter</li>
                        <li>Python</li>
                        <li>C#</li>
                        <li>Java</li>
                    </ul>              

                    <br/><br/>
                    <div className="detail-left-title" id="frontend">Front End</div><br/>
                    As some of you may already guess, if the back-end is the engine behind the project, the front-end is the interface of the project, is seen, is what make the user interact with the project.<br/>
                    Here is what I got used to use:
                    <ul>
                        <li>React.js</li>
                        <li>React Native</li>
                        <li>Next.js</li>
                        <li>Redux</li>
                        <li>React-Router</li>
                        <li>Bootstrap</li>
                        <li>Material-UI</li>
                        <li>JQuery</li>
                    </ul>
                    <div className="detail-left-title" id="tools">Tools</div><br/>
                    Different projects require different tool, which help to get a better goal in a faster way, the real difference is to choose the right tool<br/>
                    Here a list of tools which will help me and you to get to the best goal:
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Docker</li>
                        <li>Linux Server</li>
                        <li>Windows</li>
                        <li>Jira Software</li>
                        <li>Trello</li>
                        <li>Slack</li>
                        <li>Heroku</li>
                        <li>AWS</li>
                    </ul>
                    <div className="detail-left-title" id="techniques">Techniques</div><br/>
                    Same as the tools, every project can fall in different techniques.If you are a non tech person, maybe it will look like random words, but it is not.<br/>
                    Here is a list of techniques which I use:
                    <ul>
                        <li>Agile</li>
                        <li>Scrum</li>
                        <li>Kanban</li>
                        <li>Microservices Architecture</li>
                        <li>CI/CD</li>
                        <li>DevOps</li>
                    </ul>
                </div>
                <div className="detail-right-content">
                    <div className="detail-right-title">Sections</div>
                    <a className="detail-shortcut" href="#backend">Back End</a>
                    <a className="detail-shortcut" href="#frontend">Front End</a>
                    <a className="detail-shortcut" href="#tools">Tools</a>
                    <a className="detail-shortcut" href="#techniques">Techniques</a>
                </div>
            </div>
        );
    }
}