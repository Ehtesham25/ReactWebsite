import { NavLink } from "react-router-dom";

import comsats from "../Website/images/comsats.jpg";

const NavBar =()=>{
return(
    <>
    <div className="container-fluid">
    <div className="row">
        <div className="col-11 mx-auto ">
        <nav className="navbar  navbar-expand-lg navbar-light bg-light">
        <img style={{width:'140px'}} className="img-responsive mt-4 img-fluid" src={comsats}/>
            {/* <a className="navbar-brand" href="#">{comsats}</a> */}
  <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link menu-active " to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link menu-active" to="/Services">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link menu-active" to="/About">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link menu-active" to="/Contact">Contact</NavLink>
      </li>
    </ul>
  </div>
</nav>

        </div>
    </div>

    </div>



    </>
);
}
export default NavBar;
