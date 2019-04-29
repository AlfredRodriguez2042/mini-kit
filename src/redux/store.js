import { createStore, combineReducers} from 'redux'

import result from './reducers/results'
import suggestions from './reducers/suggestions'
import currentItem from './reducers/currentItem'

const reducer = combineReducers({
     result,
     suggestions,
     currentItem
})

const store = createStore(reducer)

export default store