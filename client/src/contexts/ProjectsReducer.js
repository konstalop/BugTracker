import {
    FETCH_PROJECTS,

} from './ReducerActions'

export default (state, action) =>  {
    switch (action.type) {
        case FETCH_PROJECTS:
            return {
                ...state,
                projects: action.data,
                loading: false
            }
        default: 
            return state
    }   
}