import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_FIRST_NAME,
    SET_TELEPHONE,
    REDACT_CONTACT,
    SET_NEW_CONTACT_FIRST_NAME,
    SET_NEW_CONTACT_TELEPHONE,
    FILTER_CONTACT,
    SORT_CONTACT_Z_TO_A,
    SORT_CONTACT_A_TO_Z
   
} from './types'
import {createAction} from '@reduxjs/toolkit'

export const setFirstNameAC = createAction(SET_FIRST_NAME);
export const setTelephoneAC = createAction(SET_TELEPHONE);
export const addContactAC = createAction(ADD_CONTACT);
export const deleteContactAC = createAction(DELETE_CONTACT);
export const redactContactAC = createAction(REDACT_CONTACT);
export const setNewContactFirstNameAC = createAction(SET_NEW_CONTACT_FIRST_NAME);
export const setNewContactTelephoneAC = createAction(SET_NEW_CONTACT_TELEPHONE);
export const sortContactAZAC = createAction(SORT_CONTACT_A_TO_Z);
export const sortContactZAAC = createAction(SORT_CONTACT_Z_TO_A);
export const filterContactAC = createAction(FILTER_CONTACT);
