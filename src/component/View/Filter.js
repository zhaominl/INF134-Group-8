import React, { Component } from 'react';

class Filter extends Component {

    render() {

        const { filterSelection } = this.props;
        const filterTitle = filterSelection.charAt(0).toUpperCase() + filterSelection.slice(1);

        return (
            <div>
                <form>
                    <h4>Filter By</h4>
                    <div className="radio">
                        <label>
                            <input type="radio" value="recent"
                                   checked={filterTitle === 'Recent'}
                                   onChange={(e) => this.props.handleFilterChange(e)} />
                            <span>Recent</span>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="anxiety"
                                   checked={filterTitle === 'Anxiety'}
                                   onChange={(e) => this.props.handleFilterChange(e)} />
                           <span>Anxiety</span>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="depression"
                                   checked={filterTitle === 'Depression'}
                                   onChange={(e) => this.props.handleFilterChange(e)} />
                            <span>Depression</span>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="loss"
                                   checked={filterTitle === 'Loss'}
                                   onChange={(e) => this.props.handleFilterChange(e)} />
                            <span>Loss</span>
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}

export default Filter;
