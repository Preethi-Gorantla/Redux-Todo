import '../App.css'
import {AiFillEdit} from 'react-icons/ai'
import {IoCheckmarkDoneSharp,IoClose} from 'react-icons/io5'
import { useRef} from 'react'

const FilterTodo = (props) => {
    
    const {id,task_name,isCompleted} = props.item
    //const updated=useRef(task_name)
    const inputRef = useRef(true)
    //console.log("item",props.item,updated)
    //const [disable,setDisable] = useState(true)
    // const getUpdatedTask = (event) => {
    //     updated.current = event.target.value
    // }
    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();

    }
    const updateTask = (id,event,value) => {
        //console.log("update")
        if (event.which === 13) {
            //here 13 is key code for enter key
            props.updateTask({ id, item: value });
            inputRef.current.disabled = true;
          }
    }

    return(
        <li className='todo-item'>
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
           
        </li>
    )

}

export default FilterTodo
