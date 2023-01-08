import React from "react";
import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-in">
                    <div className="footer-img">
                        <img src="/assets/alba-logo.png" alt="" />
                        <p>Albatech acts as a corporate partner to help digitize their business to accelerate trends in remote work.</p>
                    </div>
                    <div className="footer-web">
                        <h3>Website</h3>
                        <ul>
                            <li><a href="#home">About</a></li>
                            <li><a href="#services">Service</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#career">Career</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact</h3>
                        <p>The Prominence Blok 38D No.25 Jl. Jalur Sutera Barat, Alam Sutera, Kota Tangerang, Banten 15143</p>
                        <p>Phone : +62 81 1889 3383</p>
                        <p>Email : info@albatech.id</p>
                    </div>
                </div>
                <div className="wa">
                    <img src="assets/wa-icon.png" alt="" />
                </div>
            </div>
        </footer>
    )
}