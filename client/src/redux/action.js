import {ADD_CONTACT, DELETE_CONTACT, SET_FIRST_NAME, SET_TELEPHONE} from './types'

export const setFirstNameAC = (firstName) => {
    return{
        type: SET_FIRST_NAME,
        firstName
    }
}

export const setTelephoneAC = (telephone) => {
    return{
        type: SET_TELEPHONE,
        telephone
    }
}

export const addContactAC = (data) => {
    return{
        type: ADD_CONTACT,
        data
    }
}

export const deleteContactAC = (index) => {
    return{
        type: DELETE_CONTACT,
        index
    }
}