import React from "react";
import {
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    @2023 Dibakar Bera
                </div>
                <div className="socialIcons">
                    <span  className="icon">
                    <a href="https://github.com/dibakarbera01" >
                        <FaGithub/>
                        </a>   
                    </span>
                    <span className="icon" >
                    <a href="https://www.linkedin.com/in/dibakar-bera-1b85231b5" >
                        <FaLinkedin />
                    </a>    
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
