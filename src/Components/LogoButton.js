// Copyright 2021 Ben - not currently in use
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
                        src = {"https://raw.githubusercontent.com/bengant3/recycleNashville/main/src/images/logo%26Text.png"}
                        alt = {"Recycle Nashville Logo"}
                        height="100"/>
                </div>
            </button>
        )
    }
}

export default LogoButton;