import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps';

class MapView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            map: null,
            zoom: null,
            isOpen: false,
            showInfoIndex: null
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

    handleToggleOpen = () => {

        this.setState({
            isOpen: true
        });
    }

    handleToggleClose = () => {
        this.setState({
            isOpen: false,
            showInfoIndex: null
        });
    }

    showInfo(a){
        this.setState({showInfoIndex: a })
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
                        console.log("MARKER", marker)
                        return (
                            <Marker
                                key={marker.daycareId}
                                position={{ lat: marker.lat, lng: marker.lng }}
                                label={marker.daycareId.toString()}
                                onClick={() => this.showInfo(marker.daycareId)}
                            // onRightClick={() => props.onMarkerRightClick(index)}
                            >
                                {
                                    (this.state.showInfoIndex == marker.daycareId ) &&
                                    <InfoWindow onCloseClick={this.handleToggleClose}>
                                        <h6>{marker.name}</h6>
                                    </InfoWindow>
                                }
                            </Marker>
                        )
                    })
                }

            </GoogleMap>
        )
    }

}

export default withGoogleMap(MapView);
