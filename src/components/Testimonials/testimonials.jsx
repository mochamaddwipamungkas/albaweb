import React from "react";
import "./testimonials.css";

export default function Testimonials() {
    return (
        <section className="testimonials">
            <div className="container">
                <div className="testimonial">
                    <p>Testimonials</p>
                    <h1>What clients love in working</h1>
                    <h1>with Albatech Team</h1>
                    <div className="testimonial-txt">
                        <div className="testi2 ">
                            <h1>Amazing people</h1>
                            <p>"They are people who are not only following the tasks, but can work as a team. Together."</p>
                            <div className="profil">
                                <span></span>
                                <div>
                                    <p>Matthijs Piest</p>
                                    <p>COO at WieBetaaltWat</p>
                                </div>

                            </div>
                        </div>
                        <div className="testi1 ">
                            <h1>Amazing people</h1>
                            <p>""They are people who are not only following the tasks, but can work as a team. Together."</p>
                            <div className="profil">
                                <div>
                                    <p>Matthijs Piest</p>
                                    <p>COO at WieBetaaltWat</p>
                                </div>
                            </div>
                        </div>
                        <div className="testi1 ">
                            <h1>Amazing people</h1>
                            <p>""They are people who are not only following the tasks, but can work as a team. Together."</p>
                            <div className="profil">
                                <div>
                                    <p>Matthijs Piest</p>
                                    <p>COO at WieBetaaltWat</p>
                                </div>
                            </div>
                        </div>
                        <div className="testi2 txtb">
                            <h1>Partnership approach</h1>
                            <p>"We felt like we had a true partner throughout the process. They were clearly interested on our long-term success."</p>
                            <div className="profil">
                                <span></span>
                                <div>
                                    <p>Matthijs Piest</p>
                                    <p>COO at WieBetaaltWat</p>
                                </div>

                            </div>
                        </div>
                        <div className="testi1 txtc">
                            <h1>Amazing people</h1>
                            <p>""They are people who are not only following the tasks, but can work as a team. Together."</p>
                            <div className="profil">
                                <div>
                                    <p>Matthijs Piest</p>
                                    <p>COO at WieBetaaltWat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-img">
                        <div>
                            <img src="/assets/client/Rectangle 1931.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/client/Rectangle 1932.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/client/Rectangle 1933.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/client/Rectangle 1934.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/client/Rectangle 1935.png" alt="" />
                        </div>
                    </div>
                    <div className="slider">
                        <div className="circle selected"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <div className="testimonial-btn">
                        <p>Is software important for your business?</p>
                        <h1>Build it with Albatech</h1>
                        <a href="#consult">Consultation Now</a>
                    </div>
                </div>

            </div>
        </section>
    )
}
