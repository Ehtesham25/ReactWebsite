import FastfoodIcon from '@material-ui/icons/Fastfood';

const Header =(props)=>{

    return(
        <>
        
          <div className="jumbotron">
          <h1 className="display-1 main_head"> <i><FastfoodIcon/></i>Food Recipe </h1>
          <div className="input-group mb-3 w-50 mx-auto">
  <input required type="text" className="form-control header_input" value={props.search} onChange={props.func} placeholder="Search your favorite Recipe..."  aria-describedby="basic-addon2"/>
  <div className="input-group-append">
   <button onClick={props.Onclikcfunc} className="btn-dark btn-lg btn">SearchFood</button>
  </div>
</div>
    </div>        

        </>
    )
}
export default Header;
