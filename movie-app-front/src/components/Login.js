import React, {useStatem, useContext, useState} from 'react'
import {useNavigate, NavLink} from 'react-router-dom';
import {useUserContext, UserContext} from '../contexts/UserContext'

const Login = () => {

    const user = useUserContext()

    const navigate = useNavigate();
    const [emailValue, setemailValue] = useState();
    const [passwordValue, setpasswordValue] = useState();

    const loginUser = (event) => {

        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ email: emailValue, password: passwordValue })
          };
    
          fetch('/auth/login', requestOptions)
          .then(res =>res.json())
          .then(data => {
            user.setUserInfo({name: data.name, email:data.email})
            setemailValue("")
            setpasswordValue("")
            navigate('/', {replace:true})
        })
        .catch(error => console.log(error))
        event.preventDefault();

    }

    
    
    return (
        <>
        <h1>Login</h1>
        <form >
        <div>
            <label for="email">Email</label>
            <input type="email" placeholder="Enter your email here" value={emailValue} onChange={(e) => setemailValue(e.target.value)}></input>
        </div>
        <div>
            <label for="password">Password</label>
            <input type='password' placeholder="Enter your password here" value={passwordValue} onChange={(e) => setpasswordValue(e.target.value)}></input>
        </div>
        <button type="submit" onClick={loginUser}>Login</button>
        </form>
        </>
    )
}

export default Login