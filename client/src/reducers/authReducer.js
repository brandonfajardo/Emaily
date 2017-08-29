import { FETCH_USER } from '../actions/types'

const initialState = {

}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_USER: 
            console.log("FETCH_USER", action)
            return state
        default:
            return state
    }
}