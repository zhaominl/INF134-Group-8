import React, { Component } from 'react';
import LetterContent from "./LetterContent";
import PostContent from '../Shared/PostContent'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import lgl from '../View/lgl.jpg'

// const element = <FontAwesomeIcon icon={faCoffee} />

class Send extends Component {

    constructor(props){
        super(props);
        this.state = {
            from : '',
            content: ''
        }
    }

    handleFrom(fromName){
        this.setState({from:fromName});
    }

    handleContent(letterContent){
        this.setState({content:letterContent});
    }

    render() {
        const thisTweet = this.props.postList[this.props.match.params.id];

        return (
            <div className="container">
         
                <div className="row">
                    <div className="col-12 d-flex justify-content-between" id="header">
                        <div className="p-2">
                            <img src={lgl} height="55" />
                        </div>
                        <div className="d-flex h-100">
                            <span className='p-2 justify-content-center align-self-center'>PROJECT NAME</span>
                        </div>
                        <div className="p-2 flex-grow-1"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex flex-row post-container">
                        <div className="col-1 p-2">
                            <Link
                                to={`/post/${thisTweet.id}`}
                                className='link'
                            >
                                <FontAwesomeIcon className="fa-2x" icon={faArrowCircleLeft} />
                            </Link>
                        </div>
                        <div className="col-5 p-2">
                            <PostContent post={thisTweet}/>
                        </div>
                        <div className="col-1 p-2"></div>
                        <div className="col-5 p-2">
                            <LetterContent className="p-2" onChangeFrom={this.handleFrom.bind(this)} onChangeContent={this.handleContent.bind(this)} post={thisTweet}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex flex-row-reverse">
                    <div className="p-2"></div>
                        <Link
                         to={{
                            pathname:`/send/${thisTweet.id}/pay`,
                            from:this.state.from,
                            content:this.state.content}}
                         className='link'
                            >
                            <div id="send-btn-container">
                            <button className='btn btn-primary' id="send-letter-btn">
                                <span>send</span>
                            </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Send;
