
class Greeting extends react.Component{
    render(){
       var wedingcard = new Date().getHours();
        var strGreeting= "";
        const cssStyle={     };

        if(wedingcard>=1 && wedingcard<12){
            strGreeting="Good Morning";
            cssStyle.color= 'green';
        }
        else if(wedingcard>=12 && wedingcard<=19)
        {
            strGreeting="Good aferNoon";
            cssStyle.color ="Orange";
        
        }
       else 
        {
            strGreeting="Good night";
            cssStyle.color="Black";
        }
        console.log(cssStyle.color);
        return(
            <div className='heading'>
            <h1>Hello Sir, <span style={cssStyle}> {strGreeting}</span></h1>
            <button className="btn btn-info"> Click me</button>
            </div>
        )
    }
}
export default Greeting;

