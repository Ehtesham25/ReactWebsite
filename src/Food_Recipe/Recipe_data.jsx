import React from "react";
 
const Recipe =(props)=>{
    return(
        <>
        <br/><br/>
     
        <div className="row">
        {
          props.respi.map((val, index)=>
          { return (
          <div className="col-md-4 g-4">
        <div className="card" style={{width: '18rem'}}>
   <img src={val.recipe.image} className="card-img-top img-fluid m-3 w-50 mx-auto" alt="..."/> 
  <div className="card-body">
    <h5 className="card-title">{val.recipe.label}</h5>  </div>
    <ul className="list-group list-group-flush">
       {val.recipe.ingredientLines.map((vale, index)=>{
          return <li className="list-group-item">{vale}</li>
         
       })}
      
    </ul>
    
  
</div>
     </div> 

          )
          })
        }
        
        </div>
        </>
    );
}
export default Recipe;
