import {createStore} from 'redux'
import TodoReducer  from './Reducer'
import {composeWithDevTools} from 'redux-devtools-extension'
const store = createStore(TodoReducer,composeWithDevTools())

export default store