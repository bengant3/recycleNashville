/*
creates the footer section
*/

import React, {Component} from 'react';
import {FooterElements} from "./FooterElements"
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements';
import './Footer.css'

class Footer extends React.Component {
    render() {
        return(
            <nav className="FooterElements">
                <h1 className="footer-logo">
                        <img 
                            src = {"https://raw.githubusercontent.com/bengant3/recycleNashville/main/src/images/logo%26Text.png"}
                            alt = {"Recycle Nashville Logo"}
                            height="40"/>
                </h1>

                <ul className="footer-menu">
                    {FooterElements.map((item, index) => {
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

export default Footer
/*
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> RecycleNashville </FooterLinkTitle>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLink to="./"> Home </FooterLink>
                            <FooterLink to="Quiz"> Quiz </FooterLink>
                            <FooterLink to="Information"> Information </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default footer*/