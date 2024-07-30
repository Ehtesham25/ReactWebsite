import react,{useState} from "react";

const LogForm =()=>{

 

    const[SubValue, setPassField]= useState({
        fName:'',
        password: '',
        email:''
    });
   //const[submitPass, setSubmitPass]= useState();
    
    const FieldChangeFunc=(e)=>{
       var name= e.target.name;
       var value= e.target.value;
       console.log(name.fName);

       setPassField((preval)=>{
           if(name==='fName')
           {
          return {
              fName: value,
              password : preval.password,
              email: preval.email
              
          };
        }
          else if(name==='password')
          {
              return {
                  fName: preval.fName,
                  password: value,
                  email: preval.email
              }
          }
          else if(name==='email')
          {
              return {
                fName: preval.fName,
                password: preval.password,
                email: value

              }
          }
       })


    }
    // const passFieldChangeFunc=(e)=>{
    //     setPassField(e.target.value);

    // }

    // const submitFunc =()=>{
    //     setSubmitName(nameField);
    //     setSubmitPass(passField);

    // }
    const submitFunc =(e)=>{
        e.preventDefault();
    }
    return(
        <>
       <form onSubmit={submitFunc} className="m-5">
       <div>
        <h1>Hello, {SubValue.fName} {SubValue.password} </h1>
                 <p>{SubValue.email}</p>
           <input name='fName' value={SubValue.fName}  onChange={FieldChangeFunc} style={{backgroundColor:"white", fontSize:'20px'}} placeholder="Enter your Name" type="text"/> <br/> <br/>
           <input name='password' value={SubValue.password}  onChange={FieldChangeFunc} style={{backgroundColor:"white", fontSize:'20px'}} placeholder="Enter your Password" type="text"/><br/><br/>
           <input name='email' value={SubValue.email}  onChange={FieldChangeFunc} style={{backgroundColor:"white", fontSize:'20px'}} placeholder="Enter your email" type="text"/>
           <br/><br/>
           <button  className=" btn btn-success">Submit</button>
        </div>
       </form>

        </>
    );
}
export default  LogForm;
