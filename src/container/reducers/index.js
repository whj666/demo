import {combineReducers} from 'redux';
import {common, dispatch, prediction, map} from './reducerAll';

export default combineReducers({
    common,
    dispatch,
    prediction,
    map
})