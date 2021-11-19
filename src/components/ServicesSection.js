import React from "react";
import home2 from "../img/home2.png";
// Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";


const AboutSection = () => {
    return(
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="Clock" />
                            <h3>Efficience</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="Diaphragm" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="Teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <img src={home2} alt="Camera" />
            </div>


            {/* <div className="title">
                <div className="hide">
                    <h1>We work to make</h1>
                </div>
                <div className="hide">
                    <h1>your <span>dreams</span> come</h1>
                </div>
                <div className="hide">
                    <h1>true</h1>
                </div>
                <p>Contact us for any photography ideas you have, we will make it happens.</p>
                <button>Contact Us!</button>

            </div>
            <img src={home1} alt="Professional cameraman" /> */}
        </div>


    )

}

export default AboutSection;