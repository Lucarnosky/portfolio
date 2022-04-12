import React, { Component } from 'react';
import { faFileCode, faCodeBranch, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icons/Icons';
import FileSection from './FileSections/FileSection';
import GithubSection from './FileSections/GithubSection';
import Editor from './Editor/Editor';

export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedOption: '',editorContent:'',leftBarContent:'' };
    }

    handleSelectOption(newValue,leftBarContent) {
        this.setState({ selectedOption: newValue,leftBarContent:leftBarContent });
    }

    isSelected(value) {
        return value === this.state.selectedOption;
    }

    getEditorContent(){
        return this.state.editorContent;
    }

    setEditorContent = (content) =>{
        this.setState({editorContent:content});
    }

    setLeftContent = (content) =>{
        this.setState({leftBarContent:content});
    }

    getLeftContent(){
        return this.state.leftBarContent;
    }

    render() {
        return (
            <div className="wrapper">
                <div className="page-header">
                    <span className="menu-voice">File</span>
                    <span className="menu-voice">Edit</span>
                    <span className="menu-voice">Select</span>
                </div>
                <div className="page-main">
                    <span className="icon-section">
                        <div className="top-icon">
                            <Icon icon={faFileCode} onClick={() => this.handleSelectOption("FileCode",<FileSection title="Open Pages" editorContent={this.setEditorContent}/>)} selected={this.isSelected("FileCode")} />
                            <Icon icon={faCodeBranch} onClick={() => this.handleSelectOption("CodeBranch",<GithubSection/>)} selected={this.isSelected("CodeBranch")} />
                            <Icon icon={faMagnifyingGlass} onClick={() => this.handleSelectOption("Search",'')} selected={this.isSelected("Search")} />
                        </div>
                    </span>
                    <span className="left-sidebar">{this.getLeftContent()}</span>
                    <Editor editorContent={this.getEditorContent()}/>
                </div>
                <div className="page-footer">
                    Footer
                </div>
            </div>
        );
    }
}