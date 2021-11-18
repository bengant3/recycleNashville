// Copyright 2021 Ben
import * as React from "react"

class LogoButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <button 
                //style={this.state.hovered ? hpButton : hpButtonHovered}
                onMouseOver ={() => this.setState({ hovered: true })}
                onMouseOut={() => this.setState({ hovered: false })}
                onClick={() =>  window.location.href='/'}>
                <div>
                    <img 
                        src = {"https://raw.githubusercontent.com/bengant3/recycleNashville/main/src/images/recycleNashvilleLogo_45deg.png"} 
                        alt = {"Recycle Nashville Logo"}
                        height="80"/>
                </div>
            </button>
        )
    }
}

export default LogoButton;