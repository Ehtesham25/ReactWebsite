import react from "react";

const Caluclator =()=>{
    var num=40;
    var val=20;
     return(
         <div className="text-center m-5 text-danger">
        <>
        <h1>Sum of Two number is :{num+val}</h1>
        <h1>Sumbtraction of Two Number is : {num-val}</h1>
        <h1>Mulitplication of Two number is :{num* val}</h1>
        <h1>divison  of Two number is :{num / val}</h1>
        </>
        </div>

     );
}
export default Caluclator;