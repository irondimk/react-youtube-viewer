import React from 'react';
import { Form, Field } from 'react-final-form';
import FormStateToRedux from '../../redux/FormStateToRedux';



let FormSaveRequest = (props) => {

    let orderList = [
        {title: "Без сортировки", parametr: "relevance"},
        {title: "По дате", parametr: "date"},
        {title: "По рейтингу", parametr: "rating"},
        {title: "По названию", parametr: "title"},
        {title: "По просмотрам", parametr: "viewCount"}
    ]

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
            initialValues={{countRequests: props.count, request: props.valueRequest}}
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
                        <Field name={"name"} id={"name"} >
                            {({ input, meta }) => (
                                <div className="save__input-block">
                                    <label className="save__label"><span className="save__label_red">* </span>Название</label>
                                    <input className="save__input" {...input} type="text" />
                                </div>
                            )}
                        </Field>

                        <div className="save__input-block">
                        <label className="save__label">Сортировать по</label>
                            <Field name="orderType" id="orderType" component="select" className="save__drop-list">
                            {orderList.map((elem)=> {
                                return <option value={elem.parametr}>{elem.title}</option>
                            })}

                            {/* <option value="chicken">Chicken</option>
                            <option value="ham">Ham</option>
                            <option value="mushrooms">Mushrooms</option>
                            <option selected value="cheese">Cheese</option>
                            <option value="tuna">Tuna</option>
                            <option value="pineapple">Pineapple</option> */}
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