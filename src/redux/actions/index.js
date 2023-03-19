export const addName = (name) => {

    return {
        type : "ADDNAME",
        payload : name
    }

}

export const sideBar = (value) => {

    return {
        type : "SIDEBAR",
        payload : value
    }

}