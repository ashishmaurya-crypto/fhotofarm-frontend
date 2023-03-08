import { combineReducers } from 'redux';
import changeName from './addName'

const reducerRoot = combineReducers({
    changeName : changeName
});

export default reducerRoot;