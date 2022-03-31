import React from "react";
import { H6, Tree } from "@blueprintjs/core";


export default class Layers extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <H6>Seismic Information</H6>
        {/* <Tree
          contents={nodes}
          onNodeClick={handleNodeClick}
          onNodeCollapse={handleNodeCollapse}
          onNodeExpand={handleNodeExpand}
          className={Classes.ELEVATION_0}
        /> */}
      </React.Fragment>
    );
  }
}
