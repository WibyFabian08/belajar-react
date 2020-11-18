import React, {Fragment} from 'react';
import Post from '../../component/Post/Post';
import axios from 'axios';
import './BlogPost.css';

class BlogPost extends React.Component {
    state = {
        post: []
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((result) => {
            this.setState({
                post: result.data
            })
        })
    }

    render() {
        return(
            <Fragment>
                <p className='section-title'>Blog Post</p>
                {
                    this.state.post.map(post =>  {
                        return <Post key={post.id} title={post.title} desc={post.body}></Post>
                    })
                }  
            </Fragment>
        )
    }
}

export default BlogPost;