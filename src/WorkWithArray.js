import { render } from "@testing-library/react";
import react from "react";
import {useState,setState } from "react";

// function App (){
//     var list=['javascript','C#','ASP','HTML'];
//     let [first, second, third, fourth]= list;
//     var num= console.log(first,second,third,fourth); 
//     return (
//         <div>
//            {console.log(num)};
//         </div>
//     );
      
    
// }

const App =()=>{

//    const [count, SetCount]= useState(0);
//    const HanldeFunc =()=>
//    {
//        SetCount(count+1);
//    }


     const[date, SetCount]= useState(123);
     const TimeFunc =()=>
     {
          date= new date();
         SetCount(date)
     }



    return(
        <>
        <h4>{date}</h4>
        <button onClick={TimeFunc}>Click me</button>
    </>
    )
}
export default App;

