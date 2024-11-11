import react from "react";
import {BrowserRouter, Switch ,Route,NavLink, Redirect } from "react-router-dom";
import About from "../Website/About";
import Contact from "../Website/Contact";
import Services from "../Website/Services";
import Home from "../Website/Home";
import NavBar from "../Website/NavBar";
import Footer from "../Website/Footer";
 
const App = ()=> { 
return (
    <>
    <BrowserRouter>
    <NavBar/>
     <Switch>
         <Route exact path="/" component ={Home}/>
         <Route exact path="/About" component={About}/>
         <Route exact path="/Services" component={Services}/>
         <Route exact path="/Contact" component={Contact}/>
         <Redirect to="/"/>
         </Switch>
              <Footer/>
         </BrowserRouter>
    </>
);
}
export default App; 
