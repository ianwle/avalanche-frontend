
import React from "react";
import { Icon, Tree } from "@blueprintjs/core";
import { Tooltip2 } from "@blueprintjs/popover2";
import { cloneDeep } from "lodash-es";

import Label from "@/components/Widget/Label";

import * as Types from '@/redux/constants/Types';

const INITIAL_STATE = {
  layers: [
    {
      id: 0,
      hasCaret: true,
      icon: 'asterisk',
      label: (<div>Risk Index</div>
      ),
      childNodes: [
        {
          id: 1,
          icon: 'numerical',
          hasCaret: false,
          secondaryLabel: (
            <Label icon="eye-on"/>
          ),
          label: (<div>Variable 1</div>)
        },

        {
          id: 2,
          icon: 'numerical',
          hasCaret: false,
          secondaryLabel: (
            <Icon icon="eye-on" />
          ),
          label: (<div>Variable 2</div>)
        },

        {
          id: 3,
          icon: 'numerical',
          hasCaret: false,
          secondaryLabel: (
            <Icon icon="eye-on" />
          ),
          label: (<div>Variable 3</div>)
        }
      ]
    },
    {
      id: 4,
      hasCaret: true,
      icon: 'person',
      label: (<div>Sentiment Analysis</div>),
      childNodes: [
        {
          id: 5,
          icon: 'multi-select',
          secondaryLabel: (
            <Icon icon="eye-on" />
          ),
          label: (<div>Previous 30-Day Average</div>)
        },

        {
          id: 6,
          icon: 'multi-select',
          hasCaret: false,
          secondaryLabel: (
            <Icon icon="eye-on" />
          ),
          label: (<div>Total 60-Day +/- Average</div>)
        },

        {
          id: 7,
          icon: 'multi-select',
          hasCaret: false,
          secondaryLabel: (
            <Icon icon="eye-on" />
          ),
          label: (<div>Next 30-Day Average</div>)
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
      forEachNode(newState.layers, node => (node.isSelected = false));
      return newState;
    }

    case (Types.SET_IS_EXPANDED): {
      const newState = cloneDeep(state);
      forNodeAtPath(newState.layers, action.payload.path, node => (node.isExpanded = action.payload.isExpanded));
      return newState
    }

    case (Types.SET_IS_SELECTED): {
      const newState = cloneDeep(state);
      forNodeAtPath(newState.layers, action.payload.path, node => {
        (node.isSelected = action.payload.isSelected)
      });
      console.log(`and my new statei`);
      console.log(action.payload);
      console.log(newState);
      return newState;
    }

    case (Types.TOGGLE_VISIBILITY): {
      const newState = cloneDeep(state);
      // TODO: do something here!
      return newState
    }

    default:
      return state;
  }
}
