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
                    From that moment it was a full mind blowing experience, I was able to understand how the computer works and how to program it.<br/>
                    All my study are around Informatic and programming<br />
                    I am currently working in an automotive and logistic company as a software engineer and team leader.<br />
                    By night, I create and deliver side projects for customers and myself<br />
                    <br />
                    <div className="detail-left-title" id="whatIDo">What I Do</div>
                    I am a full stack developer, I can develop from simple website to complex application.<br />
                    Most of the time I'm making web app because the future is online<br/>
                    I'm also a front-end developer, I can make responsive web app and mobile app.<br/>
                    I'm also a back-end developer, I can make server side app and database managing.<br/>
                    I also have experience in coordination of teams thanks to my goal-driven personality.<br/>
                    <br />
                    <div className="detail-left-title" id="whatILove">What I Love</div>
                    I love to learn new things and I'm always looking for new challenges.<br />
                    I want to create programs and solutions which are suited to the needs of the customer.<br />
                    I want to make the difference with every new project and put my best effort to make it happen.<br />
                    <br />
                    <div className="detail-left-title" id="whatILove">More about me</div>
                    Except from the above, I'm a self-teached guitar player, mainly I'm what people call a campfire strummer<br/>
                    I love the game of chess and I'm amazed how much is deep the game and how is evolving. You can learn a lot from it<br/>
                </div>
                <div className="detail-right-content">
                    <div className="detail-right-title">Sections</div>
                    <a className="detail-shortcut" href="#whoAmI">Who am I</a>
                    <a className="detail-shortcut" href="#whatIDo">What I Do</a>
                    <a className="detail-shortcut" href="#myExperience">What I Love</a>
                    <a className="detail-shortcut" href="#mySkills">More about me</a>
                </div>
            </div>
        );
    }
}