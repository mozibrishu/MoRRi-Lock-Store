import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn } from './LoginManager';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'


const Login = () => {
    initializeLoginFramework();

    let [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                //checking google sign in failed Error 
                res.success ? handleResponse(res, true) : handleResponse(res, false);
            })
    }

    const handleResponse = (res, redirect) => {
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }


    return (
        <div className="container-fluid row align-items-center">
            <div className="login-container col-11 col-md-9 col-lg-7 text-center my-5">
                <div>
                    <span>Join With <br /><br /> <span onClick={googleSignIn}><FontAwesomeIcon icon={faGoogle} className="google" /></span></span>
                </div>
            </div>
        </div>
    );
};

export default Login;