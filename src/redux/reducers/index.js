import { combineReducers } from 'redux';
import MapReducer from './MapReducer'
import GeneralReducer from './GeneralReducer'

const rootReducer = combineReducers({
    GeneralReducer,
    MapReducer,
});

export default rootReducer;
