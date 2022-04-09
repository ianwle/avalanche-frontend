import React from "react";
import DeckGL from "@deck.gl/react";
import StaticMap, { Source, Layer } from "react-map-gl";

import { connect } from "react-redux";
// import * as GeneralActions from "@/redux/actions/GeneralActions";
import * as Types from "@/redux/constants/Types"

import { EditableGeoJsonLayer, SelectionLayer } from '@nebula.gl/layers';
import * as editModes from '@nebula.gl/edit-modes';

import axios from 'axios';

const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiaWFud3VsaW5nZW4iLCJhIjoiY2t6eDI1d2NvOGNvODJwbXp6bGpxbjJ4MCJ9.ImeaanDx3rXEwZW8LBxmdw"
// const selectedFeatureIndexes = []
class Maps extends React.Component {
  constructor(props) {
      super(props);

      this.handleClick = this.handleClick.bind(this);
      this.state = {
        data: {}
      };
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
      axios.get("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then((response) => {
        this.setState({
          ...this.state,
          data: {
            ...this.state.data,
            "earthquake_7_days": response.data
          },
        })
      });

      axios.get("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson").then((response) => {
        this.setState({
          ...this.state,
          data: {
            ...this.state.data,
            "earthquake_1_day": response.data
          },
        })

        console.log(this.state);
      });

      axios.get("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson").then((response) => {
        this.setState({
          ...this.state,
          data: {
            ...this.state.data,
            "earthquake_30_days": response.data
          },
        })

        console.log(this.state);
      });


      console.log(this.state);

      this.props.dispatchPayload({
        type: Types.UPDATE_MODE,
        payload: {
          mode: "ViewMode"
        }
      })
    }

  render() {
    const MAX_ZOOM_LEVEL = 12;
    const heatmapLayer = {
      id: 'heatmap',
      maxzoom: MAX_ZOOM_LEVEL,
      type: 'heatmap',
      paint: {
        // Increase the heatmap weight based on frequency and property magnitude
        'heatmap-weight': ['interpolate', ['linear'], ['get', 'mag'], 0, 0, 6, 1],
        // Increase the heatmap color weight weight by zoom level
        // heatmap-intensity is a multiplier on top of heatmap-weight
        'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, MAX_ZOOM_LEVEL, 3],
        // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
        // Begin color ramp at 0-stop with a 0-transparancy color
        // to create a blur-like effect.
        'heatmap-color': [
          'interpolate',
          ['linear'],
          ['heatmap-density'],
          0,
          'rgba(33,102,172,0)',
          0.2,
          'rgb(103,169,207)',
          0.4,
          'rgb(209,229,240)',
          0.6,
          'rgb(253,219,199)',
          0.8,
          'rgb(239,138,98)',
          0.9,
          'rgb(255,201,101)'
        ],
        // Adjust the heatmap radius by zoom level
        'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 35, MAX_ZOOM_LEVEL, 60],
        // Transition from heatmap to circle layer by zoom level
        'heatmap-opacity': {
          default: 1,
          stops: [
            [14, 1],
            [20, 0]
          ]
        }
      }
    }
    const editableGeoJsonLayer = new EditableGeoJsonLayer({
      id: 'geojson-layer',
      data: this.props.MapReducer.geoJson,
      mode: editModes[this.props.MapReducer.currentMode],
      selectedFeatureIndexes: this.props.MapReducer.selectedFeatureIndexes,
      onEdit: (args) => {
        // console.log(editModes[this.props.MapReducer.currentMode])
        this.props.dispatchPayload({
          type: Types.UPDATE_GEOJSON,
          payload: {
            geoJson: args.updatedData
          }
        })
      },
      _subLayerProps: {
        geojson: {
          getFillColor: (feature) => {
            if (this.props.MapReducer.selectedFeatureIndexes.some(i => this.props.MapReducer.geoJson.features[i] === feature)) {
              return [0, 0, 255, 255, 0.7];
            } else {
              return [0, 0, 0, 255, 0.3];
            }

          }
        }
      },
      pickable: true
    });

    // const selectionLayer = new SelectionLayer({
    //   id: 'selection',
    //   selectionType: null,
    //   onSelect: ({ pickingInfos }) => {
    //     this.setState({ selectedFeatureIndexes: pickingInfos.map(pi => pi.index) });
    //     console.log(pickingInfos);
    //   },
    //   layerIds: ['geojson'],

    //   getTentativeFillColor: () => [255, 0, 255, 100],
    //   getTentativeLineColor: () => [0, 0, 255, 255],
    //   getTentativeLineDashArray: () => [0, 0],
    //   lineWidthMinPixels: 3
    // })


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
        layers={[editableGeoJsonLayer]}
        getCursor={editableGeoJsonLayer.getCursor.bind(editableGeoJsonLayer)}
        onClick={(info) => {
          // console.log(info, this.props.MapReducer.currentMode);
          if (this.props.MapReducer.currentMode === "ViewMode") {
            if (info) {
              this.props.dispatchPayload({
                type: Types.UPDATE_SELECTED_FEATURE_INDEXES,
                payload: {
                  index: info.index,
                  selectedFeatureIndexes: [info.index]
                }})
            } else {
              this.props.dispatchPayload({
                type: Types.UPDATE_SELECTED_FEATURE_INDEXES,
                payload: {
                  index: -1,
                  selectedFeatureIndexes: []
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
          {this.state.data["earthquake_30_days"] && (
          <Source type="geojson" data={this.state.data["earthquake_30_days"]}>
            <Layer {...heatmapLayer} />
          </Source>
          )}
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
