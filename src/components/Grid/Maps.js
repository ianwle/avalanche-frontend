import React from "react";
import { Map, Source } from "react-map-gl";

const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiaWFud3VsaW5nZW4iLCJhIjoiY2t6eDI1d2NvOGNvODJwbXp6bGpxbjJ4MCJ9.ImeaanDx3rXEwZW8LBxmdw"

export default class Maps extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<React.Fragment>
            <Map
            initialViewState={{
                longitude: -122.4,
                latitude: 37.8,
                zoom: 14
            }}
            style={{width: "100vw", height: "100vh"}}
            mapStyle="mapbox://styles/mapbox/dark-v10"
            mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
            terrain={{source: 'mapbox-dem', exaggeration: 1.5}}
            >
                      <Source
          id="mapbox-dem"
          type="raster-dem"
          url="mapbox://mapbox.mapbox-terrain-dem-v1"
          tileSize={512}
          maxzoom={14}
        />
            </Map>
        </React.Fragment>);
    }
}
