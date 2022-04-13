import React, { Component } from 'react';

export default class Contributions extends Component {

    render(){
        return(
            <div className="detail-content">
                <div className="detail-left-content">
                    <div className="detail-left-title" id="meaning">What is a contribution</div>
                    In programming world a contribution is when you add a new feature or fix a bug in a project.<br/>
                    This project can be yours or someone else's. <br/>
                    I'm actively contributing in as many as possible open source projects on Github.<br/>
                    And with as many as possible, I mean as many as I can after work, personal project and family<br/>
                    <br />
                    <div className="detail-left-title" id="benefits">What is the benefits of contributing</div>
                    <div className="detail-section-content">
                        Contributing to an open source project has many benefits. <br/>
                        The most obvious is just to <span className='section-emphasis'>help people</span>, which is already spending a lot of time and energy on it.<br/>
                        Another reason is to help the <span className='section-emphasis'>project grow</span> and become more stable and reliable. This point specially apply if you're using one of those open source project, like in my case.<br/>
                        It help you to <span className='section-emphasis'>grow up as a developer</span>. This is given by the fact that you are facing, reading and studing the code of someone else and this open up your mind for new techniques.<br/>
                    </div>
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
                    <a className="detail-shortcut" href="#meaning">What is a contribution</a>
                    <a className="detail-shortcut" href="#whatIDo">What I Do</a>
                    <a className="detail-shortcut" href="#myExperience">What I Love</a>
                    <a className="detail-shortcut" href="#mySkills">More about me</a>
                </div>
            </div>
        );
    }
}