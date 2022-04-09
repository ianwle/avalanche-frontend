import React from "react";
import { Icon } from "@blueprintjs/core";
import * as Types from '@/redux/constants/Types';



import { connect } from "react-redux";


function Label(props) {

  return (
      <Icon icon={(() => {
        if (props.LayerReducer.isVisible[props.name] === undefined || props.LayerReducer.isVisible[props.name] === false) {
          return "eye-off";
        }
        return "eye-on";
      })()} onClick={() => {
        props.dispatchPayload({
          type: Types.TOGGLE_VISIBILITY_LAYERS,
          payload: {
            name: props.name
          }
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
