import React from 'react';
import myInfoText from '../text/InfoPageText';
import Navbar from "../Components/Navbar/Navbar.js"

function Info(props) {
    return(
        <div>
            <Navbar/>
            <div style = {pageStyles}>
                <h1>Recycling</h1>
                <br/>
                <h2>Section 1</h2>
                <p>Text</p>
                <p>Text</p>
                <p>{myInfoText}</p>
                <h2>Section 2</h2>
                {/* <p>{text[1]}</p>
                <p>{text[2]}</p>
                <p>{text[3]}</p> */}
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
