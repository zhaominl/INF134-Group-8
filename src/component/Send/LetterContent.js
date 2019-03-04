import React, { Component } from 'react';

class LetterContent extends Component {
    
    constructor(){
        super();
        this.state = {
            from : '',
            content : ''
        }
    }

    updateFrom(event) {
        this.setState({from: event.target.value})
        this.props.onChangeFrom(this.state.from);
    }

    updateContent(event) {
        this.setState({content: event.target.value})
        this.props.onChangeContent(this.state.content);
    }

    render() {
        
        const { title, author, content, tags } = this.props.post;
        return (
            <div className="expandField">
                <h4>Write Your Letter</h4>
                <span className="font-italic">Write your personalized letter for {author}</span>

                <br />
                <br />
                <h6>From</h6>
                <input type='text'
                    value={this.state.from}
                    onChange = {this.updateFrom.bind(this)}
                    className = "inputField" 
                />
                <br />
                <br />
                <h6>Message</h6>
                <textarea
                    value={this.state.content}
                    onChange = {this.updateContent.bind(this)}
                    className = "inputField textField" 
                />
                <br />
                <br />

            </div>
        )
    }
}

export default LetterContent;