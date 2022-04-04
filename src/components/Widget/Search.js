import React from 'react';

import { connect } from 'react-redux';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
