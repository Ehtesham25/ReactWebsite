import React ,{useState} from "react";

const Challenges =()=>{
   const [Count, setCount] = useState(0);

const inrecmentFunc =()=>{
    setCount(Count+1);
}

const DecrementFunc =()=>{
    if(Count>0)
    {
        setCount(Count-1);
    }
    else {
        setCount(0);
        alert("Sorry, Zero limit reached!!!");
    }
}
    return(
        <>
            <h3>{Count}</h3>
        <button onClick={inrecmentFunc}>Increament</button>
        <br/><br/>
        <button onClick={DecrementFunc}>Decreament</button>
        </>
    );
}; 
export default Challenges;
