import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <a className="anchor" href="/terms"><li className="menuItem">Terms Of Use</li></a>
                    <a className="anchor" href="/privacy"><li className="menuItem">Privacy-Policy</li></a>
                    <a className="anchor" href="/about"> <li className="menuItem">About</li></a>
                    <a className="anchor" href="/blog"><li className="menuItem">Blog</li></a>
                    <a className="anchor" href="/faq"><li className="menuItem">FAQ</li></a>
                </ul>
                <div className="infoText">
                RTXMovies brings you the latest and greatest movies, all in one place. From Hollywood blockbusters to independent gems, we have something for everyone. Browse our library of movies today and start watching!
                </div>
                <div className="infoText">
                RtxMovies India
                </div>
                <div className="socialIcons">
                    <a className="anchor" href="https://www.instagram.com/rtxhoney">
                    <span className="icon" >
                        <FaInstagram />
                    </span>
                    </a>
                    <a className="anchor" href="https://www.x.com/rtxhoney">
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    </a>
                    <a className="anchor" href="https://www.linkedin.com/in/rtxhoney">
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                    </a>
                   
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
