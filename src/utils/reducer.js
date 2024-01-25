import {
    LOGIN_STATUS,
    ACTIONS,
    USER_TYPES,
    COMPONENTS,
} from './constants';


export const initialState = {
    error: '',
    username: '',
    userPosts: [],
    loginStatus : LOGIN_STATUS.NOT_LOGGED_IN,
    isPostingsPending: false,
    postings: [],
    userType: 'recruiter',
    sort: '',
    filteredPostings: [],
    component: COMPONENTS.ALL_JOBS,
    recruiterPostings: [],
    myApplications: [],
    message: ''
};


function reducer(state, action) {
    switch(action.type) {

        case ACTIONS.LOG_IN: 
            return {
                ...state,
                error: '',
                loginStatus: LOGIN_STATUS.IS_LOGGED_IN,
                username: action.username,
            };

            case ACTIONS.LOG_OUT:
                return {
                    ...state,
                    ...initialState
                };

        case ACTIONS.START_LOADING_POSTINGS:
            return {
                ...state,
                error: '',
                isPostingsPending: false,
                postings: action.postings,
            };

        case ACTIONS.REPLACE_POSTINGS:
            return {
                ...state,
                error: '',
                isPostingsPending: false,
                postings: action.postings,
            };

        case ACTIONS.ADD_POSTING:
            return {
                ...state,
                postings: [action.posting, ...state.postings],
                error: '',
            }

        case ACTIONS.REPORT_ERROR:
            return {
                ...state,
                error: action.error || 'ERROR',
            };


        case ACTIONS.LOGIN_PENDING:
            return { 
                ...state,
                loginStatus: LOGIN_STATUS.PENDING
            }

    case ACTIONS.LOGIN_NOT_PENDING:
        return { 
            ...state,
            loginStatus: LOGIN_STATUS.IS_LOGGED_IN
        }

    case ACTIONS.UPDATE_USER_TYPE:
        return {
            ...state,
            userType: action.userType,
            error: ''
        }


    case ACTIONS.APPLY_FILTERS:
        return {
            ...state,
            error: '',
            filteredPostings: action.postings,
        }

    case ACTIONS.NEW_USER:
        return {
            ...state,
            error: '',
            userType: USER_TYPES.NEW_USER
        }

    case ACTIONS.NOT_NEW_USER:
        return {
            ...state,
            error: '',
            userType: USER_TYPES.RECRUITER
        }

    case ACTIONS.SET_COMPONENT:
        return {
            ...state, 
            error: '',
            component: action.component
        }

        case ACTIONS.NO_ERROR:
            return {
                ...state, 
                error: '',
            }

        case ACTIONS.SET_RECRUITER_POSTINGS:
            return {
                ...state,
                recruiterPostings : action.postings
            }

        case ACTIONS.SET_MY_APPLICATIONS:
            return {
                ...state,
                myApplications : action.myApplications
            }

        case ACTIONS.SHOW_MESSAGE:
            return {
                ...state, 
                message : action.message
            }
    


        default: 
            return {
                ...state
            }
  }
}

export default reducer;