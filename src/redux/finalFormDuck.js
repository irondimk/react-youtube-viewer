
const UPDATE_FORM_STATE = 'final-form-redux-example/finalForm/UPDATE_FORM_STATE';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case UPDATE_FORM_STATE:
      return {
        ...state,
        [action.form]: action.payload
      }
    default:
      return state
  }
}

export const updateFormState = (form, state) => ({
  type: UPDATE_FORM_STATE,
  form,
  payload: state
})

export const getFormState = (state, form) =>
  (state && state.finalForm && state.finalForm[form]) || {}
