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

    default:
      return state;
  }
}
