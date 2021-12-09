import * as React from "react"
//import ReactDOM from 'react-dom';
//import Homepage from "./HomePage"
import Header from "../Components/Header"
import Navbar from "../Components/Navbar/Navbar.js"

class HomePageButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hovered: false,
            pageDest: this.props.dest,
        }
    }
    render() {
        return (
            <button 
                style={this.state.hovered ? hpButton : hpButtonHovered}
                onMouseOver ={() => this.setState({ hovered: true })}
                onMouseOut={() => this.setState({ hovered: false })}
                onClick={() =>  window.location.href='/'+this.state.pageDest}>
                <div style = {hpButtonContent}>
                    <img 
                        src = {this.props.image} 
                        alt = {this.props.alt}
                        width="100" height="100"/>
                    <text
                        style = {hpButtonText}>
                        {this.props.label}
                    </text>
                </div>
            </button>
        )
    }
}

const IndexPage = () => {
    return (
        <main>
            <div className='header'>
                <div>
                    <Navbar/>
                </div>
            </div>

            <title>Home Page</title>

                <div style={welcome}>
                    
                </div>
            
            <div style={pageStyles}>
                <h1> Welcome to Recycle Nashville!</h1>
                <p1>Description of website...</p1>


                <div style={buttonContainer}>
                    <HomePageButton
                        label="Learn about recycling"
                        image="https://raw.githubusercontent.com/bengant3/recyclingWebsite/main/src/images/recycle.png"
                        alt="Recycling Logo"
                        dest="Information"
                        />
                    <HomePageButton
                        label="Recycling Quiz"
                        image="https://raw.githubusercontent.com/bengant3/recyclingWebsite/main/src/images/clipboard.png"
                        alt="Quiz Logo"
                        dest="Quiz"
                        />
                    <HomePageButton
                        label="Find me a Recycling Center"
                        image="https://raw.githubusercontent.com/bengant3/recyclingWebsite/main/src/images/location.png"
                        alt="Location Logo"
                        dest="RecyclingCenter"
                        />
                </div>
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
    color: "darkgreen",
    height: 500,
    width: "60%",
    marginTop: "10%",
    marginLeft: "20%",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const welcome = {
    alignContent: "center",
    color: "purple"
}

const buttonContainer = {
    display: "flex",
    height: "80%",
    justifyContent: "spaceBetween",
    alignContent: "stretch",
}

const hpButton = {
    color: "lightgray",
    border: 10,
    borderRadius: 20,
    flexGrow: 1,
    flexBasis: 1,
    //margin: 10,
    //height: 400,
}

const hpButtonHovered = {
    color: "gray",
    border: 10,
    borderRadius: 20,
    flexGrow: 1,
    flexBasis: 1,
    //margin: 10,
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

// Recycling, recycling paper, clipboard icons made by Freepik from www.flaticon.com
// Location, Apple icons made by Good Ware from www.flaticon.com
