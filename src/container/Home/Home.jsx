// library
import React, { Fragment, createContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

// pages
import BlogPost from '../Pages/BlogPost/BlogPost';
import YouTubeCompPage from '../Pages/YouTubeCompPage/YouTubeCompPage';
import Product from '../Pages/Product/Product';
import DetailPost from '../Pages/BlogPost/DetailPost/DetailPost';
import GlobalProvider from '../../context/context';

// styles
import './Home.css';
import RootConstext from '../../context/context';

class Home extends React.Component {
    render() {
        return(

            <Router>
                <Fragment>
                    <div className='link-container'>
                        <Link className='link' to='/'>Home</Link>
                        <Link className='link' to='/product'>Product</Link>
                        <Link className='link' to='/youtube'>Youtube</Link>
                    </div>
                    <Switch>
                        <Route path='/' exact component={BlogPost}></Route>
                        <Route path='/detail-post/:postID' component={DetailPost}></Route>
                        <Route path='/product' component={Product}></Route>
                        <Route path='/youtube' component={YouTubeCompPage}></Route>
                    </Switch>
                </Fragment>
            </Router>  
        )
    }
}

export default GlobalProvider(Home);