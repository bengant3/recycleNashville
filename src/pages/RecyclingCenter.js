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
                        <div>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d51550.22567721737!2d-86.83825542896554!3d36.14491330516062!3m2!1i1024!2i768!4f13.1!2m1!1srecycling%20centers!5e0!3m2!1sen!2sus!4v1639178453922!5m2!1sen!2sus"
                            style = {{width: 600, height: 450, border: 0}}
                            allowfullscreen="" loading="lazy"></iframe>
                        </div>
            
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
    fontFamily: "Trebuchet MS, sans-serif, serif",
}