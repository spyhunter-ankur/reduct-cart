import { combineReducers } from 'redux';
import product from './product';
import counter from './CounterSlice'

export default combineReducers({
  product,
  counter
})
