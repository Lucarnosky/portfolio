import React, { Component } from 'react';
import Details from './HomeContents/Details';
import "./Home.css";

export default class HomeSection extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedVoice: "details",contentToDisplay:<Details/> };
    }

    setSelectedVoice(voice,content) {
        this.setState({ selectedVoice: voice,contentToDisplay:content });
    }

    isSelected(voice) {
        return this.state.selectedVoice === voice;
    }

    render() {
        return (
            <div className='homeContent'>
                <div className='homeContent-title'>
                    <div className='homeContent-image'>
                        <img src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/9c3fb1c98976cabc81e461bda28530ef-1564740780188/3b75e96b-5dbd-483d-bf34-7b73d3dcafba.jpg" height="150px" alt="" />
                    </div>
                    <div className="homeContent-summary">
                        <span>Matteo Lucarno<br /> <span className='smaller-text'>Italy | 22.01.1991 | 5/5</span><br /> <span className='smaller-text'>Full Stack Developer</span></span>
                    </div>
                </div>
                <div className="homeContent-sections">
                    <span className={`detail-voice ${this.isSelected('details') ? "active-voice" : ""}`} onClick={() => this.setSelectedVoice('details',<Details/>)}>Details</span>
                    <span className={`detail-voice ${this.isSelected('tech') ? "active-voice" : ""}`} onClick={() => this.setSelectedVoice('tech')}>Tech Stack</span>
                    <span className={`detail-voice ${this.isSelected('contribution') ? "active-voice" : ""}`} onClick={() => this.setSelectedVoice('contribution')}>Contributions</span>
                    <span className={`detail-voice ${this.isSelected('projects') ? "active-voice" : ""}`} onClick={() => this.setSelectedVoice('projects')}>Projects</span>
                </div>
                <div className='homeContent-text'>
                    {this.state.contentToDisplay}
                </div>

            </div>
        );
    }
}