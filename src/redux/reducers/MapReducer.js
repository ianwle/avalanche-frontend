import * as type from '@/redux/constants/Types';

import { cloneDeep } from "lodash-es";

const INITIAL_STATE = {
  markers: [],
  currentMode: null,
  geoJson: {
    type: 'FeatureCollection',
    features: [],
  },
  selectedFeatureIndexes: [],
  currentIndex: -1,
};

export default function MapReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case (type.BLANK): {
      return state;
    }

    case (type.ADD_NEW_MARKER): {
      let newMarkers = [...state.markers]
      console.log(action.payload)
      if (newMarkers.includes({
        latitude: action.payload.latitude,
        longitude: action.payload.longitude
      })) {
        return {
          ...state
        }
      }
      newMarkers.push({
        latitude: action.payload.latitude,
        longitude: action.payload.longitude
      })
      return {
        ...state,
        markers: newMarkers
      };
    }

      // Needs to be updated
    case (type.UPDATE_MARKER): {
      let newMarkers = [...state.markers]
      newMarkers[action.index].latitude = action.payload.latitude
      newMarkers[action.index].longitude = action.payload.longitude

      return {
        ...state,
        markers: newMarkers
      }
    }

    case (type.UPDATE_MODE): {
      let newState = cloneDeep(state);
      newState.currentMode = action.payload.mode;
      return newState;
    }

    case (type.UPDATE_GEOJSON): {
      let newState = cloneDeep(state);
      newState.geoJson = action.payload.geoJson;
      return newState;
    }

    case (type.UPDATE_SELECTED_FEATURE_INDEXES): {
      let newState = cloneDeep(state);
      newState.selectedFeatureIndexes = action.payload.selectedFeatureIndexes;
      newState.currentIndex = action.payload.index;
      console.log(newState)
      return newState;
    }

    default:
      return state;
  }
}
