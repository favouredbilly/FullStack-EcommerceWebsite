import { combineReducers } from 'redux'

const reducer = (state = { firstname: '', lastname: '' }, action: any) => {
  return state
}

const rootReducer = () => {
  return combineReducers({ user: reducer })
}

export default rootReducer
