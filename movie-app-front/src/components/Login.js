const Login = () => {
    return (
        <>
        <h1>Login</h1>
        <form action="/auth/login/" method="post">
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required></input>
        </div>
        <div>
            <label for="username">Username</label>
            <input type="username" id="username" name="username" required></input>
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required></input>
        </div>
        <button type="submit">Login</button>
        </form>
        </>
    )
}

export default Login