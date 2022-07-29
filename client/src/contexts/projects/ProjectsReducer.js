import {
    SELECTED_PROJECT,
    FETCH_PROJECTS,
    NEW_PROJECT,
    CLEAR_SELECTION,
    CLEAR_PROJECTS,
    DELETE_PROJECT
} from '../actions/ReducerActions'

/**
 * Project reducer to handle different states with projects
 */
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
                projects: [...state.projects, action.data],
                loading: false
            }
        case DELETE_PROJECT: 
            return {
                ...state,
                projects: state.projects.filter((project) => project._id !== action.data),
                loading: false,
                selected: null,
            }
        case SELECTED_PROJECT:
            return {
                ...state,
                selected: action.data
            }
        case CLEAR_SELECTION:{
            return {
                ...state,
                selected: null
            }
        }
        case CLEAR_PROJECTS: {
            return {
                ...state,
                projects: null
            }
        }
        default: 
            return state
    }   
}