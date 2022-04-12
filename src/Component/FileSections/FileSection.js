import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react';
import './FileSection.css';
import FileSocket from '../Files/FileSocket';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import HomeSection from '../EditorContents/Home';
import ContactsSection from '../EditorContents/Contacts';
import jsLogo from '../../imgs/js.png';

export default class FileSection extends Component {

    constructor(props) {
        super(props);
        this.state = { isCollapsed: false, selectedFile: '' };
    }

    toggleCollapse() {
        this.setState({ isCollapsed: !this.state.isCollapsed });
    }

    isCollapsed() {
        return this.state.isCollapsed;
    }

    setSelectedFile(fileName, section) {
        this.setState({ selectedFile: fileName });
        this.props.editorContent(section);
    }

    isSelected(fileName) {
        return this.state.selectedFile === fileName;
    }

    render() {
        var icon = '';
        var contentClass = '';
        if (this.isCollapsed()) {
            icon = faAngleRight;
            contentClass = "file-section-content-collapsed";
        } else {
            icon = faAngleDown;
            contentClass = "file-section-content-expanded";
        }
        return (
            <div className="file-section">

                <div className="file-section-header">
                    <div className="collapsable-section" onClick={() => this.toggleCollapse()}>
                        <span className="section-trigger" ><FontAwesomeIcon icon={icon} /></span>
                        <span className="file-section-header-text">{this.props.title}</span>
                    </div>
                    <div className={contentClass}>
                        <ul className="file-list">
                            <FileSocket name="Home" logo={jsLogo} selected={this.isSelected('home')} onClick={() => this.setSelectedFile("home", <HomeSection />)} />
                            <FileSocket name="Contacts" logo={jsLogo} selected={this.isSelected('contacts')} onClick={() => this.setSelectedFile("contacts", <ContactsSection />)} />
                            <FileSocket name="Projects" logo={jsLogo} selected={this.isSelected('project')} onClick={() => this.setSelectedFile("project", '')} />
                            <FileSocket name="Offers" logo={jsLogo} selected={this.isSelected('offers')} onClick={() => this.setSelectedFile("offers", '')} />
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}
