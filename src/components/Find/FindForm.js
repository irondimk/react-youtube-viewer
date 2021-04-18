import React from 'react';
import { Form, Field } from 'react-final-form';
import './Find.css';
import FormStateToRedux from '../../redux/FormStateToRedux';



let FindForm = (props) => {

    let onSubmit = (value) => {
        props.getVideos(value.find, props.defaultCountResults, "relevance");
    };

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, reset, submitting, pristine, form }) => (
                <form
                     onSubmit={handleSubmit}  
                >
                    <FormStateToRedux form="search" />
                    <div className="find__form-wrapper">
                        <div className="find__string">
                        <Field name={"find"} id={"find"} >
                            {({ input, meta }) => (
                                <div className="find__input-block">
                                    <input className="find__input" {...input} type="text" placeholder="Что хотите посмотреть?" />
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