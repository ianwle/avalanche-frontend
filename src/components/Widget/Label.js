import React from "react";
import { Icon } from "@blueprintjs/core";
import * as Types from '@/redux/constants/Types';



import { connect } from "react-redux";


function Label(props) {

  return (
      <Icon icon={props.icon} onClick={() => {
        props.dispatchPayload({
          type: Types.TOGGLE_VISIBILITY_LAYERS
        })
      }}/>
  );
}

const mapStateToProps = (state) => {
  // console.log(state)
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
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Label);
