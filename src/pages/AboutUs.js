import React from 'react';
import Navbar from "../Components/Navbar/Navbar.js"

function Info(props) {
    return(
        <div>
            <Navbar/>
            
            <div style = {pageStyles}>
                <h1>About Us</h1>
                <br/>
                <h2>Section 1</h2>
                <p>This is a group project for CS 3281 - Computing and the Environment. Created by Ben Gant, Rachel Lee, and Rachel Simkovic.</p>
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
    fontFamily: "Montserrat, sans-serif",
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
