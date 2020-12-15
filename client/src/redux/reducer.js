import { combineReducers } from 'redux'
import {SET_FIRST_NAME,SET_TELEPHONE, ADD_CONTACT,DELETE_CONTACT,REDACT_CONTACT,SET_NEW_CONTACT_TELEPHONE,SET_NEW_CONTACT_FIRST_NAME} from './types'

let initialState = {
  currectInput: {
    firstName: '',
    telephone: ''
  },
  redactContact: {
    redact: false,
    newFirstName: '',
    newTelephone: ''
  },
  contacts: []

}

 const inputReducer = (state = initialState, action) => {
    switch (action.type) {

      case SET_FIRST_NAME:      
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
      
      case REDACT_CONTACT:
        
        if(state.redactContact.newTelephone || state.redactContact.newFirstName)
        {
          state.contacts[action.data].telephone = state.redactContact.newTelephone
           state.contacts[action.data].firstName = state.redactContact.newFirstName
        }
          return Object.assign({}, state, {
            redactContact: {redact: !state.redactContact.redact}
          })
          
            
           
         

        case SET_NEW_CONTACT_FIRST_NAME:      
        return Object.assign({}, state, {
          redactContact: {newFirstName: action.firstName, newTelephone: state.redactContact.newTelephone,redact: state.redactContact.redact}
        })
//currectInput:{firstName: state.currectInput.firstName, telephone: action.telephone}
    case SET_NEW_CONTACT_TELEPHONE:      
          return Object.assign({}, state, {
            redactContact: {newTelephone: action.telephone, newFirstName: state.redactContact.newFirstName, redact: state.redactContact.redact}
          })
      default:
        return state
    }
  }

export const combineRuducer = combineReducers({inputReducer,changeContact})