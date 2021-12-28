import React from "react";
import home1 from "../img/home1.png";

// Styled Components
// import styled from "styled-components";
import { StyledAbout, StyledDescription, StyledHide, StyledImg } from "../styles";

const AboutSection = () => {
    return(
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h1>We work to make</h1>
                    </StyledHide>
                    <StyledHide>
                        <h1>your <span>dreams</span> come</h1>
                    </StyledHide>
                    <StyledHide>
                        <h1>true</h1>
                    </StyledHide>
                    <p>Contact us for any photography ideas you have, we will make it happens.</p>
                    <button>Contact Us!</button>

                </div>
            </StyledDescription>
            <StyledImg>
                <img src={home1} alt="Professional cameraman" />
            </StyledImg>
        </StyledAbout>

    );

}

// styled components

export default AboutSection;