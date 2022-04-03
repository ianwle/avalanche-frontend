import React from "react";
import DeckGL from "@deck.gl/react";
import StaticMap, { Source} from "react-map-gl";

import { connect } from "react-redux";
// import * as GeneralActions from "@/redux/actions/GeneralActions";
import * as Types from "@/redux/constants/Types"
import Pin from "@/components/Grid/Pin"

import { EditableGeoJsonLayer } from '@nebula.gl/layers';
import { DrawPolygonMode } from '@nebula.gl/edit-modes';

const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiaWFud3VsaW5nZW4iLCJhIjoiY2t6eDI1d2NvOGNvODJwbXp6bGpxbjJ4MCJ9.ImeaanDx3rXEwZW8LBxmdw"
const selectedFeatureIndexes = []
class Maps extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.state = {
          geojson: {
            type: 'FeatureCollection',
            features: []
          }
        }
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

    render() {
      const editableGeoJsonLayer = new EditableGeoJsonLayer({
        id: 'geojson-layer',
        data: this.state.geojson,
        mode: DrawPolygonMode, selectedFeatureIndexes,
        onEdit: ({ updatedData }) => {
          this.setState({
            geojson: updatedData,
          });
        },
      });

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

      const sourceLayer = {
        id: "mapbox-dem",
        type: "raster-dem",
        url: "mapbox://mapbox.mapbox-terrain-dem-v1",
        tileSize: 512,
        maxzoom: 14
      }

      const deckGLConfig = {
        layers: [editableGeoJsonLayer],
        // getCursor: editableGeoJsonLayer.getCursor.bind(editableGeoJsonLayer),
        onClick: (evt) => {
          this.map.queryRenderedFeatures(evt)
        },
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
        >
          <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}>
          <Source
                    id="mapbox-dem"
                    type="raster-dem"
                    url="mapbox://mapbox.mapbox-terrain-dem-v1"
                    tileSize={512}
                    maxzoom={14}/>
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
