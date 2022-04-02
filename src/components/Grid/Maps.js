import React from "react";
import { Layer, Map, Marker, Source } from "react-map-gl";

import { connect } from "react-redux";
// import * as GeneralActions from "@/redux/actions/GeneralActions";
import * as Types from "@/redux/constants/Types"


const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiaWFud3VsaW5nZW4iLCJhIjoiY2t6eDI1d2NvOGNvODJwbXp6bGpxbjJ4MCJ9.ImeaanDx3rXEwZW8LBxmdw"

class Maps extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(args) {
        console.log(args)
        this.props.dispatchPayload({
          type: Types.ADD_NEW_MARKER,
          payload: {
            latitude: args.lngLat.lat,
            longitude: args.lngLat.lng
          }
        });
    }

    render() {
        return (<React.Fragment>
            <Map
                onClick={this.handleClick}
                onLoad={() => { }}
                initialViewState={{
                    longitude: -122.4,
                    latitude: 37.8,
                    zoom: 14
                }}
                style={{width: "100vw", height: "100vh"}}
                mapStyle="mapbox://styles/mapbox/navigation-guidance-night-v3"
                mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
                // terrain={{ source: 'mapbox-dem', exaggeration: 1.0 }}
            >
                {/* <Source
                    id="mapbox-dem"
                    type="raster-dem"
                    url="mapbox://mapbox.mapbox-terrain-dem-v1"
                    tileSize={512}
                    maxzoom={14}
                /> */}
                {
                    (() => {
                        let markers = []
                        this.props.MapReducer.markers.forEach((marker) => {
                            markers.push(
                                <React.Fragment>
                                    <Marker
                                        longitude={marker.longitude}
                                        latitude={marker.latitude}
                                        anchor="bottom"
                                        draggable
                                        // onDragStart={onMarkerDragStart}
                                        // onDrag={onMarkerDrag}
                                        // onDragEnd={onMarkerDragEnd}
                                    >
                                        </Marker>
                            </React.Fragment>)
                        })

                        return markers
                    })()
                }

                {
                    (() => {
                        return [(<React.Fragment>
                            <Layer
                            id={"add-3d-buildings"}
                                source={"composite"}
                                source-layer={"building"}
                                filter={['==', 'extrude', 'true']}
                                type={"fill-extrusion"}
                                minzoom={15}
                                paint={{
                                    "fill-extrusion-color": "#aaa",
                                    "fill-extrusion-height": [
                                        'interpolate',
                                        ['linear'],
                                        ['zoom'],
                                        15,
                                        0,
                                        15.05,
                                        ['get', 'height']
                                    ],
                                    'fill-extrusion-base': [
                                        'interpolate',
                                        ['linear'],
                                        ['zoom'],
                                        15,
                                        0,
                                        15.05,
                                        ['get', 'min_height']
                                    ],
                                    'fill-extrusion-opacity': 0.6
                                }}>
                            </Layer>
                        </React.Fragment>)]
                    })()
                }

                {
                    (() => {
                        return (
                <Layer id="sky"
                    type="sky"
                    paint={{

                        "sky-type": "atmosphere",
                        "sky-atmosphere-sun": [0.0, 0.0],
                        "sky-atmosphere-sun-intensity": 15
                    }
                }>
                                
                            </Layer>
                        )
                    })()
                }
            </Map>
        </React.Fragment>);
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        GeneralReducer: state.GeneralReducer,
        MapReducer: state.MapReducer
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
