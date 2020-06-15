import React, { Component } from 'react';
// import axios from 'axios';
import { Route, Switch, NavLink } from 'react-router-dom'

import './Blog.css';
import Posts from '../Blog/Posts/Posts'
import NewPost from '../Blog/NewPost/NewPost'
import FullPost from './FullPost/FullPost'
class Blog extends Component {
    render() {


        return (
            <div className="Blog">
                <header >
                    <nav>
                        <ul >
                            <li><NavLink activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }} activeClassName="my-active" to="/" exact>Home</NavLink></li>
                            <li><NavLink activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }} to={{
                                pathname: "/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }} exact
                                activeClassName="my-active"
                            >New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/:id" exact component={FullPost} />
                </Switch>

            </div>
        );
    }
}

export default Blog;