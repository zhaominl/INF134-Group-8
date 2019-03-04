import React, { Component } from 'react';

class Search extends Component {
    state = {
        text: ''
    };

    render() {
        const pht = `Search ${this.props.filterSelection}`;

        return (
            <div className="float-right">
                <input
                    type='text'
                    placeholder={pht}
                    className="pl-2"
                />
            </div>
        )
    }
}

export default Search;
