import * as type from '@/redux/constants/Types';

import { cloneDeep } from "lodash-es";

const INITIAL_STATE = {
  pins: [],
  pinsVisible: [],
  pinsDetails: [],
  currentPin: -1,
};

export default function PinsReducer (state = INITIAL_STATE, action) {
  swtich (action.type) {
    case (type.ADD_PIN): {

    }

    case (type.TOGGLE_PIN): {
      let newState = cloneDeep(state);
      newState.pinsVisible[action.payload.index] = !newState.pinsVisible[action.payload.index];
      return newState;
    }

    default: {
      return state;
    }
  }
}
