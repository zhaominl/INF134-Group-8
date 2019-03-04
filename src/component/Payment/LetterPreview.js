import React, { Component } from 'react';

class LetterPreview extends Component{

    constructor(props){
        super(props);
        this.state = {
            from : this.props.from,
            content : this.props.content,
            to : this.props.toName
        }
    }

    render(){
        return(
            <div>
                <div id="letter-preview-container">
                    <br />
                    <p>To {this.state.to},</p>
                    <br />
                    <br />
                    <p>{this.state.content}</p>
                    <br />
                    <br />
                    <p>Best regard,</p>
                    <p>{this.state.from}</p>
                </div>
            </div>
        );
    }

}

export default LetterPreview;