// Copyright 2021 Ben
import * as React from "react"
import LogoButton from "./LogoButton"

const Header = (Title) => {
    return(
        <div style={headerStyle}>
            <div style = {contentContainer}>
                <LogoButton />
                <text>
                    {Title}
                </text>
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
