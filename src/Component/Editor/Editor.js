import React, { Component } from 'react';
import './Editor.css';

export default class File extends Component {

    render(){
        return(
            <span className="editor-section">{this.props.editorContent}</span>
        );
    }
}