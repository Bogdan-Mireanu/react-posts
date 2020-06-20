import {combineReducers} from 'redux';
import postsReducer from './postReducer';
import userReducer from './userReducer';
import usersReducer from './usersReducer'

export default combineReducers({
    posts: postsReducer,
    user: userReducer,
    users: usersReducer
});