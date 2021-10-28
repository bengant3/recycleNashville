import * as React from "react"
//import ReactDOM from 'react-dom';
import Homepage from "./HomePage"

class HomePageButton extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     label: "My Button"
        // }
    }
    render() {
        return (
            <button style={mainButton}>
                <div style = {mainButtonContent}>
                    <img src = {this.props.image} width="100" height="100"/>
                    <text>{this.props.label}</text>
                </div>
            </button>
        )
    }
}

const IndexPage = () => {
    return (
        <main>
            <view style={pageStyles}>
                <title>Home Page</title>
                <h1>Recycling in Nashville</h1>
                <div style={buttonContainer}>
                    <HomePageButton
                        label={"Learn about recycling"}
                        image={"https://raw.githubusercontent.com/bengant3/recyclingWebsite/main/src/images/recycle.png"}/>
                    <HomePageButton
                        label={"Recycling Quiz"}
                        image={"https://raw.githubusercontent.com/bengant3/recyclingWebsite/main/src/images/clipboard.png"}/>
                    <HomePageButton
                        label={"Find me a Recycling Center"}
                        image={"https://raw.githubusercontent.com/bengant3/recyclingWebsite/main/src/images/location.png"}/>
                </div>
            </view>
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
    color: "#232129",
    //width: "60%",
    margin: "20%",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const buttonContainer = {
    display: "flex",
    justifyContent: "spaceBetween"
}

const mainButton = {
    color: "#fff",
    border: 3,
    borderRadius: 20,
}

const mainButtonContent = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}

// Recycling, recycling paper, clipboard icons made by Freepik from www.flaticon.com
// Location, Apple icons made by Good Ware from www.flaticon.com
