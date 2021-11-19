import React from "react";
import home1 from "../img/home1.png";

// Styled Components
import styled from "styled-components";


const AboutSection = () => {
    return(
        <StyledAbout>
            <div className="description">
                <div className="title">
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
                <img src={home1} alt="Professional cameraman" />
            </div>
        </StyledAbout>

    );

}

// styled components

const StyledAbout = styled.div`
    min-height: 90vh;
    background-color: black;
    color: white;
`;


export default AboutSection;