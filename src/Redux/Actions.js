export const ADD = "ADD"
export const EDIT ="EDIT"
export const DONE="DONE"
export const DEL ="DEL"

export const addTodoTask = (payload) => {
    //console.log("Add",payload)
    return{
        type: ADD,
        payload
    }
}

export const updateTodo = (payload) => {
    //console.log("payact",payload)
    return{
        type:EDIT,
        payload
    }
}
export const cmpltdTodo = (payload) => {
    //console.log("pu",payload)
    return{
        type:DONE,
        payload
    }
}

export const removeTodo = (payload) => {
    //console.log("del",payload)
    return{
        type:DEL,
        payload
    }
}
