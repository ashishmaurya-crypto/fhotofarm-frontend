import { combineReducers } from 'redux';
import changeName from './addName'
import sideBar from './sideBar';

const reducerRoot = combineReducers({
    changeName : changeName,
    sideBar : sideBar
});

export default reducerRoot;