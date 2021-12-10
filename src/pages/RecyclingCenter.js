//recycling locator page

import React from 'react';
import Header from "../Components/Header/Header.js"
import Footer from "../Components/Footer/Footer.js"

function Info(props) {
    return (
        <main>
            <div>
                    <Header/>
                    <div style = {pageStyles}>
                        <br/>
                        <h1>Find a Recycling Center</h1>
                        <p>
                        <a href="https://goo.gl/maps/pSnrZYaxHCyqeCf39">Get directions to a center near you!</a>
                        </p>
            
                        <br/>
                    </div>
                    <Footer/>

                    
            </div>
        </main>

    );
}

export default Info;

//styles
const pageStyles = {
    color: "black",
    height: 500,
    width: "60%",
    marginTop: "5%",
    marginBottom: "10%",
    marginLeft: "20%",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}