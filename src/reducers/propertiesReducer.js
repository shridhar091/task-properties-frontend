
import { SET_PROPERTIES, SET_SEARCH_PROPERTIES ,SET_SEARCH } from "../actions/propertiesAction"

const usersInitalState = {
    data:[]
}

const propertiesReducer = (state=usersInitalState, action)=>{
    switch(action.type){
        case SET_PROPERTIES:{
            return {...state, data:action.payload}
        }
        case SET_SEARCH_PROPERTIES:{
            return {...state, data:action.payload}
        }
       
        default:{
            return{...state}
        }
    }
}

export default propertiesReducer