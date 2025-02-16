import React ,{useState } from "react";

import ToDoApp from "./ToDoLists";

const ToDoList =()=> { 
 const[OnchangeName, setChangeName] = useState();
 const[addItem, setItem]= useState([]);
    const OnchangeFunc=(e)=>{ 
        setChangeName(e.target.value);

    }
    const ItemsAddFunc =()=>{
          setItem((oldVal)=>
          {
              return [...oldVal, OnchangeName];
              
              
          });
         setChangeName("");
    }
    const deleteFunc =(id)=>{
        setItem((oldVal)=>{
            return oldVal.filter((arrE,index)=>{
                return index!== id;

            })
        })
       
    }
return(
    <>
        <div className="toDoMainDiv">
            <div className="toDoCenterDiv">
                <br/>
                <h1 className="TodoHeading1">ToDo Lists</h1>
                <input className="toDoInput" type="text"
                value={OnchangeName} onChange={OnchangeFunc} placeholder="Add a Item"/>
                <button className="toDoBtn"onClick={ItemsAddFunc} >+</button>
                <ol className="TodoOl">
                    
                       {addItem.map((itemVal, index)=>{
                        return <ToDoApp key={index} id={index}
                        onselect={deleteFunc}
                         text={itemVal}/>
                        })
                        }
                </ol>
            </div>
        </div>
    </>
)
}
export default ToDoList;
