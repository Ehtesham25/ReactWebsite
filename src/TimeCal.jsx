
import react, {useState} from "react";

const App =()=>{
var GetDate= new Date().toLocaleTimeString()
 const [gDate, setDate] = useState(GetDate);

 // function of Date 
 const DateFunc=()=> {
    var GetDate= new Date().toLocaleTimeString();
    setDate(GetDate);

 }
setInterval(DateFunc, 1000);

return(
    <>
        <h1>{gDate}</h1>
    <button className="btn btn-success">Get Time</button>
    </>
);
}
export default App;
