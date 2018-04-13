
import { combineReducers } from 'redux'
import daycares from './daycares'
import selectedDaycare from './selectedDaycare'
import currentUser from './currentUser'
import favDaycares from './favDaycares'
import markers from './geocode'

const rootReducer = combineReducers({
  daycares,
  selectedDaycare,
  currentUser,
  favDaycares,
  markers
})

export * from './daycares'
export * from './selectedDaycare'
export * from './currentUser'
export * from './favDaycares'
export * from './geocode'

export default rootReducer
