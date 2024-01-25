import React , {useContext} from 'react';
import '../css/Jobs.css';
import { ACTIONS, USER_TYPES } from '../utils/constants';
import { StateContext } from '../App';

import Filters from './Filters';
import Sort from './Sort';

import { fetchAddApplication } from '../services/applications';
import { fetchAllPostings } from '../services/postings';

export default function Jobs() {

  const [state, dispatch] = useContext(StateContext)

  function onApply({postingId , postedBy}) {
console.log(postingId , postedBy)
    fetchAddApplication({postingId , postedBy})
    .then ( applications => {
      dispatch({ type: ACTIONS.SET_MY_APPLICATIONS , myApplications : applications.myApplications })
    }).catch( err => {
      dispatch({ type: ACTIONS.REPORT_ERROR, error : err?.error});
    });

  }

  function onReset() {
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

    <div className='jobs'>


          
          <div className='filter-sort-container'>
              <Filters />
              <Sort />
          </div> 
          <button onClick={onReset} className="login__button"> Reset </button>

           <div className='jobs__container'>
                {
              state.postings.map((posting) => {
                return <article className='job__card' key={posting.postingId}>
                <div className="company-logo-img">
                  <img src={posting.logo || "https://justcreative.com/wp-content/uploads/2022/01/TD-logo-600x400.png"} alt={posting.company}/>
                </div>
                  <div className="job__title"><span className="emphasis-text">{posting.title}</span></div>
                  <div className="job__company">{posting.company}</div>
                  <div className="skill__container">
                      <span className="job__jobType skill">Type : <span className="emphasis-text">{posting.jobType}</span></span>
                      <span className="job__salary skill" >Salary :<span className="emphasis-text">{posting.salary}</span></span>
                      <span className="job__mode skill" >Mode :<span className="emphasis-text">{posting.mode}</span></span>
                      <span className="job__postedBy skill">Posted By :<span className="emphasis-text">{posting.postedBy}</span></span>
                      <span className="job__openings skill">Openings :<span className="emphasis-text">{posting.openings}</span></span>
                      <span className="job__ratings skill">Ratings :<span className="emphasis-text">{posting.ratings}</span></span>
                  </div>
                  
                  {
                    state.userType === USER_TYPES.APPLICANT && 
                    <>
                      <button  className="apply" onClick={() => onApply({postingId: posting.postingId , postedBy: posting.postedBy})} > Apply</button>
                    </>
                 }
                </article>
              })
              
            }


    </div>





    </div>
   
   
   
  )
}

