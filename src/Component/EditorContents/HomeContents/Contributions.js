import React, { Component } from 'react';

export default class Contributions extends Component {

    render() {
        return (
            <div className="detail-content">
                <div className="detail-left-content">
                    <div className="detail-left-title" id="meaning">What is a contribution</div>
                    <div className="detail-section-content">
                        In programming world a contribution is when you add a new feature or fix a bug in a project.<br />
                        This project can be yours or someone else's. <br />
                        I'm actively contributing in as many as possible open source projects on Github.<br />
                        And with as many as possible, I mean as many as I can after work, personal project and family<br />
                    </div>
                    <br />
                    <div className="detail-left-title" id="benefits">What is the benefits</div>
                    <div className="detail-section-content">
                        Contributing to an open source project has many benefits. <br />
                        The most obvious is just to <span className='section-emphasis'>help people</span>, which is already spending a lot of time and energy on it.<br />
                        Another reason is to help the <span className='section-emphasis'>project grow</span> and become more stable and reliable. This point specially apply if you're using one of those open source project, like in my case.<br />
                        It help you to <span className='section-emphasis'>grow up as a developer</span>. This is given by the fact that you are facing, reading and studing the code of someone else and this open up your mind for new techniques.<br />
                    </div>
                    <br />
                    <div className="detail-left-title" id="mycontributions">Projects I've contributed to</div>
                    <div className="detail-section-content">
                        Here a list of projects that I had the possibility to contribute to. <br /><br />
                        <span className='section-emphasis'>Nextcloud</span><br />
                        As written on Github, Nextcloud is a safe home for all your data,community-driven, free & open source<br />
                        Is suitable for really thousands and thousands situations, I had the possibility to use it when I had rented a personal dedicated server.<br />
                        From personal cloud to sync with your phone for saving all your photos, to fully host an office environment thanks to integration of plugins like Collabora for have classic office suite, and Talk a plugin to make video calls.<br />
                        Is really suggest this project if you wanna a self-hosted and self-manage cloud.
                        <br />
                        <br />
                        <span className='section-emphasis'>Twometer/NoFence</span><br />
                        NoFence by Twometer, is an organizer tool for Windows Desktop<br />
                        It work very similar to Stardock Fences, but as the description of the readme say, didn't want to spend 11€ so I made by own.<br />
                        I use it still to organize my desktop and it work flawlessy.
                        <br />
                        <br />
                        <span className='section-emphasis'>ToolJet</span><br />
                        ToolJet is an open-source low-code framework to build and deploy internal tools quickly without much effort from the engineering teams.<br />
                        It work amazingly and it have a very light learning curve. It can connect from any database or service to a front end or application.<br />
                        It work as a fully customizable IpaaS and is widely used in structured reality.
                        <br />
                        <br />
                        <span className='section-emphasis'>Amplication</span><br />
                        Amplication is an open‑source development tool. It helps professional Node.js developers develop quality Node.js applications without spending time on repetitive coding tasks.<br />
                        Amplication auto-generates backend apps built with TypeScript and Node.js, and a client built with React.<br />
                        Also, contributing to this project I got a free t-shirt because I was included in the initiative 10-issues-for-first-timer.<br />
                    </div>
                </div>
                <div className="detail-right-content">
                    <div className="detail-right-title">Sections</div>
                    <a className="detail-shortcut" href="#meaning">What is a contribution</a>
                    <a className="detail-shortcut" href="#benefits">What is the benefits</a>
                    <a className="detail-shortcut" href="#mycontributions">Projects I've contributed to</a>
                </div>
            </div>
        );
    }
}