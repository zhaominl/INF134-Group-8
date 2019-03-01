import React, { Component } from 'react';
import PostContent from '../Shared/PostContent'
import { Link } from "react-router-dom";

class PostCard extends Component {
    render() {
        return (
            <Link className='link' to={`/post/${this.props.post.id}`}>
                <div className="card mb-3">
                    <div className="card-body p-4">
                        <PostContent post={this.props.post}/>
                    </div>
                </div>
            </Link>
        )
    }
}

export default PostCard;
