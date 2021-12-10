//information page

import React from 'react';
import textArr from '../text/InfoPageText';
import Header from '../Components/Header/Header.js'
import Footer from "../Components/Footer/Footer.js"

function Info(props) {
    return(
        <div>
            <Header/>

            <div style = {pageStyles}>
    
                <h1>General Recycling Information</h1>
                <br/>
                <h2>{textArr[0]}</h2>
                <p>{textArr[1]}</p>
                <br/>
                <h2>{textArr[2]}</h2>
                <p>{textArr[3]}</p>
                <p>{textArr[4]}</p>
                <p>{textArr[5]}</p>
                <p>{textArr[6]}</p>
                <p>{textArr[7]}</p>
                <p>{textArr[8]}</p>
                <p>{textArr[9]}</p>
                <p>{textArr[10]}</p>
                <p>{textArr[11]}</p>
                <p>{textArr[12]}</p>
                <p>{textArr[13]}</p>
                <p>{textArr[14]}</p>
                <p>{textArr[15]}</p>
                <p>{textArr[16]}</p>
                <p>{textArr[17]}</p>
                <p>{textArr[18]}</p>
                <p>{textArr[19]}</p>
                <p>{textArr[20]}</p>
                <p>{textArr[21]}</p>
                <p>{textArr[22]}</p>
                <p>{textArr[23]}</p>
                <p>{textArr[24]}</p>
                <p>{textArr[25]}</p>
                <p>{textArr[26]}</p>
                <p>{textArr[27]}</p>
                <br/>
                <h2>{textArr[28]}</h2>
                <p>{textArr[29]}</p>
                <br/><br/><br/><br/><br/>
            </div>

            <Footer/>
        </div>
    );
}

export default Info;

// styles
const pageStyles = {
    color: "darkgreen",
    height: 500,
    width: "60%",
    marginTop: "5%",
    marginLeft: "20%",
    fontFamily: "-apple-system, Monserat, sans-serif, serif",
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
