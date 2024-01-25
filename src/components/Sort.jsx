import React, { useState, useContext }  from 'react'
import { StateContext } from '../App'
import { ACTIONS } from '../utils/constants'


export default function Sort() {
const [ category, setCategory] = useState('')
const [ state, dispatch] = useContext(StateContext)

function onSubmitSort(e) {
    e.preventDefault();
    const postings = state.postings;
    postings.sort((a,b) => (parseInt(a[category]) > parseInt(b[category])) ? 1 : -1)
    dispatch({type: ACTIONS.REPLACE_POSTINGS, postings})
}



  return (
    <fieldset className='sort'>
    <legend>Select criteria to sort</legend>
      <form onSubmit={onSubmitSort}> 
        
        <div>
            <input type="radio"  value="salary"  checked={category==="salary" } onChange={() => setCategory("salary")}/>
            <label >Salary</label>

            <input type="radio" value="openings" checked={category==="openings"} onChange={() => setCategory("openings")}/>
            <label >Openings</label>

            <input type="radio"  value="ratings" checked={category==="ratings"} onChange = {() => setCategory("ratings")}/>
            <label > Ratings</label>
        </div>
        <div>
            <button className='login__button'>Sort Postings</button>
        </div>
    </form>




    </fieldset>
   
  )
}

