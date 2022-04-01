
import React from "react";
import { ContextMenu2 } from "@blueprintjs/popover2";
import { cloneDeep } from "lodash-es";

import { Tree } from "@blueprintjs/core";

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
      label: (<div>Hello there 2</div>),
      childNodes: [
        {
          id: 2,
          label: (<div>easy motherfucking e</div>)
        }
      ]
    }
  ]
};

function forEachNode(nodes, callback) {
  if (nodes === undefined) {
    return;
  }

  for (const node of nodes) {
    callback(node);
    forEachNode(node.childNodes, callback);
  }
}

function forNodeAtPath(nodes, path, callback) {
  callback(Tree.nodeFromPath(path, nodes));
}

export default function MapReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case (Types.HIDE_LAYER): {
      return {
        ...state,
        newsSelectedFlag: !state.newsSelectedFlag
      }
    }

    case (Types.DESELECT_ALL): {
      const newState = cloneDeep(state);
      forEachNode(state.layers, node => (node.isSelected = false));
      return newState;
    }

    case (Types.SET_IS_EXPANDED): {
      const newState = cloneDeep(state);
      forNodeAtPath(state.layers, action.payload.path, node => (node.isExpanded = action.payload.isExpanded));
      return newState
    }

    case (Types.SET_IS_SELECTED): {

      const newState = cloneDeep(state);
      forNodeAtPath(state.layers, action.payload.path, node => (node.isSelected = action.payload.isSelected));
      console.log("and my new stateis {}".format(newState));
      return newState;
    }

    default:
      return state;
  }
}
