import { legacy_createStore } from "redux"
 
export const Inc = () => {
    return {
        type : "INC"
    }
}

export const Dec = () => {
    return {
        type : "DEC"
    }
}

const IntialState = 0;

const Reducer = (state = IntialState, action) => {
    switch(action.type){
        case "INC" : return state + 1
        case "DEC" : return state - 1
        default : return state
    }
}

export const store = legacy_createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())