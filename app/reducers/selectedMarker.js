import axios from 'axios';
import chalk from 'chalk'

const SELECT_MARKER = "SELECT_MARKER"

export function selectMarker(marker) {
    return {
        type: SELECT_MARKER,
        marker
    }
}

export function fetchMarkerLatLng(address, daycareId, name) {
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
                let coord = {name: name, daycareId: daycareId, lat: geoCode.lat, lng:  geoCode.lng}
                dispatch(selectMarker(coord))
            })
            .catch(error => console.log(chalk.red(error)))
    }
}

export default function selectedDaycareReducer(state = {}, action) {
    switch (action.type) {
        case SELECT_MARKER:
            return action.marker;

        default:
            return state;
    }
}
