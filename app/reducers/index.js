/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import selectedStudent from './selected_student'
import newStudent from './new_student'


const rootReducer = combineReducers({
  selectedStudent,
  newStudent
})

export * from './campuses'
export * from './students'

export default rootReducer
