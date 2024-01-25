import React, { useState, useContext }  from 'react'
import { StateContext } from '../App'
import { fetchAllPostings } from '../services/postings'
import { ACTIONS, USER_TYPES } from '../utils/constants'

export default function Filters() {
const [ jobType, setjobType] = useState('fulltime')
const [ mode, setMode] = useState('onsite')


const [ state, dispatch] = useContext(StateContext)


function onSubmitFilters(e) {
    e.preventDefault();
   
    fetchAllPostings()
    .then( fetchedData => {
    const postings = fetchedData.postings.filter(item => item['jobType'] === jobType && item['mode'] === mode )
    dispatch({type: ACTIONS.REPLACE_POSTINGS, postings})
    })
    .catch( err => {
        dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error })
  
      });
}



  return (
    (state.userType === USER_TYPES.RECRUITER || state.userType === USER_TYPES.APPLICANT) && (
    <fieldset className='filters'>
    <legend>Filter Postings</legend>
      <form onSubmit={onSubmitFilters}> 
        <div>
            
            <label> JobType
            <select onChange= {e => setjobType(e.target.value)} className='classic'>
                <option  value="fulltime">Full Time</option>
                <option  value="contract">Contract</option>
            </select>
          </label>

          <label> Mode
              <select onChange={e => setMode(e.target.value)} className='classic'>
                  <option value="onsite">Onsite</option>
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>

              </select>
          </label>
                 
         
        </div>
        <div>
            <button type="submit" className='login__button'>Apply Filters</button>
        </div>
    </form>

    </fieldset>
    )
    
  )
}

