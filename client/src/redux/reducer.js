import { combineReducers } from 'redux'
import {SET_FIRST_NAME,SET_TELEPHONE, ADD_CONTACT,DELETE_CONTACT} from './types'

let initialState = {
  currectInput: {
    firstName: '',
    telephone: ''
  },
  
  contacts: []

}

 const inputReducer = (state = initialState, action) => {
    switch (action.type) {

      case SET_FIRST_NAME:      
      console.log(state.currectInput?.firstName)
            return Object.assign({}, state, {
              currectInput:{telephone: state.currectInput.telephone ,firstName: action.firstName}
            })

      case SET_TELEPHONE:      
            return Object.assign({}, state, {
              currectInput:{firstName: state.currectInput.firstName, telephone: action.telephone}
            })


      default:
        return state
    }
  }
  const changeContact = (state = initialState, action) => {
    switch (action.type) {

      case ADD_CONTACT:      
      
            return Object.assign({}, state, {
              contacts:[...state.contacts, {telephone: action.data.telephone, firstName: action.data.firstName}]
            })
            

      case DELETE_CONTACT:     
      
          return Object.assign({}, state, {
            contacts: state.contacts.filter((item, index) => index !== action.index)
          })
           


      default:
        return state
    }
  }

export const combineRuducer = combineReducers({inputReducer,changeContact})