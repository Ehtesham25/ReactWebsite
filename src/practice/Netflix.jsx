import sdata from "../practice/sdata";

const Netflix =()=>{

    const WebSer =(props)=>{
        return(
            <>
      
        <div className="cards">
            <div className="card">
            <img src={props.imgsrc} className="Card_image" alt="failed to load"/>
            <div className="card_Info" >
            <span className="card_catagory">{props.Website}</span>
            <h3 className="card_title">{props.movieName}</h3>
            <button className="button2">Watch Now</button>

            </div>

            </div>
        </div>
        </>
        );
    }

    return (
        <>
         <h1 className="heading_Style">Top 5 Netflix Series in 2020 </h1>        
         {sdata.map((val, id)=>{
           console.log(val.Website);
            return (
            <WebSer key={id}
            imgsrc ={val.imgsrc}
            Website={val.Website}
            movieName={val.movieName}
          
        />
          )       
             })

             }     
        </>
    );      
}
export default Netflix;
