import React from "react";
import { Button, Card, H6, Icon } from "@blueprintjs/core";
import * as Types from '@/redux/constants/Types';

import { connect } from "react-redux";

function Info(props) {
  // console.log(props);
  const [isButtonVisible, setIsButtonVisible] = React.useState(true);
  const [isFormVisible, setIsFormVisible] = React.useState(false);
  return (
    <React.Fragment>
      <H6>Information</H6>
      <Card>{
        (() => {
          if (Object.keys(props.PinsReducer.pins).includes(props.MapReducer.currentIndex[0])) {
            alert("Hi!");
          } else if (props.MapReducer.currentIndex[0] > -1) {
            return (
              <React.Fragment>
                {(() => {
                  if (isButtonVisible) {
                    return (
                      <Button icon="add" onClick={() => {
                        setIsButtonVisible(!isButtonVisible);
                        setIsFormVisible(!isFormVisible);
                      }}>Add information</Button>
                    );
                  } else if (isFormVisible) {
                    return (
                      <p>The form goes into here.</p>
                    )
                  }
                })()}
              </React.Fragment>
            )
          } else {
            return (
              <React.Fragment>
                Please select a shape to see information. Click on the {(<Icon icon="eye-open"></Icon>)} icon and select a shape.
              </React.Fragment>
            );
          }
        })()
      }</Card>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
      PinsReducer: state.PinsReducer,
      MapReducer: state.MapReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
      dispatchPayload: (args) => {
        dispatch(args)
      },
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);
