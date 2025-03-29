import { render } from "@testing-library/react";
import React from "react";

import Sdata from "./sdata";
  
const CardFunc = () => {
    render() 
    { 
        function Webseries(props);
      
        {
            return(<>
                <div className="cards">
                    <div className="card">
                        <img src={props.imgsrc} alt="Failed to Load.." className="Card_image"/>
                        <div className="card_Info">
                        <span className="card_catagory">{props.title}</span>
                        <h3 className="card_title">{props.sname}</h3>
                        <a>
                            <button className="button">Watch Now</button>
                        </a>
                        </div>
                    </div>
                </div>
           </>
            );
         
    }
   
        return (<>
        <h1 className="heading_Style">List of Top 5 Netflix Series 2020</h1>
            <Webseries imgsrc= {Sdata[0].imgsrc}
             title={Sdata[0].title}
            sname={Sdata[0].sname}
             />
             <Webseries imgsrc={Sdata[1].imgsrc}
             title={Sdata[1].title}
            sname={Sdata[1].sname}
             />
             <Webseries imgsrc={Sdata[2].imgsrc}
             title={Sdata[2].title}
            sname={Sdata[2].sname}
             />
              <Webseries imgsrc={Sdata[3].imgsrc}
             title={Sdata[3].title}
            sname={Sdata[3].sname}
             />
              <Webseries imgsrc={Sdata[4].imgsrc}
             title={Sdata[4].title}
            sname={Sdata[4].sname}
             />
           
        </>)  
}
};
export default CardFunc;
