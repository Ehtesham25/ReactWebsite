import react from "react";
import { NavLink } from "react-router-dom";


const Cards = (props)=>{
    return(
        <>
       
          <div className="col-md-4 mx-auto col-10">
          <div class="card" >
        <img src={props.imgsrc} class="card-img-top" alt="failed to load"/>
      <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
     </div>
</div>

          </div>
        </>
    );
}
export default Cards;