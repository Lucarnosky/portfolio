import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react';
import './FileSection.css';
import FileSocket from '../Files/FileSocket';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import HomeSection from '../EditorContents/Home';
import ContactsSection from '../EditorContents/Contacts';

export default class FileSection extends Component {

    constructor(props) {
        super(props);
        this.state = { isCollapsed: false };
    }

    toggleCollapse() {
        this.setState({ isCollapsed: !this.state.isCollapsed });
    }

    isCollapsed() {
        return this.state.isCollapsed;
    }

    setSelectedFile(fileName,section ){
        console.log(section);
        this.setState({ selectedFile: fileName });
        this.props.editorContent(section);
    }

    isSelected(fileName){
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
                    <span className="section-trigger" onClick={() => this.toggleCollapse()}><FontAwesomeIcon icon={icon} /></span>
                    <span className="file-section-header-text">{this.props.title}</span>
                    <div className={contentClass}>
                        <ul className="file-list">
                            <FileSocket name="Home" selected={this.isSelected('home')} onClick={() => this.setSelectedFile("home",<HomeSection/>)} />
                            <FileSocket name="Contacts" selected={this.isSelected('contacts')} onClick={() => this.setSelectedFile("contacts",<ContactsSection/>)} />
                            <FileSocket name="Projects" selected={this.isSelected('project')} onClick={() => this.setSelectedFile("project",'')} />
                            <FileSocket name="Blami" selected={this.isSelected('blami')} onClick={() => this.setSelectedFile("blami",'')} />

                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}
