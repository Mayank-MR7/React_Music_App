import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

const Login = () => {

    const handleSignIn = () => {

    }

    return <div className="authform">
    <p className="label">email:</p>
    <input type="text" className="feilds"></input>
    <p className="label">Password:</p>
    <input type="text" className="feilds"></input>
    <button onClick={handleSignIn} >Sign in here</button>
    <p className="label">Don't have an account?{" "} <Link className="login-button" to="/signup">Sign up here</Link></p>
</div>
}

export default Login;