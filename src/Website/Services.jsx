import react from "react";

import Sdata from "../Website/Sdata";
import Cards from "../Website/Cards";

const Service = ()=>{ 
return(
    <>  <div className="container-fluid mb-5">
     <h1 className="text-center">Our Services</h1>
    <br/>
           <div className="row">
        <div className="col-10 mx-auto">
        <div className="row gy-4">
        {
          Sdata.map((val, index)=>{
           return  <Cards imgsrc={val.imgsrc} title={val.title} />

          })
        }

        </div>

        </div>
      </div>
    </div>
    
     </>

)
}
export default Service;
