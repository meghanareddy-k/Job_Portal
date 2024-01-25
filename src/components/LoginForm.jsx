import { useContext, useState } from 'react';
import { StateContext } from '../App';
import '../css/LoginForm.css';
import { ACTIONS } from '../utils/constants';

function LoginForm({ onLogin }) {
    const [ username, setUsername ] = useState('');
    const [ userType, setUserType] = useState('recruiter')
    const [ state, dispatch ] = useContext(StateContext)

    function onChange(e) {
        setUsername(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        if(username) {
            onLogin({username, userType});
        }
    }

    function onSelect(e){
        e.preventDefault();
        setUserType(e.target.value);

    }

    function onRegister(e) {
        e.preventDefault();    
        dispatch({ type: ACTIONS.NEW_USER })
    }
    
    return (
        
        <div className="login">
            <div className="brand-logo"> <img src={"https://www.pinclipart.com/picdir/big/43-434711_in-order-to-be-innovative-youve-also-got.png"} alt="branding"/></div>

            <div className='head'>
                <h1 className='company'>Job Portal App </h1>
            </div>
            <div className="form">
            <form className="login__form" action="#/login" onSubmit={onSubmit}>
                <input className="login__username" value={username} onChange={onChange} placeholder='Enter Username' required />
                <p className='select__usertype'> Select User Type </p>
                <select onChange={onSelect} className='classic'>
                    <option value="recruiter">Recruiter</option>
                    <option value="applicant">Applicant</option>
                </select>
                
                <button className="login__button" type="submit" >Login</button>
                <h3 className='question'>Not a registerd User yet?</h3>
                <p className='suggestion'>Click on the button below to register</p>
                <button className="login__button" onClick={onRegister}>Register</button>
            </form>
            </div>
        
        </div>
       
    )


}

export default LoginForm;

