import React, { useContext, useEffect, useState } from "react";
import "../css/Jobs.css";
import { ACTIONS } from "../utils/constants";
import { StateContext } from "../App";
import { fetchRecruiterPostings } from "../services/postings";

export default function Jobs() {
  const [state, dispatch] = useContext(StateContext);
  const [showApplied, setShowApplied] = useState(false);



  function onLoadMyPostings() {
    fetchRecruiterPostings()
      .then((postings) => {
        console.log("mypostings called fetchRecrutier Data");
        dispatch({
          type: ACTIONS.SET_RECRUITER_POSTINGS,
          postings: postings.recPostings,
        });
      })
      .catch((err) => {
        console.log("error");
      });
  }

  useEffect(() => {
    onLoadMyPostings();
  }, []);

  return (
    <div className="jobs">
      <h1>Postings by {state.username}</h1>
      <div className="jobs__container">
        {state.recruiterPostings.map((posting) => {
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
                {console.log(
                  posting.applicants,
                  posting.company,
                  posting.applicants.length
                )}
                <button
                  className="apply"
                  onClick={() => setShowApplied(!showApplied)}
                >
                  Applied: {posting.applicants.length}
                </button>
              </article>
              {showApplied && (
                <p className="status no__padding" >
                  {" "}
                  {posting.applicants.join("   ")} applied for <span className="job__company__display">{posting.company}</span>
                </p>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
