
import React from "react";
import { Icon, Tree } from "@blueprintjs/core";
import { Tooltip2 } from "@blueprintjs/popover2";
import { cloneDeep } from "lodash-es";

import Label from "@/components/Widget/Label";

import * as Types from '@/redux/constants/Types';

const INITIAL_STATE = {
  isVisible: {

  },
  layers: [
    {
      id: 0,
      name: "risk_index",
      hasCaret: false,
      icon: 'asterisk',
      label: (<div>Risk Index</div>
      ),
      childNodes: []
    },
    {
      id: 4,
      hasCaret: true,
      icon: 'person',
      label: (<div>Sentiment Analysis</div>),
      childNodes: [
        {
          id: 5,
          name: "sentiment_prev_30_day",
          icon: 'multi-select',
          secondaryLabel: (<Label name="sentiment_prev_30_day" icon="eye-off" />),
          label: (<div>Previous 30-Day Average</div>),
        },

        {
          id: 6,
          name: "sentiment_60_day",
          icon: 'multi-select',
          hasCaret: false,
          secondaryLabel: (<Label name="sentiment_60_day" icon="eye-off" />),
          label: (<div>Total 60-Day +/- Average</div>)
        },

        {
          id: 7,
          name: "sentiment_next_30_day",
          icon: 'multi-select',
          hasCaret: false,
          secondaryLabel: (<Label name="sentiment_next_30_day" icon="eye-off" />),
          label: (<div>Next 30-Day Average</div>)
        }
      ]
    },
    {
      id: 8,
      hasCaret: true,
      icon: 'globe',
      label: (<div>Earthquake Data (USGS)</div>),
      childNodes: [
        {
          id: 9,
          name: "earthquake_1_day",
          icon: 'map',
          secondaryLabel: (<Label name="earthquake_1_day" Icon icon="eye-off" />),
          label: (<div>Past 1 Day</div>)
        },

        {
          id: 6,
          name: "earthquake_7_days",
          icon: 'map',
          hasCaret: false,
          secondaryLabel: (<Label name="earthquake_7_days" icon={"eye-off"} />),
          label: (<div>Past 7 Days</div>)
        },

        {
          id: 7,
          name: "earthquake_30_days",
          icon: 'map',
          hasCaret: false,
          secondaryLabel: (<Label name="earthquake_30_days" icon="eye-off" />),
          label: (<div>Past 30 Days</div>)
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

    case (Types.DESELECT_ALL_LAYERS): {
      const newState = cloneDeep(state);
      forEachNode(newState.layers, node => (node.isSelected = false));
      return newState;
    }

    case (Types.SET_IS_EXPANDED_LAYERS): {
      const newState = cloneDeep(state);
      forNodeAtPath(newState.layers, action.payload.path, node => (node.isExpanded = action.payload.isExpanded));
      return newState
    }

    case (Types.SET_IS_SELECTED_LAYERS): {
      const newState = cloneDeep(state);
      forNodeAtPath(newState.layers, action.payload.path, node => {
        (node.isSelected = action.payload.isSelected)
      });
      // console.log(`and my new statei`);
      // console.log(action.payload);
      // console.log(newState);
      return newState;
    }

    case (Types.TOGGLE_VISIBILITY_LAYERS): {
      const newState = cloneDeep(state);
      if  (newState.isVisible[action.payload.name] === undefined) {
        newState.isVisible[action.payload.name] = true // true by default, since the original is false (start on false)
      } else {
        newState.isVisible[action.payload.name] = !newState.isVisible[action.payload.name] // toggle
      }
      // TODO: do something here!
      console.log(newState)
      return newState
    }


    default:
      return state;
  }
}
