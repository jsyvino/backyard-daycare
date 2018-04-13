import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps';

class MapView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            map: null,
            zoom: null
        }
    }

    mapMoved() {
        console.log(JSON.stringify(this.state.map.getCenter()))
    }

    mapLoaded(map) {
        // JSON.stringify(map.getCenter())
        if (!this.state.map) {
            this.setState({
                map: map
            })
        }
    }

    zoomChanged() {
        console.log("ZOOM")
        if (!this.state.map) {
            this.setState({
                zoom: map
            })
        }
    }

    render() {
        const markers = this.props.markers || [];
        const { center, zoom } = this.props;
        return (
            <GoogleMap
                className="mapView"
                ref={this.mapLoaded.bind(this)}
                onDragEnd={this.mapMoved.bind(this)}
                onZoomChanged={this.zoomChanged.bind(this)}
                defaultZoom={zoom}
                defaultCenter={center}>

                {
                    markers.map((marker) => {
                        console.log(marker)
                        return <Marker key={marker.daycareId} position={{ lat: marker.lat, lng: marker.lng }}
                        // onRightClick={() => props.onMarkerRightClick(index)}
                        />
                    })
                }
            </GoogleMap>
        )
    }

}

export default withGoogleMap(MapView);
