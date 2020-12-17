import {
  combineReducers
} from 'redux'
import {
  SET_FIRST_NAME,
  SET_TELEPHONE,
  ADD_CONTACT,
  DELETE_CONTACT,
  REDACT_CONTACT,
  SET_NEW_CONTACT_TELEPHONE,
  SET_NEW_CONTACT_FIRST_NAME,
  SORT_CONTACT_Z_TO_A,
  SORT_CONTACT_A_TO_Z,
  FILTER_CONTACT
} from './types'
import {createReducer} from '@reduxjs/toolkit'
let initialState = {
  currectInput: {
    firstName: '',
    telephone: ''
  },
  redactContact: {
    
    newFirstName: '',
    newTelephone: ''
  },
  contacts: [],
  contactFilter: []
}

const inputReducer = createReducer(initialState, {
  [SET_FIRST_NAME]: (state, action) => {
    state.currectInput.firstName = action.payload
  },
  [SET_TELEPHONE]: (state, action) => {
    state.currectInput.telephone = action.payload
   
  },
})
const changeContact = createReducer(initialState, {
  [ADD_CONTACT]: (state, action) => {
    state.contacts = [...state.contacts, {
                telephone: action.payload.telephone,
                firstName: action.payload.firstName,
                redact: false
              }]
  },
  [FILTER_CONTACT]: (state, action) => {
    state.contactFilter = state.contacts.filter((item) => item.firstName.includes(action.payload))
  },
  [SET_NEW_CONTACT_FIRST_NAME]: (state, action) => {
    state.redactContact.newFirstName = action.payload
  },
  [SET_NEW_CONTACT_TELEPHONE]: (state, action) => {
    state.redactContact.newTelephone = action.payload
  },
  [REDACT_CONTACT]: (state, action) => {
    if(state.redactContact.newTelephone) state.contacts[action.payload].telephone = state.redactContact.newTelephone 
    if(state.redactContact.newFirstName) state.contacts[action.payload].firstName = state.redactContact.newFirstName 
    state.contacts[action.payload].redact =  !state.contacts[action.payload].redact
  },
  [DELETE_CONTACT]: (state, action) => {
    state.contacts = state.contacts.filter((item, index) => index !== action.payload)
  },
  [SORT_CONTACT_Z_TO_A]: (state, action) => {
    state.contacts = state.contacts.slice().sort((a, b) => a.firstName < b.firstName ? 1 : -1)
  },
  [SORT_CONTACT_A_TO_Z]: (state, action) => {
    state.contacts = state.contacts.slice().sort((a, b) => a.firstName > b.firstName ? 1 : -1)
  },
  
})


export const combineRuducer = combineReducers({
  inputReducer,
  changeContact,
  
})