import React from 'react';
import './Login.css';
import logo from './../../asstets/img/logo.svg';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import {authUser} from '../../redux/profileReducer';
//authUser()

let Login = (props) => {
    return (
        <div className="loginForm">
            <img className="loginForm__logo" src={logo} />
            <h3 className="loginForm__title">Вход</h3>
            <LoginForm authUser={props.authUser} />
        </div>
    )
}

// let mapStateToProps = (state) => {
//     return
// }

export default connect(null, {authUser})(Login);