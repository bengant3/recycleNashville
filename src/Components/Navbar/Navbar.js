import React, {Component} from 'react';
import {MenuItems} from "./MenuItems"
import './Navbar.css'

class Navbar extends React.Component {
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                        <img 
                            src = {"https://raw.githubusercontent.com/bengant3/recycleNashville/main/src/images/logo%26Text.png"}
                            alt = {"Recycle Nashville Logo"}
                            height="60"
                            onClick={() =>  window.location.href='/'}/>
                </h1>

                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
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

export default Navbar