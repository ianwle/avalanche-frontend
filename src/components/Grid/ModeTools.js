import React from 'react';
import { connect } from "react-redux";
import { Button } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";

import * as Types from "@/redux/constants/Types";

const INTENT_COLOR = "primary";
class ModeTools extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isControlled: false,
      isEditMode: false
    }
  }

  render() {
    return (
      <React.Fragment>
        <Button style={{"marginBottom":5}} icon="eye-open" minimal={false} intent={INTENT_COLOR} onClick={() => {
            this.props.dispatchPayload({
              type: Types.UPDATE_MODE,
              payload: {
                mode: "ViewMode"
              }
            })}}></Button>

        <Button style={{"marginBottom":5}} icon="dot" minimal={false} intent={INTENT_COLOR} onClick={() => {
            this.props.dispatchPayload({
              type: Types.UPDATE_MODE,
              payload: {
                mode: "DrawPointMode"
              }
            })}}></Button>

        <Button style={{"marginBottom":5}} icon="edit" minimal={false} intent={INTENT_COLOR} onClick={() => {
            this.props.dispatchPayload({
              type: Types.UPDATE_MODE,
              payload: {
                mode: "TransformMode"
              }
            })}}></Button>
        <Button style={{"marginBottom":5}} icon="circle" minimal={false} intent={INTENT_COLOR} onClick={() => {
            this.props.dispatchPayload({
              type: Types.UPDATE_MODE,
              payload: {
                mode: "DrawCircleFromCenterMode"
              }
            })
            }}></Button>
        <Button style={{"marginBottom":5}} icon="square" minimal={false} intent={INTENT_COLOR} onClick={() => {
            this.props.dispatchPayload({
              type: Types.UPDATE_MODE,
              payload: {
                mode: "DrawRectangleMode"
              }
            })
            }}></Button>
        <Popover2 content={(
          <React.Fragment>
            <Button style={{"marginRight":5}} icon="shapes" minimal={false} intent={INTENT_COLOR} onClick={() => {
            this.props.dispatchPayload({
              type: Types.UPDATE_MODE,
              payload: {
                mode: "DrawPolygonByDraggingMode"
              }
            })}}></Button>
            <Button style={{"marginRight":5}} icon="new-link" minimal={false} intent={INTENT_COLOR} onClick={() => {
            this.props.dispatchPayload({
              type: Types.UPDATE_MODE,
              payload: {
                mode: "DrawPolygonMode"
              }
            })}}></Button>

          </React.Fragment>
        )}>
          <Button style={{"marginBottom":5}} icon="polygon-filter" minimal={false} intent={INTENT_COLOR}></Button>
        </Popover2>
        <Button style={{"marginBottom":5}} icon="minus" minimal={false} intent={INTENT_COLOR} onClick={() => {
            this.props.dispatchPayload({
              type: Types.UPDATE_MODE,
              payload: {
                mode: "DrawLineStringMode"
              }
            })}}></Button>

            <Popover2 content={(
              <React.Fragment>
                <Button style={{"marginRight":5}} icon="walk" minimal={false} intent={INTENT_COLOR} onClick={() => {
                  this.props.dispatchPayload({
                    type: Types.UPDATE_MODE,
                    payload: {
                      mode: "MeasureDistanceMode"
                    }
                  })
                  }}></Button>

<Button style={{"marginRight":5}} icon="widget" minimal={false} intent={INTENT_COLOR} onClick={() => {
                  this.props.dispatchPayload({
                    type: Types.UPDATE_MODE,
                    payload: {
                      mode: "MeasureAreaMode"
                    }
                  })}}></Button>

<Button style={{"marginRight":5}} icon="chevron-down" minimal={false} intent={INTENT_COLOR} onClick={() => {
                  this.props.dispatchPayload({
                    type: Types.UPDATE_MODE,
                    payload: {
                      mode: "MeasureAngleMode"
                    }
                  })}}></Button>
                </React.Fragment>
            )}>
            <Button style={{"marginRight":5}} icon="array" minimal={false} intent={INTENT_COLOR}></Button>

            </Popover2>


      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
      GeneralReducer: state.GeneralReducer,
      MapReducer: state.MapReducer,
      ToolReducer: state.ToolReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    dispatchPayload: (args) => {
      dispatch(args)
    }
      // toggleNewsSelected: () => {
      //     dispatch(GeneralActions.toggleNewsSelected())
      // },
      // addNewMarker: (latitude, longitude) => {
      //     dispatch(GeneralActions.addNewMarker(latitude, longitude))
      // }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ModeTools);
