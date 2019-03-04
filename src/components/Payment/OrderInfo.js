import React, { Component } from 'react';

class OrderInfo extends Component{

    constructor(props){
        super(props);

    }

    render(){

        let letterPrice = 0 * parseInt(this.props.numOfLetter);
        let stampPrice = 0.54 * parseInt(this.props.numOfLetter);
        let type = this.props.format;
        let totalPrice = letterPrice+ stampPrice;

        return(
            <div id="order-container">
                <div id="order-title">
                    <h3>Order Information</h3>
                </div>
                <div id="order-body">
                    <div className="row d-flex">
                        <div className="mr-auto p-2">Letter</div>
                        <div className="p-2">$ {letterPrice}</div>
                    </div>
                    <div className="row d-flex">
                        <div className="mr-auto p-2">Stamp</div>
                        <div className="p-2">$ {stampPrice}</div>
                    </div>
                </div>
                <div id="order-sum">
                    <div className="d-flex flex-row-reverse">
                        <div className="p-2">
                            <h5>$ {totalPrice}</h5>
                        </div>
                        <div className="p-2"><h5>Total</h5></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderInfo;