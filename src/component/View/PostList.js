import React, { Component } from 'react';
import PostCard from './PostCard';

class PostList extends Component {

    renderPosts = () => {
        const { postList } = this.props;

        let posts = [];
        for (let post in postList) {
            if (postList[post].tags.includes(this.props.title.toLowerCase())) {
                posts.push(
                    <PostCard
                        key={post}
                        post={postList[post]}
                    />
                )
            }
        }

        return posts;
    };

    render() {
        const { title } = this.props;

        const filterTitle = title.charAt(0).toUpperCase() + title.slice(1);

        return (
            <div className="container">
                <h1>{filterTitle}</h1>
                { this.renderPosts() }
            </div>
        )
    }
}

export default PostList;
