import React, {Fragment} from 'react';
import Post from '../../component/Post/Post';
import axios from 'axios';
import './BlogPost.css';

class BlogPost extends React.Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        }
    }

    getDataAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
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

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timeStamp = new Date().getTime();
        
        formBlogPostNew['id'] = timeStamp;
        formBlogPostNew[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
        .then((result) => {
            this.getDataAPI();
        }, (err) => {
            console.log('error', err);
        })
    }

    handleSubmit = () => {
        this.postDataToAPI();
    }

    componentDidMount() {
        this.getDataAPI();
    }

    render() {
        return(
            <Fragment>
                <p className='section-title'>Blog Post</p>
                <div className="form-add-post">
                    <lable htmlFor="title">Title</lable>
                    <input type="text" name='title' placeholder='add title' onChange={this.handleFormChange}/>
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" placeholder='add body content' onChange={this.handleFormChange}></textarea>
                    <button className='btn-submit' onClick={this.handleSubmit}>Simpan</button>
                </div>
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