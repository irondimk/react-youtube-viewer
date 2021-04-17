import React from 'react';
import { Form, Field, initialValue } from 'react-final-form';
import './../Find.css';
import FormStateToRedux from '../../../redux/FormStateToRedux';



let FindForm = (props) => {

    let onSubmit = (value) => {
        
        props.getVideos(value.find, 10);
        
    };
    
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
                                    <input  {...input} className="fullfind__input" placeholder="Что хотите посмотреть?" />
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