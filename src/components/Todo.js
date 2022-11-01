import { Fragment, useState,useEffect } from 'react'
import {AiFillPlusCircle} from 'react-icons/ai';
import {connect} from 'react-redux'
import '../App.css'
import {addTodoTask, cmpltdTodo, removeTodo, updateTodo} from '../Redux/Actions';
import FilterTodo from './FilterTodo';

const Todo = (props) => {

    const [task,setTask] = useState("")
    const [todoitems,setTodoItems] = useState([])

     console.log("props",props)
    // console.log("items",todoitems)

    const handleAddItem = (event) => {
        event.preventDefault()
        if(task !== ''){
            props.addTodo(task)
            setTask("")
        }
    }

   useEffect(() => {
        setTodoItems(props.todoList)
    },[props.todoList])


    const getActive = () => {
        //console.log("Active",props.todoList.filter((item) => item.isCompleted === false))
       setTodoItems(props.todoList.filter((item) => item.isCompleted === false))
    }
    const getCmpltd = () => {
        //console.log("getcmpltd",props.todoList.filter((item) => item.isCompleted === true))
        setTodoItems(props.todoList.filter((item) => item.isCompleted === true))
    }   
    const getAll = () => {
        setTodoItems(props.todoList)
    }

    return(
        <Fragment>
            <div className='todo-container'>
                <input type="text" className="input" onChange={(event) => setTask(event.target.value)} value={task}/> 
                <AiFillPlusCircle className='plus-icon' onClick={handleAddItem}/>
            </div>
            <div className="button-container">
                <button className='button' onClick={() => getActive()}>Active</button>
                <button className='button' onClick={() => getCmpltd()}>Completed</button>
                <button className='button' onClick={() => getAll()}>All</button>
            </div>
            <ul className='todo-list'>
                {todoitems.length>0 && 
                    todoitems.map(i => 
                        <FilterTodo 
                                    key={i.id}
                                    completeTodo={(id) => props.cmpltTodo(id)} 
                                    delTodo={(id) => props.deltTodo(id)} 
                                    item={i}
                                    updateTask={(obj) => props.updateTask(obj)}>
                        </FilterTodo>)}
            </ul>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    //console.log("state",state)
    return{
        todoList : state
    }

}
const mapDispatchToProps = (dispatch) => {
    return{
        addTodo : (item) => dispatch(addTodoTask(item)),
        updateTask:(obj) => dispatch(updateTodo(obj)),
        cmpltTodo : (id) => dispatch(cmpltdTodo(id)),
        deltTodo: (id) => dispatch(removeTodo(id))
       // updateTask:(id,newVal) => dispatch(updateTodo(id,newVal))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo)