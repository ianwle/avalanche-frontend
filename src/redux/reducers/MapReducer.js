import * as type from '@/redux/constants/Types';

const INITIAL_STATE = { };

export default function MapReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case (type.BLANK): {
      return state;
    }

    default:
      return state;
  }
}