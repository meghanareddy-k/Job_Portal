import React, { useState } from 'react'
import { ACTIONS } from '../utils/constants';
import { useContext } from 'react';
import { StateContext } from '../App';
import  { fetchAddPosting } from '../services/postings'

import '../css/JobForm.css'


export default function JobForm() {

  const [title, setTitle] = useState('');
  const [jobType, setJobType] = useState('fulltime');
  const [salary, setSalary] = useState('');
  const [mode, setMode] = useState('Hybrid');
  const [company, setCompany] = useState('');
  const [openings, setOpenings] = useState(0);
  const [ratings, setRatings] = useState(1);

const [state, dispatch] = useContext(StateContext)

function onSubmitPost({ posting }) {
  fetchAddPosting({ posting })
  .then( fetchedData => {
    dispatch({ type: ACTIONS.ADD_POSTING, posting: fetchedData.posting});
  })
  .catch(err => dispatch({ type: ACTIONS.REPORT_ERROR , error: err?.error}))

}

  function onSubmit(e) {
    e.preventDefault();
    onSubmitPost({posting: {title, company, jobType, salary, mode, openings, ratings}})
      setTitle('');
      setJobType('fulltime');
      setSalary('');
      setMode('Hybrid');
      setCompany('');
    }

  return (
    <fieldset className='job__form'>
        <legend>Post an Opening to Job portal</legend>
            <form onSubmit={onSubmit} className='job__form__inputs'>
              <input placeholder='Title' type="text" value={title}  onChange={(e) => setTitle(e.target.value)}/>
              <input placeholder='Company' type="text" value={company} onChange={(e) => setCompany(e.target.value)}/>
              <input placeholder='Salary' type="number" value={salary} onChange={(e) => setSalary(e.target.value) }/>
              <input placeholder='Openings - Enter a positive integer'  type="number" min="1" onChange={(e) => setOpenings(e.target.value) }/>
              <input placeholder='Ratings (between 1 and 10)'   type="number" min="1" max="10" onChange={(e) => setRatings(e.target.value) }/>

              <div> JobType   : --
                <select onChange={e => setJobType(e.target.value)} className='classic'>
                    <option value="fulltime">Full Time</option>
                    <option value="contract">Contract</option>
                </select>
              </div>
                    
              <div className='job__form__Mode'> Mode   : -- 
                  <select onChange={e => setMode(e.target.value)} className='classic'>
                      <option value="onsite">Onsite</option>
                      <option value="remote">Remote</option>
                      <option value="hybrid">Hybrid</option>

                  </select>
              </div>

              <button type="submit"> Add Posting </button>

            </form>
          </fieldset>
  )
}
