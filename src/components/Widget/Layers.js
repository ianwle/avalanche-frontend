import React from "react";
import { H6, Tree } from "@blueprintjs/core";

import * as GeneralActions from "@/redux/actions/GeneralActions"
// import * as LayerActions from "@/redux/actions/LayerActions"
import { connect } from "react-redux";

class Layers extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <React.Fragment>
        <H6>Seismic Information</H6>
        <Tree
          contents={this.props.LayerReducer.layers}
          // onNodeClick={handleNodeClick}
          // onNodeCollapse={handleNodeCollapse}
          // onNodeExpand={handleNodeExpand}
          // className={Classes.ELEVATION_0}
        />
      </React.Fragment>
    );
  }
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
      toggleNewsSelected: () => {
          dispatch(GeneralActions.toggleNewsSelected())
      },
      addNewMarker: (latitude, longitude) => {
          dispatch(GeneralActions.addNewMarker(latitude, longitude))
      }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Layers);
