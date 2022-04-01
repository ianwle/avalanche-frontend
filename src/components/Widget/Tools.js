import React from "react";
import { Classes, H6, Tree } from "@blueprintjs/core";

import { connect } from "react-redux";

import * as Types from "@/redux/constants/Types"


// This needs to be a React component because
// we cannot violate the Rule of Hooks. Need to use
// a callback.
function Tools(props) {
  const handleNodeClick = React.useCallback(
    (node, nodePath, evt) => {
      const originallySelected = node.isSelected;
      props.dispatchPayload({
        type: Types.DESELECT_ALL_TOOLS
      });

      props.dispatchPayload({
        type: Types.SET_IS_SELECTED_TOOLS,
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
        type: Types.SET_IS_EXPANDED_TOOLS,
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
        type: Types.SET_IS_EXPANDED_TOOLS,
        payload: {
          path: nodePath,
          isExpanded: true
        }
      });
    }
  );


  return (
    <React.Fragment>
      <H6>Tools</H6>
        <Tree
          contents={props.ToolReducer.tools}
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
      ToolReducer: state.ToolReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
      dispatchPayload: (args) => {
        dispatch(args)
      },
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Tools);
