export const AddEvent = (event) => {
    return {
        type: 'ADD_EVENT',
        event
    }
}

export const DeleteLog = (id) => {
    return {
        type: 'DELETE_LOG',
        id
    }
}

export const EditLog = (log) => {
    return {
        type: 'EDIT_LOG',
        log
    }
}