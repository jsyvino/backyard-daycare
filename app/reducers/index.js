
import { combineReducers } from 'redux'
import daycares from './daycares'
import selectedDaycare from './selectedDaycare'
import currentUser from './currentUser'
import favDaycares from './favDaycares'
import markers from './geocode'
import selectedMarker from './selectedMarker'

const rootReducer = combineReducers({
  daycares,
  selectedDaycare,
  currentUser,
  favDaycares,
  markers,
  selectedMarker
})

export * from './daycares'
export * from './selectedDaycare'
export * from './currentUser'
export * from './favDaycares'
export * from './geocode'
export * from './selectedMarker'

export default rootReducer
