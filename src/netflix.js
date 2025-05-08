const NetflixFunction =()=>{
    
    render()
    {
        const fname='Ehtesham ul haq';
        const currDate= new Date().toLocaleDateString();
        const currTime= new Date().toLocaleTimeString();
        return (
            <>
                <h1>netflix Series name</h1>
                <h3>List of 5 Best Series</h3>
                <ul>
                    <li>Dark</li>
                    <li>Extra Circullar</li>
                    <li>My holo love</li>
                    <li>Dil wale</li>
                    <li>mr robbot</li>
                </ul>
                <br/>
                <h1>Hello, My name is {fname}</h1>
                <h2>Today Data is : {currDate}</h2>
                <h2>Current Time is :{currTime}</h2>
            </>
        )
        
    }
}
export default NetflixFunction;


