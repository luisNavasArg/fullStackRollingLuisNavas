const MyButton=(props)=>{
    return(
        <button type="submit" style={{backgroundColor:props.color,color:"white"}}>{props.text}</button>
    )
}
export default MyButton;