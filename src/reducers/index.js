import { combineReducers } from 'redux';
import postsList from './postsList';
import singleUser from './singleUser';

export default combineReducers({
    postsList,
    singleUser
});