import React, { Component } from 'react';
import './GithubSection.css';
import FileSocket from '../Files/FileSocket';
import jsLogo from '../../imgs/js.png';

export default class GithubSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    setSelectedFile(fileName) {
        this.setState({ selectedFile: fileName });
    }

    isSelected(fileName) {
        return this.state.selectedFile === fileName;
    }

    componentDidMount() {
        fetch("https://api.github.com/users/lucarnosky/repos")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
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
                if(item.fork === false)
                    buffer.push(item);
            });
            return (
                <ul className='file-list'>
                    
                    {buffer.map((item) => (
                        <FileSocket name={item.name} logo={jsLogo} selected={this.isSelected(item.name)} onClick={() => this.setSelectedFile(item.name)} key={item.id} />
                    ))}
                </ul>
            );
        }
    }
}
