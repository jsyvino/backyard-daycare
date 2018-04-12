import axios from 'axios';
import chalk from 'chalk'

const GET_DAYCARES = "GET_DAYCARES"
const GET_NEW_DAYCARE = "GET_NEW_DAYCARE"

export function getDaycares(daycares) {
    return {
        type: GET_DAYCARES,
        daycares
    }
}

export function getNewDaycare(newDaycare) {
    return {
        type: GET_NEW_DAYCARE,
        newDaycare
    }
}

export function fetchDaycares() {
    return dispatch => {
        return axios.get('/api/daycares')
        .then(res => res.data)
        .then(daycares => {
            dispatch(getDaycares(daycares))
        })
        .catch(error => console.log(chalk.red(error)))
    }
}

// export function deleteDaycare(daycareId, history) {
//     return dispatch => {
//         return axios.delete(`/api/daycares/${daycareId}`)
//         .then(res => res.data)
//         .then(message => {
//             dispatch(userMessage(message))
//             history.push(`/daycares`)
//             dispatch(fetchdaycares())
//         })
//         .catch(error => console.log(error))
//     }
// }

export default function daycaresReducer(state = [], action) {
    switch (action.type) {
        case GET_DAYCARES:
          return action.daycares;
  
         case GET_NEW_DAYCARE:
          return [...state, action.newDaycare];
    
        default:
          return state;
      }
}