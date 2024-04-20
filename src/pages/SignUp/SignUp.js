import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";


const SignUp = () => {

    const handleSignUp = () => {

    }

    return <div className="authform">
        <p className="label">Name:</p>
        <input type="text" className="feilds"></input>
        <p className="label">Email:</p>
        <input type="text" className="feilds"></input>
        <p className="label">Password:</p>
        <input type="text" className="feilds"></input>
        <button onClick={handleSignUp}>Sign up here</button>
        <p className="label">Already a member? <Link className="login-button" to="/login">Sign in here</Link></p>
    </div>
}

export default SignUp;