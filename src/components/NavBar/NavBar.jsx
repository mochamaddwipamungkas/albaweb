import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

export default function NavBar() {
    const [ul_class, setUlClass] = useState("menu-list unclicked")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const updateNav = () => {
        if (!isMenuClicked) {
            setUlClass("menu-list clicked")

        }
        else {
            setUlClass("menu-list unclicked")

        }
        setIsMenuClicked(!isMenuClicked)
    }
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navigasi">
                    <div className="logo">
                        <img src="/assets/alba-logo.png" alt="logo" />
                    </div>
                    <ul className={ul_class}>
                        <li><a href="#service">Service</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portofolio</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#career">Career</a></li>
                        <li className="menu-login"><a href="login">Login</a></li>
                    </ul>
                    <div className="menu-contact">
                        <Link to="login"> <p>Login</p> </Link>
                    </div>
                    <div className="menu-toggle" onClick={updateNav}>
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </div>

        </nav>
    )
}