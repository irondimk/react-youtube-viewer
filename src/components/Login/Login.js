import React from 'react';
import './Login.css';
import logo from './../../asstets/img/logo.svg';
import LoginForm from './LoginForm';

let Login = () => {
    return (
        <div className="loginForm">
            <img className="loginForm__logo" src={logo} />
            <h3 className="loginForm__title">Вход</h3>
            <LoginForm/>
        </div>
    )
}

export default Login;