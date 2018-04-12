import axios from 'axios';
import chalk from 'chalk'
import { fetchFavDaycares } from './index'

const SET_USER = 'SET_USER'

export function setUser(user) {
    return {
        type: SET_USER,
        user
    }
}


export function fetchUser(userId) {
    return dispatch => {
        return axios.get(`/api/users/${userId}`)
            .then(res => res.data)
            .then(user => {
                dispatch(fetchFavDaycares(user.id));
                dispatch(setUser(user));
                
            })
            .catch(error => console.log(chalk.red(error)))
    }
}


export default function selectedUserReducer(state = {}, action) {
    switch (action.type) {
        case SET_USER:
            return action.user;

        default:
            return state;
    }
}
