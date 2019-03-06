import React, { Component } from 'react';
import WritePost from './WritePost'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import lgl from '../View/lgl.jpg'
import blubb from '../../blubb.png'


class WritePage extends Component {
    render() {
        return (


            <div className="container">

                <div className="row">
                    <div className="col-12 d-flex justify-content-between" id="header">
                        <div className="p-2 ml-5">
                            <img src={blubb} height="75" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex flex-row post-container">
                        <div className="col-1 p-2">
                            <Link
                                to=''
                                className='link'
                            >
                                <FontAwesomeIcon className="fa-2x" icon={faArrowCircleLeft} />
                            </Link>
                        </div>
                        <div className ="write-post-containerm col-8 p-2 align-self-center">
                            <WritePost />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default WritePage;