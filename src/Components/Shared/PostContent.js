import React, { Component } from 'react';

class PostCard extends Component {
    render() {

        const { title, author, content, tags } = this.props.post;

        return (
            <div>
                <h5>{ title }</h5>
                <span className="font-italic">by {author}</span>

                <br />
                <br />

                <p>
                    { content }
                </p>
            </div>
        )
    }
}

export default PostCard;
