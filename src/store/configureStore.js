import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import propertiesReducer from "../reducers/propertiesReducer"

const configureStore = ()=>{
    const store = createStore(combineReducers({
        properties:propertiesReducer,
    }),applyMiddleware(thunk))
    return store
}

export default configureStore