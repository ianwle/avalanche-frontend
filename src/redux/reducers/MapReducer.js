import * as type from '@/redux/constants/Types';

const INITIAL_STATE = {
  markers: []
};

export default function MapReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case (type.BLANK): {
      return state;
    }

    case (type.ADD_NEW_MARKER): {
      let newMarkers = [...state.markers]
      console.log(action)
      newMarkers.push({
        latitude: action.latitude,
        longitude: action.longitude
      })
      return {
        ...state,
        markers: newMarkers
      };
    }

      // Needs to be updated
    case (type.UPDATE_MARKER): {
      let newMarkers = [...state.markers]
      newMarkers[action.index].latitude = action.latitude
      newMarkers[action.index].longitude = action.longitude

      return {
        ...state,
        markers: newMarkers
      }
    }

    default:
      return state;
  }
}
