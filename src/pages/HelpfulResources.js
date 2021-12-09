import React from 'react';
import Navbar from "../Components/Navbar/Navbar.js"

function Info(props) {
    return(
        <div>
            <Navbar/>
            
            <div style = {pageStyles}>
                
                <h1>Helpful Resources</h1>
                <p>If you want to find more information about recycling in Nashville, we found the following sources helpful.</p>
                <br/>
                <h2>
                    <a href="https://wpln.org/post/curious-nashville-happens-wrong-stuff-gets-recycling-bin/#stream/0">Curious Nashville: What Happens When The Wrong Stuff Gets In the Recycling Bin?</a>
                </h2>
                <p>This 15 minute podcast has great information about the process of recycling an object, and what you can do to help your recyclables make it through.</p>
            </div>
        </div>
    );
}

export default Info;

// styles
const pageStyles = {
    color: "darkgreen",
    height: 500,
    width: "60%",
    marginTop: "10%",
    marginLeft: "20%",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const title= {
    color: "green",
    fontSize: 32,
};

const header= {
    color: "green",
    fontSize: 18,
};

const term = {
    color: "green"
}

const infoText= {
    color: "black",
};
