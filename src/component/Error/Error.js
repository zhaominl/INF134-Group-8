import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import lgl from '../View/lgl.jpg'

class Error extends Component {
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
                        <div className="p-2 flex-grow-1"></div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12 d-flex flex-row post-container" >
                        <div className="col-1 p-2">
                            <Link
                                to='/'
                                className='link'
                            >
                                <FontAwesomeIcon className="fa-2x" icon={faArrowCircleLeft} />
                            </Link>
                        </div>
                        <div className="col-8 p-0">
                          <h2>The Page Does NOT Exist</h2>
                          <br/>
                          <h6>Click BACK arrow to navigate to the homepage</h6>
                        </div>
                    </div>
                </div>
            </div>
    )
  }
}

export default Error;
