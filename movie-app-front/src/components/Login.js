import React, {useStatem, useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom';
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
            // if(res.status === 200) navigate('/', {replace:true})})
          .then(data => {
            console.log(data)
            user.setUserInfo({name: data.name, email:data.email})
            setemailValue("")
            setpasswordValue("")
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
            <input placeholder="Enter your email here" value={emailValue} onChange={(e) => setemailValue(e.target.value)}></input>
        </div>
            <p>email: {emailValue}, password:{passwordValue} </p>
        <div>
            <label for="password">Password</label>
            <input placeholder="Enter your password here" value={passwordValue} onChange={(e) => setpasswordValue(e.target.value)}></input>
        </div>
        <button type="submit" onClick={loginUser}>Login</button>
        </form>
        </>
    )
}

export default Login