import React, { useContext, useEffect } from "react";
import "../css/Jobs.css";
import { ACTIONS } from "../utils/constants";
import { StateContext } from "../App";
import {
  fetchMyApplications,
  fetchWithdrawApplication,
} from "../services/applications";

export default function Jobs() {
  const [state, dispatch] = useContext(StateContext);

  function onWithdraw({ postingId, postedBy }) {
    fetchWithdrawApplication({ postingId, postedBy })
      .then((applications) => {
        dispatch({
          type: ACTIONS.SET_MY_APPLICATIONS,
          myApplications: applications.myApplications,
        });
      })
      .catch((err) => {
        dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
      });
  }

  function onLoadMyApplications() {
    fetchMyApplications()
      .then((applications) => {
        dispatch({
          type: ACTIONS.SET_MY_APPLICATIONS,
          myApplications: applications.myApplications,
        });
      })
      .catch((err) => {
        console.log("error");
      });
  }

  useEffect(() => {
    onLoadMyApplications();
  }, []);

  return (
    <div className="jobs">
      <h1>Applied Jobs by {state.username}</h1>
      <div className="jobs__container">
        {state.myApplications.map((posting) => {
          return (
            <>
              <article className="job__card" key={posting.postingId}>
                <div className="company-logo-img">
                  <img
                    src={
                      posting.logo ||
                      "https://justcreative.com/wp-content/uploads/2022/01/TD-logo-600x400.png"
                    }
                    alt={posting.company}
                  />
                </div>
                <div className="job__title">
                  <span className="emphasis-text">{posting.title}</span>
                </div>
                <div className="job__company">{posting.company}</div>
                <div className="skill__container">
                  <span className="job__jobType skill">
                    Type :{" "}
                    <span className="emphasis-text">{posting.jobType}</span>
                  </span>
                  <span className="job__salary skill">
                    Salary :
                    <span className="emphasis-text">{posting.salary}</span>
                  </span>
                  <span className="job__mode skill">
                    Mode :<span className="emphasis-text">{posting.mode}</span>
                  </span>
                  <span className="job__openings skill">
                    Openings :
                    <span className="emphasis-text">{posting.openings}</span>
                  </span>
                  <span className="job__ratings skill">
                    Ratings :
                    <span className="emphasis-text">{posting.ratings}</span>
                  </span>
                </div>

                <button
                  className="apply"
                  onClick={() =>
                    onWithdraw({
                      postingId: posting.postingId,
                      postedBy: posting.postedBy,
                    })
                  }
                >
                  With draw
                </button>
              </article>
            </>
          );
        })}
      </div>
    </div>
  );
}
