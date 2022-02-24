import React from "react";

/* Redux */
import { connect } from "react-redux";
import * as GeneralActions from "@/redux/actions/GeneralActions"
class News extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <p>I am a fragment of my imagination.</p>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    generalState: state.GeneralState
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    toggleNewsSelected: () => {
      dispatch(GeneralActions.toggleNewsSelected())
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
