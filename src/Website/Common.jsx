const Common = (props)=>{
return(
    <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
        <div className ="row">
        <div className="col-11 mx-auto" >
        <div  className="row">
        
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
        <h1 >{props.text}<strong style={{color:'skyblue'}}> ORSTED</strong></h1>
        <h3 className="my-3">
            we are the team of talented develepor making websites.</h3>
            <div className="mt-3">
            <a href="#" className="btn-getStarted" >Get started</a>   </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 header-image">
            <img src={props.imgsr} className="img-responsive img-fluid animated img-thumbnail" alt="failed to load"/>
            </div>

        </div>
        </div>
        </div>
        </div>
        </section>
    </>

)
}
export default Common;
