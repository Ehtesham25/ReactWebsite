import React, {useState} from "react";

const App =()=>
{
    const [FullName, SetName]= useState({
        fname:" ",
        lname:" "
    });

   const ChangeEventFunc =(e)=>{
    var value= e.target.value;
    var name= e.target.name;
    console.log(name);

    SetName((prevValue)=>{
        if(name==="lName")
        {
            return {
            lname : prevValue.lname,
            fname : value
            };
        }
        else if(name==="fName")
        {
            return {
                lname : value,
                fname : prevValue.fname
          
            };
        }
    });
 };
// const ChangeEventFunctwo =(e)=>{
//         Setlname(e.target.value);

// };
// function SubmitFunc(e){
// //     e.preventDefault();
// //     SetFullName(fname);
// //     SetLastName(lname);
// }

    return(
        <>
        <form>
        <div className="formdiv">
       <h1 className="formheading">Hello, {FullName.lname} {FullName.fname}</h1>
        <input className="forminput" onChange={ChangeEventFunc} type ="text" 
         name="fName" placeholder="Enter Your Name"/>
        <input className="forminput" onChange={ChangeEventFunc} type ="text" 
         name="lName" placeholder="Enter Your Password"/>
      <button className="formbtn" >Click me</button> 
       </div>

        </form>
       
        </>
    );
}
export default App;
