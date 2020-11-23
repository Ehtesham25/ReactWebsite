import react, { useState } from "react";

const Contact = ()=>{

    const[data, setData]= useState({
        name:'',
        city :'',
        contact :'',
        email:'',
        message :''

    });
    const inputEventFunc =(e)=>{
        const{name, value}= e.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value
            }
        })

    }
    const onSubmitFunc =(e)=>{
           e.preventDefault();
           alert(`My Name is ${data.name} My contact Number ${data.contact}`);
           console.log(data.name);
    }


    return(
    <>
       
       <div className='my-5'>
       <h2 className="text-center">Contact us</h2>
       <div className="container">
       <div className="row">
       <div className="col-md-6 col-10 mx-auto">
       <form onSubmit={onSubmitFunc}>
  <div className="mb-3">
    <label >Full Name</label>
    <input autoComplete="off"  type="text" value={data.name} name="name" onChange={inputEventFunc} className="form-control" placeholder="Enter Your name" />
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="mb-3">
    <label >City</label>
    <input autoComplete="off" type="text" value={data.city} name="city" onChange={inputEventFunc}  placeholder="Enter your City" className="form-control" />
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="mb-3">
    <label >Contact </label>
    <input autoComplete="off" type="number" value={data.contact} name="contact" onChange={inputEventFunc}  placeholder="Phone Number" className="form-control" />
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="mb-3">
    <label >Email </label>
    <input autoComplete="off" type="email" value={data.email} name="email" onChange={inputEventFunc}  placeholder="example@abc.com" className="form-control" />
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  
  <div className="mb-3">
    <label >Your message</label>
    <textarea autoComplete="off" type="textarea" value={data.message} name="mesage" onChange={inputEventFunc}  className="form-control" /> 
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  
 
  <button type="submit" className="btn btn-outline-primary btn-block">Submit</button>
</form>

       </div>
       </div>         
       </div>
 

     


       </div>
    </>

)
}
export default Contact;