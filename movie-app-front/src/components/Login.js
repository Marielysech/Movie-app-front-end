import React, {useState} from 'react'

const Login = () => {

    const [emailValue, setemailValue] = useState();
    const [passwordValue, setpasswordValue] = useState();

    const loginUser = (email, password) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ email: email, password: password })
          };
    
          fetch('/auth/login', requestOptions)
          .then(res => res.json())
          setemailValue("");
          setpasswordValue("");

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
        <button type="submit" onClick={() => {loginUser(emailValue, passwordValue)}}>Login</button>
        </form>
        </>
    )
}

export default Login