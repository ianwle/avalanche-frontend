
import React from "react";
import { ContextMenu2 } from "@blueprintjs/popover2";

import * as Types from '@/redux/constants/Types';

const INITIAL_STATE = {
  layers: [
    {
      id: 0,
      hasCaret: true,
      icon: 'folder-open',
      label: (
        <ContextMenu2 content={<div>Hello there!</div>}>
        Folder 0
        </ContextMenu2>
      )
    },
    {
      id: 1,
      hasCaret: true,
      label: (<p>Hi</p>)
    }
  ]
};

export default function MapReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case (Types.HIDE_LAYER): {
      return {
        ...state,
        newsSelectedFlag: !state.newsSelectedFlag
      }
    }

    default:
      return state;
  }
}
