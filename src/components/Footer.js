import '../App.css'
import {motion} from 'framer-motion'
const Footer = (props) => {

    return(
        <motion.div
        initial={{y:-200}}
        animate={{y:0}}
        transition ={{type:'spring',duration:2}}
        className="footer-div">
            <p>Total : {props.total}</p>
            <p>Active : {props.act}</p>
            <p>Completed : {props.cmpltd}</p>
        </motion.div>
    )
}

export default Footer