import React, { useContext } from "react";
import { COMPONENTS, ACTIONS, USER_TYPES } from "../utils/constants";
import "../css/Navbar.css";
import { StateContext } from "../App";
import { fetchLogout } from "../services/sessions";
import { fetchAllPostings } from "../services/postings";
import Greeting from "./Greeting";

function Navbar() {
  const [state, dispatch] = useContext(StateContext);

  function handleClick(event, component) {
    event.preventDefault();
    dispatch({ type: ACTIONS.SET_COMPONENT, component: component });
  }

  function onLogout() {
    dispatch({ type: ACTIONS.LOGIN_PENDING });
    setTimeout(() => {
      dispatch({ type: ACTIONS.LOG_OUT });
      fetchLogout().catch((err) => {
        dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
      });
    }, 500);
  }

  function onRefresh() {
    dispatch({ type: ACTIONS.LOGIN_PENDING });
    setTimeout(() => {
      dispatch({ type: ACTIONS.START_LOADING_POSTINGS });
      fetchAllPostings()
        .then((fetchedData) => {
          dispatch({
            type: ACTIONS.REPLACE_POSTINGS,
            postings: fetchedData.postings,
          });
          dispatch({ type: ACTIONS.LOGIN_NOT_PENDING });
        })
        .catch((err) => {
          dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
        });
    }, 500);
  }

  return (
    <div className="component__navbar">
      <div className="navbar__left">
        <div className="navbar__breadcrumb">
          {" "}
          <Greeting />
        </div>
        <div className="navbar__title"> </div>
        <div className="navbar__links">
          <a
            href="#/home"
            className="home__link effect-1"
            onClick={(event) => handleClick(event, COMPONENTS.ALL_JOBS)}
          >
            Home
          </a>
        </div>

      
      </div>

      <p>Logged In as <span className="job__title">{state.userType}</span></p>

      <div className="navbar__links">
        {state.userType === USER_TYPES.RECRUITER && (
          <>
            <a
              href="#/categories"
              className="categories__link"
              onClick={(event) => handleClick(event, COMPONENTS.POST_JOB)}
            >
              Add a Posting
            </a>

            <a
              href="#/categories"
              className="categories__link"
              onClick={(event) => handleClick(event, COMPONENTS.MY_POSTINGS)}
            >
              My Postings
            </a>
          </>
        )}
        {state.userType === USER_TYPES.APPLICANT && (
          <>
            <a
              href="#/categories"
              className="categories__link"
              onClick={(event) => handleClick(event, COMPONENTS.MY_APPLICATIONS)}
            >
              My Applications
            </a>
          </>
        )}
      </div>

      <div className="to-logout">
        <button className="btn-submit-logout" onClick={onRefresh}>
          Refresh
        </button>
      </div>

      <div className="to-logout">
        <button className="btn-submit-logout" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
