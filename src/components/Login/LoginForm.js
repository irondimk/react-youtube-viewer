import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import './Login.css';
import FormStateToRedux from '../../redux/FormStateToRedux';
import closeEyePic from './../../asstets/img/loginInput/closeeye.svg';
import openEyePic from './../../asstets/img/loginInput/openeye.svg';
import { Link } from 'react-router-dom';



let LoginForm = (props) => {

    let [isShowPassword, setIsShowPassword] = useState(false);

    let onSubmit = (value) => {
        props.authUser(value.login, value.password);
    };
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, reset, submitting, pristine, form }) => (
                <form
                     onSubmit={handleSubmit}  
                >
                    <FormStateToRedux form="auth" />
                    <div>
                        <Field name={"login"} id={"login"} >
                            {({ input, meta }) => (
                                <div className="loginForm__input-block">
                                    <label className="loginForm__label">Логин</label>
                                    <input className="loginForm__input" {...input} type="text" />
                                    
                                </div>
                            )}
                        </Field>
                        <Field name={"password"} id={"password"} >
                            {({ input, meta }) => (
                                <div className="loginForm__input-block">
                                    <label className="loginForm__label">Пароль</label>
                                    <input className="loginForm__input" {...input} type={isShowPassword ? "text" :"password"}/>
                                    <img onClick={()=> setIsShowPassword(!isShowPassword)} src={isShowPassword? openEyePic : closeEyePic} className={"loginForm__item-show-pas"}/>
                                </div>
                            )}
                        </Field>
                        {props.isLastTryAuthFalse ? 
                            <div className="loginForm__input-error">
                                Неправильный логин или пароль
                            </div> : <></>
                        }
                    </div>
                    <div>
                    
                        <button className="loginForm__submit" type="submit" disabled={submitting || pristine}>
                            Войти
                        </button>
                    
                    </div>
                </form>
            )}
        />
    )
}

export default LoginForm;