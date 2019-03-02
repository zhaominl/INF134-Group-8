import React, { Component } from 'react';
import PostContent from "../Shared/PostContent";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />

class Post extends Component {

    render() {
        const thisTweet = this.props.postList[this.props.match.params.id];

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-start" id="header">
                        <h3 className='p-2'>PROJECT NAME</h3>
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
            </div>
        )
    }
}

export default Post;
