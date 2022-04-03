import React from "react";
import DeckGL from "@deck.gl/react";
import StaticMap, { Source} from "react-map-gl";

import { connect } from "react-redux";
// import * as GeneralActions from "@/redux/actions/GeneralActions";
import * as Types from "@/redux/constants/Types"

import { EditableGeoJsonLayer, SelectionLayer } from '@nebula.gl/layers';
import * as editModes from '@nebula.gl/edit-modes';

const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiaWFud3VsaW5nZW4iLCJhIjoiY2t6eDI1d2NvOGNvODJwbXp6bGpxbjJ4MCJ9.ImeaanDx3rXEwZW8LBxmdw"
const selectedFeatureIndexes = []
class Maps extends React.Component {
  constructor(props) {
      super(props);

      this.handleClick = this.handleClick.bind(this);
      this.state = { }
  }

  handleClick(args) {
      if (this.props.ToolReducer.tools[0].childNodes[2].isSelected) {
        this.props.dispatchPayload({
          type: Types.ADD_NEW_MARKER,
          payload: {
            latitude: args.lngLat.lat,
            longitude: args.lngLat.lng
          }
        });
      }
    }

    componentDidMount() {
      this.props.dispatchPayload({
        type: Types.UPDATE_MODE,
        payload: {
          mode: "ViewMode"
        }
      })
    }

  render() {
    const editableGeoJsonLayer = new EditableGeoJsonLayer({
      id: 'geojson-layer',
      data: this.props.MapReducer.geoJson,
      mode: editModes[this.props.MapReducer.currentMode], selectedFeatureIndexes,
      onEdit: (args) => {
        // console.log(editModes[this.props.MapReducer.currentMode])
        this.props.dispatchPayload({
          type: Types.UPDATE_GEOJSON,
          payload: {
            geoJson: args.updatedData
          }
        })
      },
      // _subLayerProps: {
      //   geojson: {
      //     getFillColor: (feature) => {
      //       console.log(feature);
      //     }
      //   }
      // },
      pickable: true
    });

    const selectionLayer = new SelectionLayer({
      id: 'selection',
      selectionType: null,
      onSelect: ({ pickingInfos }) => {
        this.setState({ selectedFeatureIndexes: pickingInfos.map(pi => pi.index) });
        console.log(pickingInfos);
      },
      layerIds: ['geojson'],

      getTentativeFillColor: () => [255, 0, 255, 100],
      getTentativeLineColor: () => [0, 0, 255, 255],
      getTentativeLineDashArray: () => [0, 0],
      lineWidthMinPixels: 3
    })


    const initialViewState = {
      longitude: -122.4,
      latitude: 37.8,
      zoom: 14
    }

    const mapLayerConfig = {
      onClick: this.handleClick,
      touchRotate: true,
      style: {width: "100vw", height: "100vh"},
      mapStyle: "mapbox://styles/mapbox/light-v9",
      mapboxApiAccessToken: MAPBOX_ACCESS_TOKEN,
      terrain: { source: 'mapbox-dem', exaggeration: 1.5 },
    };

    const sourceLayerConfig = {
      id: "mapbox-dem",
      type: "raster-dem",
      url: "mapbox://mapbox.mapbox-terrain-dem-v1",
      tileSize: 512,
      maxzoom: 14
    }

    return (
      <React.Fragment>
        <DeckGL
        initialViewState={initialViewState}
        controller={{
          doubleClickZoom: false,
        }}
        layers={[editableGeoJsonLayer, selectionLayer]}
        getCursor={editableGeoJsonLayer.getCursor.bind(editableGeoJsonLayer)}
        onClick={(info) => {
          // console.log(info, this.props.MapReducer.currentMode);
          if (this.props.MapReducer.currentMode === "ViewMode") {
            if (info) {
              // console.log(info.index)
              this.props.dispatchPayload({
                type: Types.UPDATE_SELECTED_FEATURE_INDEXES,
                payload: {
                  index: [info.index]
                }})
            } else {
              this.props.dispatchPayload({
                type: Types.UPDATE_SELECTED_FEATURE_INDEXES,
                payload: {
                  index: []
                }})
            }
          }
        }}
      >
        <StaticMap
          {...mapLayerConfig}
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          terrain={{ source: 'mapbox-dem', exaggeration: 1.0 }}
          >
        <Source {...sourceLayerConfig}/>
          </StaticMap>
        </DeckGL>
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

export default connect(mapStateToProps, mapDispatchToProps)(Maps);
