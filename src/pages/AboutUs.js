//about us page - who we are and why we made this website

import React from 'react';
import Header from "../Components/Header/Header.js"
import Footer from "../Components/Footer/Footer.js"

function Info(props) {
    return(
        <div style={{fontFamily: "Trebuchet MS, sans-serif, serif"}}>
            <Header/>
            
            <div style = {pageStyles}>
                <h1>About Us</h1>
                <br/>
                <h2>Our names are Ben Gant, Rachel Lee, and Rachel Simkovic and this project is part of our CS 3891 Special Topics - Computing and the Environment class at Vanderbilt University. We were tasked with finding some way to use technology towards sustainability goals and decided we would create a website aimed at informing about and encouraging the act of recycling. Our hope is that the information on this website will help clear up misconceptions about recycling and therefore allow people to become more effective recyclers. </h2>
                <br/>
                <h2>Recycling is something that is very easy to do, but it is also very easy to mess up. Once given proper information good recycling habits can be formed and then are easy to maintain. </h2>
                <br/><br/><br/>
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
