import React from "react";
import { Classes, H6, Tree } from "@blueprintjs/core";

import { connect } from "react-redux";

import * as Types from "@/redux/constants/Types"


// This needs to be a React component because
// we cannot violate the Rule of Hooks. Need to use
// a callback.
function Layers(props) {
  const handleNodeClick = React.useCallback(
    (node, nodePath, evt) => {
      const originallySelected = node.isSelected;
      if (!evt.shiftKey) {
        props.dispatchPayload({
          type: Types.DESELECT_ALL_LAYERS
        });
      }

      props.dispatchPayload({
        type: Types.SET_IS_SELECTED_LAYERS,
        payload: {
          path: nodePath,
          isSelected: originallySelected == null ? true : !originallySelected
        }
      });

      console.log(props);
    }
  );

  const handleNodeCollapse = React.useCallback(
    (_node, nodePath) => {
      props.dispatchPayload({
        type: Types.SET_IS_EXPANDED_LAYERS,
        payload: {
          path: nodePath,
          isExpanded: false
        }
      });
    }
  );

  const handleNodeExpand = React.useCallback(
    (_node, nodePath) => {
      props.dispatchPayload({
        type: Types.SET_IS_EXPANDED_LAYERS,
        payload: {
          path: nodePath,
          isExpanded: true
        }
      });
    }
  );


  return (
    <React.Fragment>
      <H6>Layers</H6>
        <Tree
          contents={props.LayerReducer.layers}
          onNodeClick={handleNodeClick}
          onNodeCollapse={handleNodeCollapse}
          onNodeExpand={handleNodeExpand}
          className={Classes.ELEVATION_0}
        />
    </React.Fragment>
  );


}

const mapStateToProps = (state) => {
  console.log(state)
  return {
      GeneralReducer: state.GeneralReducer,
      LayerReducer: state.LayerReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
      dispatchPayload: (args) => {
        dispatch(args)
      },
      // toggleNewsSelected: () => {
      //     dispatch(GeneralActions.toggleNewsSelected())
      // },
      // addNewMarker: (latitude, longitude) => {
      //     dispatch(GeneralActions.addNewMarker(latitude, longitude))
      // },
      // deselectAll: () => {
      //   dispatch(LayerActions.deselectAll());
      // }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Layers);
