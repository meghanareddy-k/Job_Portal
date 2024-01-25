
import React, { useContext, useState } from 'react'
import { fetchRegister } from '../services/sessions';
import { ACTIONS, SERVER } from '../utils/constants';
import { StateContext } from '../App';

export default function Register() {

    const [ username, setUsername ] = useState('');
    const [ userType, setUserType] = useState('recruiter')
    const [ state, dispatch] = useContext(StateContext)

    function onChange(e) {
        setUsername(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        fetchRegister({username, userType})
        .then( () => {
            console.log('i am on submit dispatching action.logout')
            dispatch({ type: ACTIONS.NOT_NEW_USER})
            dispatch({ type: ACTIONS.SHOW_MESSAGE, message: SERVER.REGISTRAION_SUCCESS})
            
        }).catch ( err => dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error}))
    }

    function onSelect(e){
        e.preventDefault();
        setUserType(e.target.value);
    }

  return (
    <div className="login">
            <div className="brand-logo"> <img src={"https://www.pinclipart.com/picdir/big/43-434711_in-order-to-be-innovative-youve-also-got.png"} alt="branding"/></div>

            <div className='head'>
                <h1 className='company'>Register Username</h1>
            </div>
            <div className="form">
            <form className="login__form" action="#/login" onSubmit={onSubmit}>
                <input className="login__username" value={username} onChange={onChange} placeholder='Enter Username' required />
                <p className='select__usertype'> Select User Type </p>
                <select onChange={onSelect} className='classic'>
                    <option value="recruiter">Recruiter</option>
                    <option value="applicant">Applicant</option>
                </select>
                <button className="login__button" type="submit" > Register </button>
            </form>
            </div>
        
        </div>
  )
}
