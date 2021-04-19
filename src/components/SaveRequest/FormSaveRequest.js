import React from 'react';
import { Form, Field } from 'react-final-form';
import FormStateToRedux from '../../redux/FormStateToRedux';
import { required } from '../../utils/validator';



let FormSaveRequest = (props) => {

    let onSubmit = (value) => {
        let orderType;
        if(value.orderType){
            orderType = value.orderType;
        }
        else{
            orderType = "relevance";
        }
        props.action(value.request, value.name, orderType, value.countRequests, props.index, props.login);
        props.closeModalForm();
    };

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{countRequests: props.count, request: props.valueRequest, orderType: props.orderType, 
                name: props.name}}
            render={({ handleSubmit, reset, submitting, pristine, form }) => (
                <form
                     onSubmit={handleSubmit}  
                >
                    <FormStateToRedux form="save" />
                    <div className="save__form-wrapper">
                        <Field name={"request"} id={"request"}>
                            {({ input, meta }) => (
                                <div className="save__input-block">
                                    <label className="save__label">Запрос</label>
                                    <input className={props.isCanEditRequest ? "save__input" : "save__input-readonly"} {...input} type="text" readOnly={!props.isCanEditRequest} />
                                </div>
                            )}
                        </Field>
                        <Field validate={required} name={"name"} id={"name"} >
                            {({ input, meta }) => (
                                <div className="save__input-block">
                                    <label className="save__label"><span className="save__label_red">* </span>Название</label>
                                    <input className="save__input" {...input} type="text" />
                                    {meta.error && meta.touched && <span className="save__input-error">{meta.error}</span>}
                                </div>
                                
                            )}
                        </Field>

                        <div className="save__input-block">
                        <label className="save__label">Сортировать по</label>
                            <Field name="orderType" id="orderType" component="select" className="save__drop-list">
                            {props.orderList.map((elem)=> {
                                return <option value={elem.parametr}>{elem.title}</option>
                            })}
                            </Field>          
          </div>
          <div className="save__input-block">
          <Field name={"countRequests"} id={"countRequests"} >
                            {({ input, meta }) => (
                                <div className="save__input-block">
                                    <label className="save__label">Количество</label>
                                    <div className="save__input-block_numeric">
                                    <input className="save__input save__input-range" {...input} type="range" max={50} min={1}/>
                                    <input className="save__input save__input-range-num" {...input} type="text" />
                                    </div>
                                    
                                </div>
                            )}
                        </Field>              
          </div>
                            <div className="save__button-block">
                            <button className="save__cancel" onClick={props.closeModalForm}>
                            Не сохранять
                        </button>

                        <button className="save__submit"  type="submit" disabled={submitting || pristine}>
                            Сохранить
                        </button>
                            </div>
                    </div>
                </form>
            )}
        />
    )
}

export default FormSaveRequest;