import {
    ADD_CONTACT,
    DELETE_CONTACT,
  
   
    REDACT_CONTACT,
   
    FILTER_CONTACT,
    SORT_CONTACT_Z_TO_A,
    SORT_CONTACT_A_TO_Z,
    SET_INPUT_AUTH,
    SET_INPUT_CONTACT,
   
} from './types'
import {createAction} from '@reduxjs/toolkit'


export const setInputAuthAC = createAction(SET_INPUT_AUTH);
export const setInputContactAC = createAction(SET_INPUT_CONTACT);

export const addContactAC = createAction(ADD_CONTACT);
export const deleteContactAC = createAction(DELETE_CONTACT);
export const redactContactAC = createAction(REDACT_CONTACT);
export const sortContactAZAC = createAction(SORT_CONTACT_A_TO_Z);
export const sortContactZAAC = createAction(SORT_CONTACT_Z_TO_A);
export const filterContactAC = createAction(FILTER_CONTACT);
