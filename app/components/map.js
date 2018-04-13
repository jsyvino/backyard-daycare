import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { withGoogleMap, GoogleMap, InfoWindow, Marker, withScriptjs } from 'react-google-maps';
import { compose, withProps, withStateHandlers } from "recompose"

// export const MyMap = withGoogleMap(props => {
//     return (
//         <GoogleMap
//         className="mapView"
//         // ref={props.onMapLoad}
//         defaultZoom={13}
//         defaultCenter={{ lat: 41.879805, lng: -87.630489}}
//         >
//         <Marker
//         // key={index}
//         position={{ lat: 41.879805, lng: -87.630489}}
//         onClick={() => props.onMarkerClick(marker)}
//         />
//         </GoogleMap>
//     )
// })

export const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAXcW1khN3X_V0lPH5dhDQTHzEN2tR7bZY",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withStateHandlers(() => ({
        isOpen: false,
      }), {
        onToggleOpen: ({ isOpen }) => () => ({
          isOpen: !isOpen,
        })
      }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 41.879805, lng: -87.630489 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 41.879805, lng: -87.630489 }} onClick={props.onToggleOpen} >
            {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
                THIS IS A TEST
            </InfoWindow>}
        </Marker>
        }
    </GoogleMap>
)





// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default class MapView extends Component {
//     static defaultProps = {
//         center: { lat: 41.879805, lng: -87.630489 },
//         zoom: 13
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.google !== this.props.google) {
//             this.loadMap();
//         }
//     }

//     componentDidMount() {
//         this.loadMap();
//     }


//     loadMap() {
//         if (this.props && this.props.google) {
//             // google is available
//             const { google } = this.props;
//             const maps = google.maps;

//             const mapRef = this.refs.map;
//             const node = ReactDOM.findDOMNode(mapRef);

//             let zoom = 14;
//             let lat = 41.874929;
//             let lng = -87.630416;
//             const center = new maps.LatLng(lat, lng);
//             const mapConfig = Object.assign({}, {
//                 center: center,
//                 zoom: zoom
//             })
//             this.map = new maps.Map(node, mapConfig);
//         }
//         // ...
//     }

//     render() {
//         return (
//             <div ref='map'>
//                 Loading map...
//       </div>
//         )
//     }
// }