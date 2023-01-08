import React from "react";
import "./portfolio.css"

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolios">
            <div className="container">
                <div className="portfolio">
                    <p>Portfolio</p>
                    <h1>The software that we build </h1>
                    <h1>takes our clients to the next level</h1>
                    <div className="cardsPortfolio">
                        <div className="cardPortfolio">
                            <img src="/assets/imgPortfolio.png" alt="" />
                            <div className="cardPortfolio-txt">
                                <span>Mobile apps</span>
                                <h1>ILIOS app (B2B E-commerce)</h1>
                                <p>Has a unique selling point where not all companies offer applications for sales, data collection and management.</p>
                            </div>
                        </div>
                        <div className="cardPortfolio">
                            <img src="/assets/imgPortfolio.png" alt="" />
                            <div className="cardPortfolio-txt">
                                <span>Website development</span>
                                <h1>Home and Living</h1>
                                <p>Albatech helps in creating a website catalog to show brand identity and information in accordance with vision and mission of Home and Living.</p>
                            </div>

                        </div>
                        <div className="cardPortfolio">
                            <img src="/assets/imgPortfolio.png" alt="" />
                            <div className="cardPortfolio-txt">
                                <span>Website Development</span>
                                <h1>HIPPO</h1>
                                <p>Albatech help to create e-commerce and company profile for Hippo's Wbsite with realtime transaction and integration with Payment Gateway to accept multi payment.</p>
                            </div>

                        </div>
                    </div>
                    <div className="learnmore">
                        <a href="#learnmore">Learn More</a>
                    </div>

                </div>
            </div>
        </section>
    )
}