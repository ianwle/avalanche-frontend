import * as Types from '@/redux/constants/Types';

const INITIAL_STATE = {
  newsSelectedFlag: false
};

export default function MapReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case (Types.TOGGLE_NEWS_SELECTED): {
      return {
        ...state,
        newsSelectedFlag: !state.newsSelectedFlag
      }
    }

    default:
      return state;
  }
}
