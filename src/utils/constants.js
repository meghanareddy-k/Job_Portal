
export const LOGIN_STATUS = {
    PENDING: 'pending',
    NOT_LOGGED_IN : 'notLoggedIn',
    IS_LOGGED_IN : 'loggedIn',
};


export const SERVER = {
    AUTH_MISSING: 'auth-missing',
    AUTH_INSUFFICIENT: 'auth-insufficient',
    REQUIRED_USERNAME: 'required-username',
    REQUIRED_MESSAGE: 'required-message',
    MESSAGE_MISSING: 'noSuchId',
    NEW_USER: 'new-user',
    REGISTRAION_SUCCESS: 'registration-succes'
}


export const CLIENT = {
    NETWORK_ERROR: 'networkError',
    NO_SESSION: 'noSession',
    UNKNOWN_ACTION: 'unknownAction'
}

export const MESSAGES = {
    [CLIENT.NETWORK_ERROR]: 'Trouble connecting to the network. Please try again',
    [SERVER.AUTH_INSUFFICIENT]: 'Your username/password combination does not match any records, please try again',
    [SERVER.REQUIRED_USERNAME]: 'Please enter a valid (letters and/or numbers) username',
    [SERVER.REQUIRED_MESSAGE]: 'Please enter the message to add',
    [SERVER.NEW_USER]: 'You have not registered with us. Please click register button and create an account',
    [SERVER.REGISTRAION_SUCCESS] : 'You have successfully register. Please go ahead and Login to portal',
    default: 'Something went wrong. Please try again'
}

export const ACTIONS = {
    LOG_IN: 'logIn',
    LOG_OUT: 'logOut',
    START_LOADING_POSTINGS: 'startLoadingPostings',
    REPORT_ERROR: 'reportError',
    ADD_POSTING: 'addPosting',
    REPLACE_POSTINGS: 'replacePostings',
    LOGIN_PENDING:'loginPending',
    UPDATE_USER_TYPE: 'updateUserType',
    APPLY_FILERS: 'applyFilters',
    NEW_USER: 'newUser',
    SET_COMPONENT: 'setComponent',
    NOT_NEW_USER: 'notNewUser',
    NO_ERROR: 'noError',
    SET_RECRUITER_POSTINGS: 'setRecruiterPostings',
    SET_MY_APPLICATIONS: 'setMyApplications',
    DELETE_MY_APPLICATIONS: 'setMyApplications',
    SHOW_MESSAGE: 'showMessage'
};

export const USER_TYPES = {
    RECRUITER : 'recruiter',
    APPLICANT : 'applicant',
    NEW_USER: 'newUser'
}

export const COMPONENTS = {
    ABOUT : 'about',
    HOME : 'home',
    ALL_JOBS : 'allJobs',
    POST_JOB : 'postJob',
    REGISTER: 'register',
    PROFILE: 'profile',
    MY_POSTINGS: 'myPostings',
    MY_APPLICATIONS: 'myApplications'
}