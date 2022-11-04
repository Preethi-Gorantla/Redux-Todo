import { Fragment, useState,useEffect,useRef } from 'react'
import {AiFillPlusCircle} from 'react-icons/ai';
import {connect} from 'react-redux'
import '../App.css'
import {addTodoTask, cmpltdTodo, removeTodo, updateTodo} from '../Redux/Actions';
import FilterTodo from './FilterTodo';
import Footer from './Footer';
import Modal from './Modal';
import {motion} from "framer-motion"

const Todo = (props) => {

    const [task,setTask] = useState("")
    const [todoitems,setTodoItems] = useState([])
    const activeCount = useRef(0)
    const cmpltdCount = useRef(0)
    const [modal,setModal] = useState(false)
    const taskinput = useRef(false)

    const handleAddItem = (event) => {
        event.preventDefault()
        if(task !== ''){
            props.addTodo(task)
            setTask("")
        }
        else{
            setModal(true)
        }   
    }

   useEffect(() => {
        setTodoItems(props.todoList)
        activeCount.current = (props.todoList.filter((item) => item.isCompleted === false)).length
        cmpltdCount.current = (props.todoList.filter((item) => item.isCompleted === true)).length
    },[props.todoList])


    const getActive = () => {
       setTodoItems(props.todoList.filter((item) => item.isCompleted === false))

    }
    const getCmpltd = () => {
        setTodoItems(props.todoList.filter((item) => item.isCompleted === true))
    }   
    const getAll = () => {
        setTodoItems(props.todoList)
    }

    const handleRedirect = (val,event) => {
        if(val){
            setModal(false)
            taskinput.current.focus()

        }
    }

    return(
        <Fragment>
            <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.5 }}
        
      >  Todo App
      </motion.h1>
            <div className='todo-container'>
                <motion.input
                    type="text" 
                    className="input" 
                    onChange={(event) => setTask(event.target.value)} 
                    value={task}
                    initial={{x:-300}}
                    animate={{x:0}}
                    ref={taskinput}
                />
                <motion.button
                        className='plus-icon-btn'
                        onClick={handleAddItem}
                        initial={{x:-300}}
                        animate={{x:0}}
                        transition={{
                            type: 'spring',
                            duration: 2
                          }}>
                        <AiFillPlusCircle className='plus-icon'/>
                </motion.button>
            </div>
            <motion.div 
                className="button-container"
                initial={{x:-300}}
                animate={{x:0}}
                transition={{type:'spring' ,duration:1}}>
                <button className='button' onClick={() => getActive()}>Active</button>
                <button className='button' onClick={() => getCmpltd()}>Completed</button>
                <button className='button' onClick={() => getAll()}>All</button>
            </motion.div>
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
            <Footer className="footer-div2" total={props.todoList.length} act={activeCount.current} cmpltd={cmpltdCount.current}/>
            <div className=''>
                {modal && <Modal redirect={handleRedirect}/>}
            </div>
        </Fragment>
    )
}
 
const mapStateToProps = (state) => {
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