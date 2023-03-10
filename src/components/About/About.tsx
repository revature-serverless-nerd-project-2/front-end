import React from "react";
import './About.css';

export function AboutUs() {
    return(
        <><main><div className="about-section">
            <h1>About Us</h1>
            <p>We are a small business who strive to help match our customers with their tech needs!</p>
            <p>We are a new to online and we want to try to reach as many people as possible and build great relationships with everyone with our products.</p>
        </div><h2 className="header">Our Team</h2><div className="row">
                <div className="column">
                    <div className="card">
                        <img src="/w3images/team1.jpg" alt="Jane"/>
                            <div className="container">
                                <h2>Jane Doe</h2>
                                <p className="title">CEO & Founder</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>jane@example.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="/w3images/team2.jpg" alt="Mike"/>
                            <div className="container">
                                <h2>Mike Ross</h2>
                                <p className="title">Art Director</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>mike@example.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="/w3images/team3.jpg" alt="John"/>
                            <div className="container">
                                <h2>John Doe</h2>
                                <p className="title">Designer</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>john@example.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                </div>
            </div></main></>
)}