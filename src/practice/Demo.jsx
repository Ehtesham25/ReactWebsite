import React from "react";

const Demo =()=>{

    const date= new Date().toLocaleDateString();
    const curTime= new Date().toLocaleTimeString();
    return(
        <>
        <h1>top 5 Netflix series</h1>
        <ol>
            <li>movies 1</li>
            <li>movies 2</li>
            <li>movies 3</li>
            <li>movies 4</li>
            <li>movies 5</li>
        </ol>
        <h2>Today: {date}</h2>
        <h3>Pakistan Standred Time  {curTime}</h3>
        </>
    );
}
export default Demo;