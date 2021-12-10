//creates the header

import React, {Component} from 'react';
import {HeaderElements} from "./HeaderElements"
import './Header.css'

class Header extends React.Component {
    render() {
        return(
            <nav className="HeaderItems">
                <h1 className="Header-logo">
                        <img 
                            src = {"https://raw.githubusercontent.com/bengant3/recycleNashville/main/src/images/logo%26Text.png"}
                            alt = {"Recycle Nashville Logo"}
                            height="60"
                            onClick={() =>  window.location.href='/'}/>
                </h1>

                <ul className="nav-menu">
                    {HeaderElements.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                
            </nav>
        )
    }
}

export default Header