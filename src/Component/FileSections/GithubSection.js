import React, { Component } from "react";
import "./GithubSection.css";
import FileSocket from "../Files/FileSocket";
import ghLogo from "../../imgs/gh.png";
import ReactMarkdown from "react-markdown";

export default class GithubSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      markdown: "",
    };
  }

  setSelectedFile(fileName) {
    if(this.state.selectedFile === fileName) 
        return;
    this.setState({ selectedFile: fileName });
    fetch(
      "https://raw.githubusercontent.com/Lucarnosky/" +
        fileName +
        "/main/README.md"
    )
      .then((res) => res.text())
      .then((text) => {
        this.setState({ markdown: text });
        this.props.editorContent(
          <div className="markdown-display"><ReactMarkdown  children={this.state.markdown} /></div>
        );
      });
  }

  isSelected(fileName) {
    return this.state.selectedFile === fileName;
  }

  componentDidMount() {
    fetch("https://api.github.com/users/lucarnosky/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      var buffer = [];
      items.forEach(function (item) {
        if (item.fork === false) buffer.push(item);
      });
      return (
        <div className="file-section">
          <div className="file-section-header">
            <span className="file-section-header-text">Github - My Repos</span>
          </div>
          <div className="file-section-content-expanded">
            <ul className="file-list">
              {buffer.map((item) => (
                <FileSocket
                  name={item.name}
                  logo={ghLogo}
                  selected={this.isSelected(item.name)}
                  onClick={() => this.setSelectedFile(item.name)}
                  key={item.id}
                />
              ))}
            </ul>
          </div>
          <div className="file-section-header">
            <span className="file-section-header-text">
              Github - My Contributions
            </span>
          </div>
          <div className="file-section-content-expanded">
            <ul className="file-list"></ul>
          </div>
        </div>
      );
    }
  }
}
