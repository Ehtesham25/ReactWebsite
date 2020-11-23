import React, { useState } from "react";

 const Func =()=>
{
    const getHrs= new Date().getHours();
    var mesage= "";

        if(getHrs>1 & getHrs <=11)
        {
             mesage="Good Morning";
        }
        else if(getHrs>11 & getHrs <=19)
        {
            
             mesage="Good afterNoon";
        }
       else
        {
             mesage="Good night";
        }
        
    
   

    // challenge no 6 get date and time on button click..
    
    const getDate = new Date().toLocaleTimeString();

    const[cureDate, setDate]= useState();
    const getDatefunc =()=>{
     //const getDate = new Date().toLocaleTimeString();
      setDate(getDate);
    // console.log(getDate)

    }
     // setInterval(getDatefunc, 1000);
      //console.log(val);

      var[mesage, setMessage]= useState('Click me');
      const oneClickFunc =()=>{
           setMessage('OUCH!!');
      }
      const DbClickFunc =()=>{
           setMessage("Clicked Again!!");
      }


    return (
        <>
        {/* <h1 className="">Hello Sir, {mesage}</h1>
        <br/>
        <button className="btn-success">Click me</button> */}
        <div className="timeDiv">
             <h1>{getDate}</h1>
             <button onClick={getDatefunc} className="btn btn-success btn-lg text-center">Get Time</button>
             <br/>  <br/>
             <button onDoubleClick={DbClickFunc} onClick={oneClickFunc} className=" btn btn-info">{mesage} </button>
        </div>
         </>
    );
}
export default Func;