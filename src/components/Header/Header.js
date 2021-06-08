import React from 'react';
import './Header.css';
import logo from '../../asstets/img/logo.svg'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {unAuthUser} from '../../redux/profileReducer';

let Header = (props) => {

    let signOut = (e) => {
        e.preventDefault();
        props.unAuthUser();
    }

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
                    <a href="#" onClick={(e) => signOut(e)} activeClassName="header__active-link" className="header__link">Выйти</a>
                </div>
            </div>
        </header>
    )
}

export default connect(null, {unAuthUser})(Header);