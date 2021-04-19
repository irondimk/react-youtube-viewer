import React from 'react';
import './Header.css';
import logo from '../../asstets/img/logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {unAuthUser} from '../../redux/profileReducer';

let Header = (props) => {
    return (
        <header className="header">
            <div className="header__content">
            <div className="header__left">
                <img className="header__logo" src={logo}/>
                <nav>
                    <ul>
                        <li className="header__menu-items">
                        <NavLink to="/find" activeClassName="header__active-link" className="header__link">Поиск</NavLink>
                        <NavLink to="/favorites" activeClassName="header__active-link" className="header__link">Избранное</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header__right">
            <Link to="/">
                <a href="#" onClick={props.unAuthUser} activeClassName="header__active-link" className="header__link">Выйти</a>
            </Link>
            </div>
            </div>
        </header>
    )
}

// let mapStateToProps = (state) => {
//     return{
//         login: state.profile.login
//     }
// }

export default connect(null, {unAuthUser})(Header);