import React, { createRef, useState } from 'react';
import { Form, Field, initialValue } from 'react-final-form';
import './../Find.css';
import FormStateToRedux from '../../../redux/FormStateToRedux';
import heartImg from '../../../asstets/img/heart.svg';


let FindForm = (props) => {

    let onSubmit = (value) => {
        props.downloadSnippetVideo(value.find, 12);
    };
    
    let addNewFavorite = () => {
        props.addNewFavoritesRequest(inputSearch.current.value, props.login, props.index)
    }

    let inputSearch = createRef();
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{find: props.valueLastRequest}}
            render={({ handleSubmit, reset, submitting, pristine, form }) => (
                <form
                     onSubmit={handleSubmit}              
                     subscription={{ submitting: true, pristine: true }}
                >
                    <FormStateToRedux form="search" />
                    <div className="fullfind__form-wrapper">
                        <div className="find__string">
                        <Field name="find">
                            {({ input, meta }) => (
                                <div className="fullfind__input-block">
                                    <input ref={inputSearch}  {...input} className="fullfind__input" placeholder="Что хотите посмотреть?" />
                                    <a href="#" onClick={addNewFavorite} className="fullfind__heart"><img src={heartImg}/></a>
                                </div>
                            )}
                        </Field>
                        <button className="find__submit" type="submit" disabled={submitting || pristine}>
                            Найти
                        </button>
                    </div>
                    </div>
                </form>
            )}
        />
    )
}

export default FindForm;