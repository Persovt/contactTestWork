import {
  combineReducers
} from 'redux'
import {

  ADD_CONTACT,
  SET_INPUT_AUTH,
  SET_INPUT_CONTACT,

  DELETE_CONTACT,
  REDACT_CONTACT,

  SORT_CONTACT_Z_TO_A,
  SORT_CONTACT_A_TO_Z,
  FILTER_CONTACT
} from './types'
import {createReducer} from '@reduxjs/toolkit'
let initialState = {
  currectInput: {
    firstName: '',
    telephone: '',
    newFirstName: '',
    newTelephone: '',
    email: '',
    password: ''
  },
  contacts: [],
  contactFilter: []
}

const AuthReducer = createReducer(initialState, {
  [SET_INPUT_AUTH]: (state, action) => {
    state.currectInput[action.payload.name] =  action.payload.value
  },
})

const ContactsReducer = createReducer(initialState, {
  [SET_INPUT_CONTACT]: (state, action) => {
    state.currectInput[action.payload.name] =  action.payload.value
  },
  [ADD_CONTACT]: (state, action) => {
    console.log(action)
    state.contacts = [...state.contacts, {
                telephone: action.payload.telephone,
                firstName: action.payload.firstName,
                redact: false
              }]
  },
  [FILTER_CONTACT]: (state, action) => {
    state.contactFilter = state.contacts.filter((item) => item.firstName.includes(action.payload))
  },
  [REDACT_CONTACT]: (state, action) => {
    if(state.currectInput.newTelephone) state.contacts[action.payload].telephone = state.currectInput.newTelephone 
    if(state.currectInput.newFirstName) state.contacts[action.payload].firstName = state.currectInput.newFirstName 
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
  ContactsReducer,
  AuthReducer
})