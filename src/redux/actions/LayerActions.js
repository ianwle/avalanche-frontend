import * as Types from "@/redux/constants/Types"

export function toggleNewsSelected() {
  return {
    type: Types.TOGGLE_NEWS_SELECTED
  }
}

export function addNewMarker(latitude, longitude) {
  return {
    type: Types.ADD_NEW_MARKER,
    payload: {
      latitude: latitude,
      longitude: longitude
    }
  }
}

export function deselectAll() {
  return {
    type: Types.DESELECT_ALL,
    payload: {

    }
  }
}

export function setIsExpanded() {
  return {
    type: Types.SET_IS_EXPANDED
  }
}

export function setIsSelected() {
  return {
    type: Types.SET_IS_SELECTED
  }
}
