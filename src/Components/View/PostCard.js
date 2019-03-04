import React, { Component } from 'react';
import PostContent from '../Shared/PostContent'
import { Link } from "react-router-dom";

class PostCard extends Component {
    render() {

        const { title, author, content, tags } = this.props.post;
        let shortContent = content.split('.').slice(0,6).join('.')+'.';
        return (
            <Link className='link' to={`/post/${this.props.post.id}`}>
                <div className="card mb-3">
                    <div className="card-body p-4">
                        <div>
                        <h4>{ title }</h4>
                        <span className="font-italic">by {author}</span>

                        <br />
                        <br />
                            <p>
                                { shortContent }
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default PostCard;
