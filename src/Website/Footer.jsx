

const Footer = ()=>{

    const date = new Date().getFullYear();
    console.log(date);
    return(
        <>
            <div className="text-center">
                <h6 style={{fontFamily:'Calibri Light'}}>All right reserved &#169; {date}</h6>
            </div>
        </>
    );
}
export default Footer;
