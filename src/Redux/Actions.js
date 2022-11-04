export const ADD = "ADD"
export const EDIT ="EDIT"
export const DONE="DONE"
export const DEL ="DEL"

export const addTodoTask = (payload) => {
    return{
        type: ADD,
        payload
    }
}

export const updateTodo = (payload) => {
    return{
        type:EDIT,
        payload
    }
}
export const cmpltdTodo = (payload) => {
    return{
        type:DONE,
        payload
    }
}

export const removeTodo = (payload) => {
    return{
        type:DEL,
        payload
    }
}
