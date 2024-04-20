import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

const Header = () => {
    const logoUrl = "https://learn.newtonschool.co/logo/NSLogo.svg";
    return <div className="container">
        <img className="logo" src={logoUrl} alt="logo"></img>
        <section className="header-subsection">
            <section className="header-options"><Link to="/">Home</Link></section>
            <section className="header-options"><Link to="/social">Social</Link></section>
            <section className="header-options"><Link to="/Library">Library</Link></section>
        </section>

        <input type="text" className="search" placeholder="search here"></input>

        <section className="header-subsection">
            <p className="header-options"><Link to="/Profile">Profile</Link></p>
        </section>
    </div>
}

export default Header;