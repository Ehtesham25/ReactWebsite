import react, { useState } from "react";
import TodoApp from "./CompToDoLists";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const ToDoList =()=>{

    const[addItem, setItems]= useState([]);
    const[addItemsInList, setAddItemsInList] =useState([]);
      

    const onChangeFunc=(e)=>{
         setItems(e.target.value);
    }
    const AddItemsOnclick=()=>
    {
        setAddItemsInList((oldVal)=>{
            return [...oldVal, addItem];

        }); 
        setItems("");
    }
   
    const DeleteItems =(id)=>{
        setAddItemsInList((oldVal)=>{
          return oldVal.filter((arr, index)=>{
               return index!==id;
           });
          

       });

    }

    return(
        <div className="m-5">
            <><br/> <br/>
                <h1></h1>
                <input value={addItem} onChange={onChangeFunc} type ="text" style={{backgroundColor:'white',fontSize:'22px', margin:'10px'}} placeholder="Add an Item" className="input-group-lg"/>
                <AddShoppingCartIcon onClick={AddItemsOnclick} className="btn-group-lg btn-info" style={{fontSize:'22px'}}>+</AddShoppingCartIcon>
                <ul>
               { addItemsInList.map((val, index)=>{
                  return <TodoApp text ={val}
                      key={index}
                      id={index}
                      onselect={DeleteItems}
                  />                  
                })
               }
                </ul>
        </>
        </div>
    )
}

export default ToDoList;