import React, { Component } from 'react';
import PostContent from "../Shared/PostContent";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import lgl from '../View/lgl.jpg'

// const element = <FontAwesomeIcon icon={faCoffee} />

class Post extends Component {

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
                    <div className="col-12 d-flex flex-row" id="post-container">
                        <div className="col-1 p-2">
                            <Link
                                to='/'
                                className='link'
                            >
                                <FontAwesomeIcon className="fa-2x" icon={faArrowCircleLeft} />
                            </Link>
                        </div>
                        <PostContent post={thisTweet}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex flex-row">
                    <div className="col-1 p-0"></div>
                        <Link
                         to={`/send/${thisTweet.id}`}
                            >
                            <div id="send-btn-container">
                            <button className='btn btn-primary' id="send-btn">
                                <span>send letter</span>
                            </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;
