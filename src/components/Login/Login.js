import React from 'react';
import './Login.css';
import logo from './../../asstets/img/logo.svg';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import {authUser} from '../../redux/profileReducer';

let Login = (props) => {
    return (
        <div className="loginForm">
            <img alt="logo" className="loginForm__logo" src={logo} />
            <h3 className="loginForm__title">Вход</h3>
            <LoginForm authUser={props.authUser}
            isLastTryAuthFalse={props.isLastTryAuthFalse} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return{
        isLastTryAuthFalse: state.profile.isLastTryAuthFalse
    }
}

export default connect(mapStateToProps, {authUser})(Login);