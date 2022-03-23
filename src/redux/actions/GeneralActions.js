import * as Types from "@/redux/constants/Types"

export function toggleNewsSelected() {
  return {
    type: Types.TOGGLE_NEWS_SELECTED
  }
}

export function addNewMarker(latitude, longitude) {
  return {
    type: Types.ADD_NEW_MARKER,
    latitude: latitude,
    longitude: longitude
  }
}
