import React, {useState} from 'react'

const Register = () => {

    const [nameValue, setnameValue] = useState();
    const [emailValue, setemailValue] = useState();
    const [passwordValue, setpasswordValue] = useState();

    const registerUser = (name, email, password) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, email: email, password: password })
          };
    
          fetch('/auth/register', requestOptions)
          .then(res => res.json())
          .then(data => {console.log(data.name + 'has been created')});

          setnameValue("");
          setemailValue("");
          setpasswordValue("");

    }

    return (
        <>
        <h1>Register</h1>
            <form >
                <div>
                    <label for="name">Name</label>
                    <input placeholder="Enter your name here" value={nameValue} onChange={(e) => setnameValue(e.target.value)}></input>
                </div>
                <p>N:{nameValue}   E:{emailValue}  PS:{passwordValue}</p>
                <div>
                    <label >Email</label>
                    <input placeholder="Enter your email here" value={emailValue} onChange={(e) => setemailValue(e.target.value)}></input>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input placeholder="Enter your password here" value={passwordValue} onChange={(e) => setpasswordValue(e.target.value)}></input>
                </div>
            {/* <div>
                <p>Choose your favorites genre</p>
                <input type="checkbox"  name="drama" value="drama"></input>  
                <label for="cbox2">Drama</label>

                <input type="checkbox"  name="action" value="action"></input>  
                <label for="cbox2">Action</label>

                <input type="checkbox"  name="adventure" value="adventure"></input> 
                <label for="cbox2">Adventure</label>

                <input type="checkbox"  name="thriller" value="thriller"></input>
                <label for="cbox2">Thriller</label>
            </div> */}

            <button type="submit" onClick={() => {registerUser(nameValue, emailValue, passwordValue)}}>Login</button>
            </form>
        </>
    )
}

export default Register