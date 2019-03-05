import React, { Component } from 'react';
import PostContent from '../Shared/PostContent'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class WritePost extends Component {

    constructor(props){
        super(props);
        this.state={
            name: '',
            address_line:'',
            city: '',
            state: '',
            zip: '',
            tags: [],
            title: "",
            content: "",
            currentTag: "anxiety"
        }
    }

    postStory(){
        console.log("post be sent");
    }

    handleTagChange(e){
        this.setState({
            currentTag: e.target.value
        });
    }

    pushTag(tag){
        this.setState({
            tags: (this.state.tags.includes(tag))? this.state.tags: this.state.tags.concat(tag)
        });
    }

    removeTag(tag){
        let index = this.state.tags.indexOf(tag);
        let copytags = this.state.tags;
        if (index > -1) {
            copytags.splice(index, 1);
        }
        this.setState({
            tags: copytags
        });
    }

    render() {

        return (
            <div className="post-form">
                <div className="post-form-title row">
                    <div className="col-3"></div>
                    <div className="col-6" style={{textAlign:'center'}}>
                        <h4>Write Your Story</h4>
                    </div>
                    <div className="col-3"></div>
                </div>
                <div className="post-form-body">
                    <form>

                        <div className="row d-flex justify-content-center post-form-entry">
                            <div className="col-3 form-row-title">
                                <span>Nickname</span>
                            </div>
                            <div className="col-9 form-row-input">
                                <input type='text'
                                    value={this.state.name}
                                    onChange = {e=> this.setState({name: e.target.value})}
                                    className = "inputField" 
                                />
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center post-form-entry-plus">
                            <div className="col-3 form-row-title">
                                <span>Tags</span>
                            </div>
                            <div className="col-9 form-row-input">
                                <div className="input-group mb-3">
                                    <select className="custom-select" value={this.state.currentTag} onChange={this.handleTagChange.bind(this)} id="tagSelect">
                                        <option value="anxiety">Anxiety</option>
                                        <option value="depression">Depression</option>
                                        <option value="loss">Loss</option>
                                    </select>
                                    <div className="input-group-append">
                                        <label className="input-group-text" onClick={()=>this.pushTag(this.state.currentTag)}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </label>
                                    </div>
                                </div>
                                <span>
                                    {
                                        this.state.tags.map((tag, i) =>
                                        <div className="chip" key={i}>
                                            {tag}
                                            <span className="closebtn" key={i} onClick={()=>this.removeTag(tag)}>&times;</span>
                                        </div>
                                        )
                                    }
                                </span>

                            </div>
                        </div>

                        <div className="row d-flex justify-content-center post-form-entry">
                            <div className="col-3 form-row-title-bold">
                                <span>Post Title</span>
                            </div>
                            <div className="col-9 form-row-input">
                                <input type='text'
                                    value={this.state.name}
                                    onChange = {e=> this.setState({title: e.target.value})}
                                    className = "inputField" 
                                />
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center post-form-entry-plus">
                            <div className="col-3 form-row-title-bold post-content-text">
                                <span>Post Content</span>
                            </div>
                            <div className="col-9 form-row-input">
                                <textarea type='text'
                                    value={this.state.name}
                                    onChange = {e=> this.setState({content: e.target.value})}
                                    className = "inputField textField post-content-textarea" 
                                />
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center post-form-entry">
                            <div className="col-3 form-row-title">
                                <span>Address</span>
                            </div>
                            <div className="col-9 form-row-input">
                                <textarea type='text'
                                    value={this.state.name}
                                    onChange = {e=> this.setState({address_line: e.target.value})}
                                    className = "inputField textField" 
                                />
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center post-form-entry">
                            <div className="col-3 form-row-title">
                                <span>City</span>
                            </div>
                            <div className="col-9 form-row-input">
                                <input type='text'
                                    value={this.state.name}
                                    onChange = {e=> this.setState({city: e.target.value})}
                                    className = "inputField" 
                                />
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center post-form-entry">
                            <div className="col-3 form-row-title">
                                <span>State</span>
                            </div>
                            <div className="col-9 form-row-input">
                                <input type='text'
                                    value={this.state.name}
                                    onChange = {e=> this.setState({state: e.target.value})}
                                    className = "inputField" 
                                />
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center post-form-entry">
                            <div className="col-3 form-row-title">
                                <span>Zip</span>
                            </div>
                            <div className="col-9 form-row-input">
                                <input type='text'
                                    value={this.state.name}
                                    onChange = {e=> this.setState({zip: e.target.value})}
                                    className = "inputField" 
                                />
                            </div>
                        </div>

                    </form>
                </div>

                <div className="post-form-button row d-flex flex-row-reverse">
                    <div className="col-1"></div>
                    <button className='btn btn-primary' onClick={this.postStory.bind(this)} id="post-form-btn">
                        <span>post</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default WritePost;