import {
    FETCH_PROJECTS, NEW_PROJECT,

} from './ReducerActions'

export default (state, action) =>  {
    switch (action.type) {
        case FETCH_PROJECTS:
            return {
                ...state,
                projects: action.data,
                loading: false
            }
        case NEW_PROJECT:
            return {
                ...state,
                loading: false
            }
        default: 
            return state
    }   
}