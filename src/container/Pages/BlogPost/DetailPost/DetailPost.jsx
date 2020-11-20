import { Fragment } from "react";
import React from 'react';
import Axios from "axios";

import './DetailPost.css';

class DetailPost extends React.Component {
    state = {
        post: {
            title: '',
            body: ''
        }
    }
    componentDidMount(){
        let id = this.props.match.params.postID
        Axios.get(`http://localhost:3004/posts/${id}`)
        .then((result) => {
            let post = result.data;
            this.setState({
                post: {
                    title: post.title,
                    body: post.body
                }
            })
        })
    }

    render() {
        return(
            <Fragment>
                <p>Detail Post</p>
                <hr/>
                <p className="detail-title">{this.state.post.title}</p>
                <p className='detail-body'>{this.state.post.body}</p>
            </Fragment>
        )
    }
}

export default DetailPost;