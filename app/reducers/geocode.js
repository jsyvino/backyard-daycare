import axios from 'axios';
import chalk from 'chalk'

const SET_MARKERS = 'SET_MARKERS'
const ADD_MARKER = 'ADD_MARKER'

export function getMarkers(markers) {
    return {
        type: SET_MARKERS,
        markers
    }
}

export function addMarker(newMarker) {
    return {
        type: ADD_MARKER,
        newMarker
    }
}

export function fetchLatLng(address, daycareId) {
    let location = address.split(",").map((item) => item.trim()).join(" ");
    return dispatch => {
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?`, {
            params: {
                address: location,
                key: 'AIzaSyAXcW1khN3X_V0lPH5dhDQTHzEN2tR7bZY'
            }
        })
            .then((response) => {
                let address = response.data.results[0].formatted_address;
                let geoCode = response.data.results[0].geometry.location;
                let coord = {daycareId: daycareId, lat: geoCode.lat, lng:  geoCode.lng}
                dispatch(addMarker(coord))
            })
            .catch(error => console.log(chalk.red(error)))
    }
}

export default function markersReducer(state = [], action) {
    switch (action.type) {
        case SET_MARKERS:
            return action.markers;

        case ADD_MARKER:
            return [...state, action.newMarker];

        default:
            return state;
    }
}