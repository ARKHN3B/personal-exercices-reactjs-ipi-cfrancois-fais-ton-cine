import { combineReducers } from 'redux'
import DataReducers from './../data/data.reducers'

/** Import our data reducers */
export default combineReducers({
    data: DataReducers
})