import PostReducers from './PostReducers';
import ProductReducers from './productReducer'

import { combineReducers } from 'redux';
import SingleData from './singleData';

const rootReducer = combineReducers({
    a:PostReducers,
    b:ProductReducers,
    c:SingleData
})

export default rootReducer;