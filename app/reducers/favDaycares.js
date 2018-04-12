import axios from 'axios';
import chalk from 'chalk'
import { fetchDaycares } from '../reducers/index'

const GET_FAV_DAYCARES = "GET_FAV_DAYCARES"
const GET_NEW_FAV_DAYCARE = "GET_NEW_FAV_DAYCARE"

export function getFavDaycares(favDaycares) {
    return {
        type: GET_FAV_DAYCARES,
        favDaycares
    }
}


export function fetchFavDaycares(userId) {
    return dispatch => {
        return axios.get(`/api/users/${userId}/favorites`)
        .then(res => res.data)
        .then(daycares => {
            dispatch(getFavDaycares(daycares))
        })
        .catch(error => console.log(chalk.red(error)))
    }
}

export function toggleDaycare(userId, daycareId) {
    return dispatch => {
        return axios.put(`/api/users/${userId}/favorites/${daycareId}`)
        .then(res => res.data)
        .then((instance) => {
            dispatch(fetchFavDaycares(userId))
            dispatch(fetchDaycares())
        })
        .catch(error => console.log(chalk.red(error)))
    }
}


export default function favDaycaresReducer(state = [], action) {
    switch (action.type) {
        case GET_FAV_DAYCARES:
          return action.favDaycares;
    
        default:
          return state;
      }
}