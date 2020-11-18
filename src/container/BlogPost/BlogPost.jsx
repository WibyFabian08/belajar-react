import React, {Fragment} from 'react';
import Post from '../../component/Post/Post';
import axios from 'axios';
import './BlogPost.css';

class BlogPost extends React.Component {
    state = {
        post: []
    }

    getDataAPI = () => {
        axios.get('http://localhost:3004/posts')
        .then((result) => {
            this.setState({
                post: result.data
            })
        })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`)
        .then((result) => {
            this.getDataAPI();
        })
    }

    componentDidMount() {
        this.getDataAPI();
    }

    render() {
        return(
            <Fragment>
                <p className='section-title'>Blog Post</p>
                {
                    this.state.post.map(post =>  {
                        return <Post key={post.id} data={post} remove={this.handleRemove}></Post>
                    })
                }  
            </Fragment>
        )
    }
}

export default BlogPost;