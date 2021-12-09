import React from 'react';
import textArr from '../text/InfoPageText';

function Info(props) {
    return(
        <div style = {pageStyles}>
            <h1>Recycling</h1>
            <br/>
            <h2>Section 1</h2>
            <p>{textArr[0]}</p>
            <p>Text</p>
            <p>hello</p>
            <h2>Section 2</h2>
            {/* <p>{text[1]}</p>
            <p>{text[2]}</p>
            <p>{text[3]}</p> */}
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
