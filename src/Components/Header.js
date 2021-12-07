// Copyright 2021 Ben
import * as React from "react"
import LogoButton from "./LogoButton"

const Header = (props) => {
    return(
        <div style={headerStyle}>

            <div style = {contentContainer}>
                <LogoButton />
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default Header;

const headerStyle = {
    position: "sticky",
    color: "gray",
}

const contentContainer = {
    alignItems: "center",
}
