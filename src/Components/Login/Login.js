import React from "react";
import Title from "../Headingbar/Headingbar"
import "./Login.css"
import { Link } from "react-router-dom";

const Login = () =>{
    return(
        <div className="page-container">
            <Title />
            <div className="login-container">
                <div className="login-box">
                    <div className="heading">
                        <label>Welcome</label>
                    </div>
                    <div className="username l-labels">
                        <label>User Name</label>
                    </div>
                    <div className="username-in l-inputs">
                        <input type="text" required/>
                    </div>
                    <div className="username-er l-error">

                    </div>
                    <div className="password l-labels">
                        <label>Password</label>
                    </div>
                    <div className="password-in l-inputs">
                        <input type="password" required/>
                    </div>
                    <div className="password l-error">
                        
                    </div>
                    <div className="l-button submit">
                        <Link style={{textDecoration:"none"}} to="/Playground">
                            <button className="login-btn">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;