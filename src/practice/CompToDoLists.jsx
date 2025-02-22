const TodoApp =(props)=>{

    return(
        <>
        <button style={{width:"20px"}} onClick={()=>{
            props.onselect(props.id)
           }}></button>
             <li>{props.text} </li> 
        </> 
    );
}
export default TodoApp;
