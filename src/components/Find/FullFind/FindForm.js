import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import './../Find.css';
import FormStateToRedux from '../../../redux/FormStateToRedux';
import heartImg from '../../../asstets/img/searchString/heart.svg';
import heartFillImg from '../../../asstets/img/searchString/heartfull.svg';


let FindForm = (props) => {

    let [isFavoriteRequest, setisFavoriteRequest] = useState(false);

    useEffect(()=>{
        setisFavoriteRequest(props.isCurrentRequestToFavorite)
    }, [props.isCurrentRequestToFavorite, isFavoriteRequest])

    let onSubmit = (value) => {
        props.downloadSnippetVideo(value.find, props.defaultCountResults, "relevance");
    };
    
    let addNewFavorite = () => {
        props.openModalForm();
    }

    let resetFavoriteRequest = () => {
        setisFavoriteRequest(false);
    }


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
                        <Field name="find" onChange={resetFavoriteRequest}>
                            {({ input, meta }) => (
                                <div className="fullfind__input-block">
                                    <input {...input} className="fullfind__input" placeholder="Что хотите посмотреть?" />
                                    <a href="#" onClick={addNewFavorite} className="fullfind__heart">
                                        <img alt="link to add favorite" src={isFavoriteRequest ? heartFillImg : heartImg}/>
                                    </a>
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