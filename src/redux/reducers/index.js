import { combineReducers } from 'redux';
import MapReducer from './MapReducer';
import GeneralReducer from './GeneralReducer';
import LayerReducer from './LayerReducer';
import ToolReducer from './ToolReducer';

const rootReducer = combineReducers({
    GeneralReducer,
    LayerReducer,
    MapReducer,
    ToolReducer
});

export default rootReducer;
