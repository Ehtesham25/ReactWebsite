import React, { useState } from 'react'
 
const ToDoApp =(props) =>
{
    return(
        <>
        <div className="toDo_style">
           <button onClick={()=>
           {
               props.onselect(props.id);
           }

           } className="btn-btn-danger" style={{width: 20}}></button>
           <li > {props.text}</li>
       
        </div>
        </>
    )
}
export default ToDoApp;
