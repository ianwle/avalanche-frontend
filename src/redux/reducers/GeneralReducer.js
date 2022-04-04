import * as Types from '@/redux/constants/Types';

const INITIAL_STATE = {
  newsSelectedFlag: false,
  maxHeight: -1,
};

export default function MapReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case (Types.TOGGLE_NEWS_SELECTED): {
      return {
        ...state,
        newsSelectedFlag: !state.newsSelectedFlag
      }
    }

    case (Types.UPDATE_MAX_HEIGHT): {
      return {
        ...state,
        maxHeight: action.payload.height
      }
    }

    default:
      return state;
  }
}
