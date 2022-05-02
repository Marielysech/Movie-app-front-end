const Register = () => {
    return (
        <>
        <h1>Register</h1>
            <form >
                <div>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required></input>
                </div>
                <div>
                    <label >Email</label>
                    <input type="email" id="email" name="email" required></input>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required></input>
                </div>
            <div>
                <p>Choose your favorites genre</p>
                <input type="checkbox"  name="drama" value="drama"></input>  
                <label for="cbox2">Drama</label>

                <input type="checkbox"  name="action" value="action"></input>  
                <label for="cbox2">Action</label>

                <input type="checkbox"  name="adventure" value="adventure"></input> 
                <label for="cbox2">Adventure</label>

                <input type="checkbox"  name="thriller" value="thriller"></input>
                <label for="cbox2">Thriller</label>
            </div>

            <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Register