import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'react-devtools-extension'
import { productListReducer } from './reducers/productReducers'

const reducer = combineReducers({
  productList: productListReducer,
})

const initialState = {}

const store = createStore(
reducer, 
initialState, 
composeWithDevTools(applyMiddleware(...middleware))
)

export default store