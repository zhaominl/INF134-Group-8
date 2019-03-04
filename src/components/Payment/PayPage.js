import React, { Component } from 'react';
import OrderInfo from './OrderInfo';
import LetterPreview from './LetterPreview';
import { Link } from "react-router-dom";
import lgl from '../View/lgl.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

class PayPage extends Component{


    constructor(props){
        super(props);
    }

    render(){

        const thisTweet = this.props.postList[this.props.match.params.id];

        let numOfLetter = 1;

        let letterFormat = "letter";

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
                    <div className="col-12 d-flex flex-row" id="pay-title">
                        <div className="col-1 p-2">
                            <Link
                                to={`/send/${thisTweet.id}`}
                                className='link'
                            >
                                <FontAwesomeIcon className="fa-2x" icon={faArrowCircleLeft} />
                            </Link>
                        </div>
                        <h2>Letter Preview</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex flex-row">
                        <div className="col-1 p-2"></div>
                        <div className="col-7 p-2">
                            <LetterPreview 
                                from={this.props.location.from}
                                content={this.props.location.content}
                                toName={thisTweet.author}
                                />
                        </div>
                        <div className="col-4 p-2">
                            <OrderInfo
                                numOfLetter = {numOfLetter}
                                format = {letterFormat}
                                />
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12 d-flex flex-row button-group">
                    <div className="col-1 p-2"></div>
                    <div className="col-1">
                        <Link
                         to= {`/post/${thisTweet.id}`}
                         className='link'
                            >
                            <div>
                            <button className='btn btn-primary' id="cancel-btn">
                                <span>Cancel</span>
                            </button>
                            </div>
                        </Link>
                    </div>
                    <div className="col-5 p-2"></div>
                    <div className="col-1">
                        <Link
                         to= {`/post/${thisTweet.id}`}
                         className='link'
                            >
                            <div>
                            <button className='btn btn-primary' id="pay-btn">
                                <span>Pay</span>
                            </button>
                            </div>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default PayPage;