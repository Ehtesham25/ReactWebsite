import { render } from "@testing-library/react";
import React, {useState } from "react";

// function App (){
//     var list=['javascript','C#','ASP',
//     let [first, second, third, fourth]= list;
//     var num= console.log(firstsecond,third,fourth); 
//     return (
//         <div>
//            {console.log(num)};
//         </div>
//     );
          
// }

const App =()=>{
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

