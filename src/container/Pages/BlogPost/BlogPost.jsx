import React, {Fragment} from 'react';
import Post from '../../../component/Post/Post';
import axios from 'axios';
import './BlogPost.css';
import {GlobalConsumer} from '../../../context/context';
import API from '../../../services';

class BlogPost extends React.Component {
    state = {
        post: [], // untuk menampung semua data hasil getDataAPI
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false,
        comments: []
    }

    // mengambil data dari API
    getDataAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                post: result
            })
        })
        API.getComments().then(result => {
            this.setState({
                comments: result
            })
        })
    }

    // me-mounting data hasil dari getDataAPI
    componentDidMount() {
        this.getDataAPI();
    }

    // menghapus data dari API
    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`)
        .then((result) => {
            this.getDataAPI();
        })
    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
        
    }

    // mengupdate / edit data API
    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
        .then((result) => {
            console.log(result);
            this.getDataAPI();

            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        })
    }

    // fungsi update data API
    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timeStamp = new Date().getTime();
        
        if(!this.state.isUpdate) {
            formBlogPostNew['id'] = timeStamp;
        }

        // target name adalah name dari setiap form input
        formBlogPostNew[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    // post data pada API
    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
        .then((result) => {
            this.getDataAPI();

            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        }, (err) => {
            console.log('error', err);
        })
    }

    // mengganti tombol simpan atau tombol update
    handleSubmit = () => {
        if(this.state.isUpdate) {
            this.putDataToAPI();
        } else {
            this.postDataToAPI();
        }
    }

    // fungsi ini hanya untuk tempat perpindahan halaman / seperti route
    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    }

    render() {
        return(
            <Fragment>
                <p>Halaman Blog Post</p>
                <hr/>
                <p className='section-title'>Blog Post</p>
                <div className="form-add-post">
                    <lable htmlFor="title">Title</lable>
                    <input value={this.state.formBlogPost.title} type="text" name='title' placeholder='add title' onChange={this.handleFormChange}/>
                    <label htmlFor="body">Blog Content</label>
                    <textarea value={this.state.formBlogPost.body} name="body" id="body" cols="30" rows="10" placeholder='add body content' onChange={this.handleFormChange}></textarea>
                    <button className='btn-submit' onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.comments.map(comment => {
                        return <p>{comment.name} - {comment.email}</p>
                    })
                }
                {
                    this.state.post.map(post =>  {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}></Post>
                    })
                }
                <hr/> 
                <p>Total Order = {this.props.state.totalOrder}</p>
        </Fragment>
        )
    }
}

export default GlobalConsumer(BlogPost);