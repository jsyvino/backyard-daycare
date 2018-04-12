
import { combineReducers } from 'redux'
import daycares from './daycares'
import selectedDaycare from './selectedDaycare'
import currentUser from './currentUser'
import favDaycares from './favDaycares'


const rootReducer = combineReducers({
  daycares,
  selectedDaycare,
  currentUser,
  favDaycares
})

export * from './daycares'
export * from './selectedDaycare'
export * from './currentUser'
export * from './favDaycares'

export default rootReducer
