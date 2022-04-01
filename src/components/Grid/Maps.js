import React from "react";
import { Map, Marker, Source } from "react-map-gl";

import { connect } from "react-redux";
import * as GeneralActions from "@/redux/actions/GeneralActions";

const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiaWFud3VsaW5nZW4iLCJhIjoiY2t6eDI1d2NvOGNvODJwbXp6bGpxbjJ4MCJ9.ImeaanDx3rXEwZW8LBxmdw"

class Maps extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(args) {
        console.log(args)
        this.props.addNewMarker(
            args.lngLat.lat,
            args.lngLat.lng
        );
    }

    render() {
        return (<React.Fragment>
            <Map
                onClick={ this.handleClick }
                initialViewState={{
                    longitude: -122.4,
                    latitude: 37.8,
                    zoom: 14
                }}
                style={{width: "100vw", height: "100vh"}}
                mapStyle="mapbox://styles/mapbox/dark-v10"
                mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
                terrain={{ source: 'mapbox-dem', exaggeration: 1.5 }}>
                <Source
                    id="mapbox-dem"
                    type="raster-dem"
                    url="mapbox://mapbox.mapbox-terrain-dem-v1"
                    tileSize={512}
                    maxzoom={14}/>
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
        toggleNewsSelected: () => {
            dispatch(GeneralActions.toggleNewsSelected())
        },
        addNewMarker: (latitude, longitude) => {
            dispatch(GeneralActions.addNewMarker(latitude, longitude))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Maps);
