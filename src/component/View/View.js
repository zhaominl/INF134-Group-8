import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {faArrowCircleLeft, faEdit, faQuestionCircle} from '@fortawesome/free-solid-svg-icons'

import PostList from './PostList'
import Filter from './Filter'
import Search from './Search'

import lgl from './lgl.jpg'
import { addPost } from "../../Data/FakeData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class View extends Component {

    state = {
        filterSelection: 'Recent',
        about: false
    };

    handleFilterChange = (e) => {
        this.setState({
            filterSelection: e.target.value
        })
    };

    switchAbout = () => {
        this.setState({
            about: !this.state.about
        })
    };

    render() {
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
                        <div className="p-2 flex-grow-1">
                            <Search filterSelection={this.state.filterSelection}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex">
                        <div className='col-3 d-flex flex-column mt-5'>
                            <div>
                                <Link
                                    to='/write'
                                >
                                <button className='btn btn-primary' id="post-btn">
                                    <FontAwesomeIcon icon={faEdit} />
                                    <span>post</span>
                                </button>
                                </Link>
                                <br />
                                <br />
                                <h4><FontAwesomeIcon icon={faQuestionCircle} /> About</h4>
                                <p>
                                    PROJECT NAME is a online support platform for people to send and receive letters
                                    from new friends.
                                </p>
                                

                                <hr />
                                <Filter
                                    handleFilterChange={this.handleFilterChange}
                                    filterSelection={this.state.filterSelection}
                                />
                            </div>
                        </div>
                        <div className='col-9 d-flex'>
                            <PostList
                                title={this.state.filterSelection}
                                postList={this.props.postList}
                                findPost={this.props.findPost}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default View;
