import axios from 'axios';
import chalk from 'chalk';
import { fetchMarkerLatLng } from './index'

const SET_DAYCARE = "SET_DAYCARE"

export function setDaycare(daycare) {
    return {
        type: SET_DAYCARE,
        daycare
    }
}


export function fetchDaycare(daycareId) {
    return dispatch => {
        return axios.get(`/api/daycares/${daycareId}`)
            .then(res => res.data)
            .then(daycare => {
                dispatch(setDaycare(daycare))
                dispatch(fetchMarkerLatLng(daycare.address, daycare.id, daycare.name))
            })
            .catch(error => console.log(chalk.red(error)))
    }
}


export default function selectedDaycareReducer(state = {}, action) {
    switch (action.type) {
        case SET_DAYCARE:
            return action.daycare;

        default:
            return state;
    }
}
