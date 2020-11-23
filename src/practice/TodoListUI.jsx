import react, { useState } from "react";
import ToDoListsUIComp from  "../practice/toDolistsUIComp";


const ToDoListUI = ()=>{

    const[onChangeItems, setChangeItems]= useState();
    const[ addedItems, setAddedItems]= useState([]);
    const onChangeItemsFunc =(e)=>{
       // console.log(e.target.value);
        setChangeItems(e.target.value);

    }
    const addedItemFunc =()=>{
    setAddedItems((oldVal)=>{
        return [...oldVal, onChangeItems];
    });
    setChangeItems("");
    }
    const deletefunc =(id)=>{
        setAddedItems((oldVal)=>{
           return oldVal.filter((arr, index)=>{
               return  index!== id;

            })
        })
    }

    return(
        <>
       <div className="toDoMainDiv">
          <div className="toDoCenterDiv">
          <br/>
           <h1 className="TodoHeading1">To Do List</h1>
           <br/>
           <input className="toDoInput" value={onChangeItems} onChange={onChangeItemsFunc} type ="text" placeholder="Add An Item"/>
          <button style={{width:'40px'}} onClick={addedItemFunc} >
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
       <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
       </svg>
          </button>
           <ol className="TodoOl">
            
          { addedItems.map((val, index)=>{
          return  <ToDoListsUIComp text ={val}
              key={index}
              id={index}
              onselect={deletefunc}
          />
           })
          }
           </ol>
          </div>
           
       </div>
       </>

    )
}
export default ToDoListUI;