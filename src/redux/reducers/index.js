import { combineReducers } from 'redux';
import MapReducer from './MapReducer';
import GeneralReducer from './GeneralReducer';
import LayerReducer from './LayerReducer';
import ToolReducer from './ToolReducer';
import PinsReducer from './PinsReducer';

const rootReducer = combineReducers({
    GeneralReducer,
    LayerReducer,
    MapReducer,
    ToolReducer,
    PinsReducer,
});

export default rootReducer;
