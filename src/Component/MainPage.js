import React, { Component } from 'react';
import { faFileCode, faCodeBranch, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icons/Icons';
import FileSection from './FileSections/FileSection';
import Editor from './Editor/Editor';

export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedOption: '',editorContent:'' };
    }

    handleSelectOption(newValue) {
        this.setState({ selectedOption: newValue});
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

    render() {
        return (
            <div className="wrapper">
                <div className="page-header">
                    <span className="menu-voice">File</span>
                    <span className="menu-voice">Modifica</span>
                    <span className="menu-voice">Selezione</span>
                </div>
                <div className="page-main">
                    <span className="icon-section">
                        <div className="top-icon">
                            <Icon icon={faFileCode} onClick={() => this.handleSelectOption("FileCode")} selected={this.isSelected("FileCode")} />
                            <Icon icon={faCodeBranch} onClick={() => this.handleSelectOption("CodeBranch")} selected={this.isSelected("CodeBranch")} />
                            <Icon icon={faMagnifyingGlass} onClick={() => this.handleSelectOption("Search")} selected={this.isSelected("Search")} />
                        </div>
                    </span>
                    <span className="left-sidebar"><FileSection title="Editor Aperti" editorContent={this.setEditorContent}/></span>
                    <Editor editorContent={this.getEditorContent()}/>
                </div>
                <div className="page-footer">
                    Footer
                </div>
            </div>
        );
    }
}