import '../App.css'

const Footer = (props) => {
    console.log("footer",props)

    return(
        <div className="footer-div">
            <p>Total : {props.total}</p>
            <p>Active : {props.act}</p>
            <p>Completed : {props.cmpltd}</p>
        </div>
    )
}

export default Footer