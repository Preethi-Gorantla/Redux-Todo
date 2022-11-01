import {ADD, EDIT,DONE,DEL} from './Actions'
//const initialState = {todoList:[]}

const TodoReducer = (state = [],action) => {
    const {type,payload} = action
    switch(type){
        case ADD:{
            //console.log("add")
            return  [...state,
                {id:Math.floor(Math.random()*1000),
                task_name:payload,
                isCompleted:false}]
            //return state.push(payload)
        }
        case EDIT:{
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                  return {
                    ...todo,
                    item: action.payload.item,
                  };
                }
                return todo;
              });
        }
        case DONE:{
            return state.map((todo) => {
                if (todo.id === payload) {
                    todo.isCompleted = true
                  return {
                    ...todo
                  };
                }
                return todo;
              });
        }
        case DEL :{
            console.log("delete",payload)
            return state.filter(i => i.id !== payload)
        }
        default:{
            //console.log("default")
            return  state
        }
            
    }
     
}

export default TodoReducer