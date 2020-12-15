import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_FIRST_NAME,
    SET_TELEPHONE,
    REDACT_CONTACT,
    SET_NEW_CONTACT_FIRST_NAME,
    SET_NEW_CONTACT_TELEPHONE,
   
} from './types'

export const setFirstNameAC = (firstName) => {
    return {
        type: SET_FIRST_NAME,
        firstName
    }
}

export const setTelephoneAC = (telephone) => {
    return {
        type: SET_TELEPHONE,
        telephone
    }
}

export const addContactAC = (data) => {
    return {
        type: ADD_CONTACT,
        data
    }
}

export const deleteContactAC = (index) => {
    return {
        type: DELETE_CONTACT,
        index
    }
}

export const redactContactAC = (data) => {
    return {
        type: REDACT_CONTACT,
        data

    }
}
export const setNewContactFirstNameAC = (firstName) => {
    return {
        type: SET_NEW_CONTACT_FIRST_NAME,
        firstName
    }
}

export const setNewContactTelephoneAC = (telephone) => {
    return {
        type: SET_NEW_CONTACT_TELEPHONE,
        telephone
    }
}
export const sortContactAC = (type) => {
    return {
        type
    }
}