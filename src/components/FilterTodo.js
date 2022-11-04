import '../App.css'
import {AiFillEdit} from 'react-icons/ai'
import {IoCheckmarkDoneSharp,IoClose} from 'react-icons/io5'
import { useRef} from 'react'
import {motion} from 'framer-motion'

const FilterTodo = (props) => {
    
    const {id,task_name,isCompleted} = props.item
    const inputRef = useRef(true)
    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();

    }
    const updateTask = (id,event,value) => {
        if (event.which === 13) {
            //here 13 is key code for enter key
            props.updateTask({ id, item: value });
            inputRef.current.disabled = true;
          }
    }

    return(
        <motion.li 
            className='todo-item'
            initial={{x:-500}}
            animate={{x:0}}
            transition={{
                type: 'spring',
                duration: 2
            }}>
            <div className='cmplt-tag'>
                <textarea className="textarea" 
                    onKeyPress={(event) => updateTask(id,event,inputRef.current)} 
                    ref={inputRef} defaultValue={task_name} 
                    disabled={inputRef}/>
                {isCompleted && <button className='cmpltd-state'>done</button>}
            </div>
            <div className='crud-btn-container'>
                <button className='crud-btn-edit' onClick={() => changeFocus()}><AiFillEdit/></button>
                <button className='crud-btn-done' onClick={() => props.completeTodo(id)}><IoCheckmarkDoneSharp/></button>
                <button className='crud-btn-del' onClick={() => props.delTodo(id)}><IoClose /></button>
            </div>
           
        </motion.li>
    )

}

export default FilterTodo
