import './App.css';
import './index.css';

import { useReducer, useEffect, createContext } from 'react';

import LoginForm from './components/LoginForm';
import Loading from './components/Loading';
import Status from './components/Status';
import MyPostings from './components/MyPostings';
import Message from './components/Message';


import reducer, {initialState} from './utils/reducer';

import { ACTIONS, LOGIN_STATUS, CLIENT, SERVER, USER_TYPES, COMPONENTS} from './utils/constants'

import { fetchLogin, fetchSession } from './services/sessions';
import { fetchAllPostings } from './services/postings' 
import JobForm from './components/JobForm';
import Jobs from './components/Jobs';
import Register from './components/Register';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Home from './components/Home';
import MyApplications from './components/MyApplications';


export const StateContext = createContext();

// App component starts here
function App() {
  

  const [state, dispatch] = useReducer( reducer, initialState);
  
 
 

 
  function onLogin( { username, userType }) {
    dispatch({ type: ACTIONS.NO_ERROR})
    dispatch({ type: ACTIONS.LOGIN_PENDING});
    setTimeout( () => {
      fetchLogin({username , userType })
      .then ( fetchedData => { // if the fetch call is successful 
        console.log(fetchedData);
        dispatch({ type: ACTIONS.LOG_IN, username : fetchedData.username });    // changing the login status to login and setting the username
        dispatch({ type: ACTIONS.REPLACE_POSTINGS, postings: fetchedData.postings})
        dispatch({ type: ACTIONS.UPDATE_USER_TYPE , userType: fetchedData.userType })  
      })
      .catch( err => {
        console.log('i am erred out', err)
        dispatch({ type: ACTIONS.LOG_OUT});

        dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error })
      });

    },500)
   }

function checkForSession() {
  fetchSession()
  .then( (fetchedData) => { // 
    dispatch({ type: ACTIONS.LOG_IN , username: fetchedData.username});
    return fetchAllPostings(); // By returning this promise we can chain the original promise
  })
  .catch( err => {
    if( err?.error === SERVER.AUTH_MISSING ) {
      return Promise.reject({ error: CLIENT.NO_SESSION }) // Expected, not a problem
    }
    return Promise.reject(err); // Pass any other error unchanged
  })
  .then( fetchedData => {
    console.log('in CheckSession then', fetchedData)
    dispatch({ type: ACTIONS.REPLACE_POSTINGS, postings: fetchedData.postings});
  })
  .catch( err => {
    if( err?.error === CLIENT.NO_SESSION ) { // expected "error"
      dispatch({ type: ACTIONS.LOG_OUT });
      // Not yet logged in isn't a reported error
      return;
    }
    // For unexpected errors, report them
    dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error })
  });
}


// going to check this function after every render
useEffect(
  () => {
    checkForSession();
  },
  []
);



function selectComponent() {
  switch (state.component) {
    case COMPONENTS.HOME:
      return <Home />;

 
    case COMPONENTS.ALL_JOBS:
      return <Jobs />;

    case COMPONENTS.POST_JOB:
      return <JobForm />;

    case COMPONENTS.PROFILE:
      return <Profile />;

    case COMPONENTS.MY_POSTINGS:
      return <MyPostings />

    case COMPONENTS.MY_APPLICATIONS:
      return <MyApplications />

    default:
      return <Jobs />;
  }
}



  return (
    <StateContext.Provider value={[state,dispatch]}>
        <div className="App">
        <header className="App-header">

          { state.userType === USER_TYPES.NEW_USER ? <Register /> : 

          <>
          { state.loginStatus === LOGIN_STATUS.PENDING && <Loading className="login__waiting">Loading ....</Loading> }
          { state.loginStatus === LOGIN_STATUS.NOT_LOGGED_IN  && <LoginForm onLogin={onLogin}/> }
          
          { state.loginStatus === LOGIN_STATUS.IS_LOGGED_IN && (
            <div className="content">
                <Navbar / >
                { selectComponent() }
                <Footer />


            </div>

          ) }
          </>
          }

          { state.error && <Status error={state.error} />}
          { state.message && <Message message={state.message}/>}
        </header>
      </div>
   </StateContext.Provider>

  );
}

export default App;


