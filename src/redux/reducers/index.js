import { combineReducers } from 'redux';
import MapReducer from './MapReducer';
import GeneralReducer from './GeneralReducer';
import LayerReducer from './LayerReducer';

const rootReducer = combineReducers({
    GeneralReducer,
    MapReducer,
    LayerReducer
});

export default rootReducer;
