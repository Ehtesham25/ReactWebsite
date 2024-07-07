import React, {useState, useEffect} from "react";
import axios from "axios";

import Header from "./Header";
import Recipe from "./Recipe_data";

const App =()=>{
    const[search, setSearch]= useState("");
    const[Recipe, setRecipe]= useState([]);

    const APP_ID= '5fdb37bd';
    const APP_KEY= 'e9bcf6f49e53ec1b73b09578b10ad185';
    
    const GetRecipes = async()  =>{
        const res= await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            //console.log(res);
            setRecipe(res.data.hits);

    }
     useEffect(()=>{
     GetRecipes()},[]);
     const Onclikcfunc =()=>{
         GetRecipes();
     }

  const inputchangefunc =(e)=>{
    console.log(e.target.value);
    setSearch(e.target.value);
  }
    return(
        <>
            <Header func={inputchangefunc} Onclikcfunc={Onclikcfunc} search={search}/>
           <div className="container">
          <Recipe respi={Recipe}/>
           
           </div>
        </>
    );
}
export default App;
