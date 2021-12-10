//home page of the website

import React, { useState } from "react"
import Header from "../Components/Header/Header.js"
import Footer from "../Components/Footer/Footer"
import WelcomeSection from "../Components/WelcomeSection/welcome"

//creates one of the buttons on the home page
const HomePageButton = ({image, alt, label, clickDest}) => {
    const [hovered, setHovered] = useState(false);
    const [dest, setDest] = useState(clickDest);
    return (
        <button 
            style={hovered ? hpButton : hpButtonHovered}
            onMouseOver ={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            onClick={() =>  window.location.href='/'+clickDest}>
            <div style = {hpButtonContent}>
                <img 
                    src = {image} 
                    alt = {alt}
                    width="100" height="100"/>
                <text
                    style = {hpButtonText}>
                    {label}
                </text>
            </div>
        </button>
    )
}

const IndexPage = () => {
    return (
        <main >
            <div className='header'>
                    <Header/>
            </div>

            <title>Home Page</title>
            
            <div style={pageStyles}>
                <div className='Welcome-Text'>
                    <WelcomeSection/>
                </div>
                
                <div style={buttonContainer}>
                    <HomePageButton
                        label="Learn about recycling"
                        image="https://raw.githubusercontent.com/bengant3/recyclingWebsite/main/src/images/recycle.png"
                        alt="Recycling Logo"
                        clickDest="Information"
                        />
                    <HomePageButton
                        label="Recycling Quiz"
                        image="https://raw.githubusercontent.com/bengant3/recyclingWebsite/main/src/images/clipboard.png"
                        alt="Quiz Logo"
                        clickDest="Quiz"
                        />
                    <HomePageButton
                        label="Find me a Recycling Center"
                        image="https://raw.githubusercontent.com/bengant3/recyclingWebsite/main/src/images/location.png"
                        alt="Location Logo"
                        clickDest="RecyclingCenter"

                        />

                        <p style={spacer}>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>.
                        </p>
                </div>

                
            </div>

            <div>
                <Footer/>
            </div>
        </main>
    )
}

export default IndexPage

/** TO DO
 * Add header with back button functionality
 * Add introduction, about section?
 *
 * */


/** STYLE TO DO
 * Add margins
 * coherent color scheme - i guess something with green
 * Make buttons justified, same size, and with space between
 * Make buttons change when hover
 *
 *
 */



// styles
const pageStyles = {
    color: "black",
    height: 500,
    width: "80%",
    marginTop: "0%",
    marginLeft: "10%",
    marginBottom: "25%",
    fontFamily: "Trebuchet MS, sans-serif, serif",
}

const buttonContainer = {
    display: "flex",
    height: "40%",
    justifyContent: "spaceBetween",
    alignContent: "stretch",
}

const hpButton = {
    color: "lightgray",
    border: 10,
    borderRadius: 20,
    flexGrow: 1,
    flexBasis: 1,
    margin: 10,
    fontFamily: "Trebuchet MS, sans-serif, serif"
    //height: 400,
}

const hpButtonHovered = {
    color: "gray",
    border: 10,
    borderRadius: 20,
    flexGrow: 1,
    flexBasis: 1,
    margin: 10,
    fontFamily: "Trebuchet MS, sans-serif, serif"
    //height: 400,
}

const hpButtonContent = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "spaceBetween",
}

const hpButtonText = {
    fontSize: 18,
    color: "black",
}

const headerButtons = {
    fontsize: 22,
    color: "gray",
    alignItems: "right",
}

const spacer = {
    color: "white"
}

// Recycling, recycling paper, clipboard icons made by Freepik from www.flaticon.com
// Location, Apple icons made by Good Ware from www.flaticon.com
