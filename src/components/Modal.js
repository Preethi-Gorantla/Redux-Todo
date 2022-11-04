import {motion} from 'framer-motion'
const Modal = (props) => {
    const handleOkay = () => {
        props.redirect(true)
    }
    return(
        <motion.div 
        initial={{x:-300}}
        animate={{x:0}}
        transition={{
            type: 'spring',
            duration: 2
          }}
        className="modal">
            <p>Please Enter a valid input</p>
            <button className="button" onClick={handleOkay}>Okay</button>
        </motion.div>
    )
}

export default Modal