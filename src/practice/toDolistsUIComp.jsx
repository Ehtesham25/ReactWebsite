import react, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const ToDoListsUIComp =(props)=>{
    const [obj ,setLine]= useState(false);
    const cutIt =()=>{
        setLine(true);

    }
    return (
        <>
        <div className="toDo_style">
        <span onClick={()=>{
            props.onselect(props.id)
        }}
         ><DeleteIcon/>
        </span>
         <li style={{textDecoration : obj? "line-through": "none"}}>{props.text}</li>
        </div>
        
        </>
    );
}
export default ToDoListsUIComp;