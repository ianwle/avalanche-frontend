import React from "react";
import { Icon, Tab, Tabs } from "@blueprintjs/core";
import News from "@/components/Widget/News"
import Layers from "@/components/Widget/Layers"

// import * as GeneralActions from "@/redux/actions/GeneralActions"

import { connect } from "react-redux";

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>
        <Tabs>

        </Tabs>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    GeneralReducer: state.GeneralReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    dispatchPayload: (args) => {
      dispatch(args);
    }
    // toggleNewsSelected: () => {
    //   dispatch(GeneralActions.toggleNewsSelected())
    // }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
