function Alert(props){
    return (
        <div className={"alert " + props.className} role="alert">
            {props.text}
        </div>
    )   
}

export default Alert;