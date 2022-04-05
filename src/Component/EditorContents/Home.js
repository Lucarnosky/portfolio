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
                        <img src="https://preview.redd.it/v0caqchbtn741.jpg?auto=webp&s=c5d05662a039c031f50032e22a7c77dfcf1bfddc" height="150px" alt="" />
                    </div>
                    <div className="homeContent-summary">
                        <span>Ciccio Pasticcio<br /> <span className='smaller-text'>Italy | 22.01.1991 | 5/5</span><br /> <span className='smaller-text'>Full Stack Developer</span></span>
                    </div>
                </div>
                <div className="homeContent-sections">
                    <span className={`detail-voice ${this.isSelected('details') ? "active-voice" : ""}`} onClick={() => this.setSelectedVoice('details',<Details/>)}>Details</span>
                    <span className={`detail-voice ${this.isSelected('tech') ? "active-voice" : ""}`} onClick={() => this.setSelectedVoice('tech')}>Tech Stack</span>
                    <span className={`detail-voice ${this.isSelected('contribution') ? "active-voice" : ""}`} onClick={() => this.setSelectedVoice('contribution')}>Contributions</span>
                    <span className={`detail-voice ${this.isSelected('blami') ? "active-voice" : ""}`} onClick={() => this.setSelectedVoice('blami')}>Scritta</span>
                </div>
                <div className='homeContent-text'>
                    {this.state.contentToDisplay}
                </div>

            </div>
        );
    }
}