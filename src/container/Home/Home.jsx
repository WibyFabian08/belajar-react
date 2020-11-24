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

// styles
import './Home.css';

// context
export const RootContext = createContext();
const Provider = RootContext.Provider;

class Home extends React.Component {
    state = {
        totalOrder: 0
    }

    dispatch = (action) => {
        if(action.type === 'PLUS_ORDER') {
            return this.setState({
                totalOrder: this.state.totalOrder + 1
            })
        } 

        if(action.type === 'MINUS_ORDER') {
            if(this.state.totalOrder > 0) {
                return this.setState({
                    totalOrder: this.state.totalOrder - 1
                })
            }
        } 
    }

    render() {
        return(
            <Router>
                <Fragment>
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                        }>
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
                    </Provider>
                </Fragment>
            </Router>  
        )
    }
}

export default Home;