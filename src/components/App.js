import React from 'react';
import PostList from './PostList';
import Users from './Users';
import Header from './Header';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  

const App = () => {
    return (
    <div>
        <Router>
        <Header/>
        <div className='' >
        <Switch> 
            <Route path='/posts'>
            <div className='ui container'>
               <PostList/>
            </div>
            </Route>
            <Route path='/users'><Users/></Route>
        </Switch>
        </div>
      </Router>  
    </div>
)};

export default App;