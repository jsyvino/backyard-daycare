import axios from 'axios';
import chalk from 'chalk'
import { fetchUser } from '../reducers/index'

const GET_FAV_DAYCARES = "GET_FAV_DAYCARES"
const GET_NEW_FAV_DAYCARE = "GET_NEW_FAV_DAYCARE"

export function getFavDaycares(favDaycares) {
    return {
        type: GET_FAV_DAYCARES,
        favDaycares
    }
}

export function getNewFavDaycare(newFavDaycare) {
    return {
        type: GET_NEW_FAV_DAYCARE,
        newFavDaycare
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


export default function favDaycaresReducer(state = [], action) {
    switch (action.type) {
        case GET_FAV_DAYCARES:
          return action.favDaycares;
  
         case GET_NEW_FAV_DAYCARE:
          return [...state, action.newFavDaycare];
    
        default:
          return state;
      }
}