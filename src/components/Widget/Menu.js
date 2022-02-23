import React from "react";
import { Icon, Tab, Tabs } from "@blueprintjs/core";

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <Tabs
            animate={true}
            id="TabsExample"
            key={"horizontal"}
            renderActiveTabPanelOnly={true}
        >
            <Tab id="rx" title={<Icon icon="layers"/>} panel={<div>React</div>} />
            <Tab id="ng" title={<Icon icon="filter"/>} panel={<div>Angular</div>} />
            <Tab id="xg" title={<Icon icon="cog"/>} panel={<div>Menu</div>} />
        </Tabs>
      </React.Fragment>
    )
  }
}
