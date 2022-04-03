import * as type from '@/redux/constants/Types';

import { cloneDeep } from "lodash-es";

const INITIAL_STATE = {
  pins: {},
  currentPin: -1,
};

export default function PinsReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case (type.ADD_PIN): {
      return state;
    }

    case (type.TOGGLE_PIN): {
      let newState = cloneDeep(state);
      newState.pins[action.payload.index].isVisible = !newState.pins[action.payload.index].isVisible;
      return newState;
    }

    default: {
      return state;
    }
  }
}
