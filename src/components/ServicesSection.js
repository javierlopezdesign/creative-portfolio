import React from "react";
import home2 from "../img/home2.png";
// Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

import { StyledAbout, StyledDescription, StyledHide, StyledImg } from "../styles";
import styled from "styled-components";


const AboutSection = () => {
    return(
        <StyledServices>
            <StyledDescription>
                <h2>High <span>quality</span> services</h2>
                <StyledCards>
                    
                    <StyledCard>
                        <div className="icon">
                            <img src={clock} alt="Clock" />
                            <h3>Efficience</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={diaphragm} alt="Diaphragm" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={teamwork} alt="Teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </StyledCard>
                </StyledCards>
            </StyledDescription>
            <StyledImg>
            <img src={home2} alt="Camera" />
            </StyledImg>
        </StyledServices>


    )
};

const StyledServices = styled(StyledAbout)`
    h2{
        font-weight: 500
        padding-bottom:3rem;
    }
    p{
        width: 70%;
        padding: 2rem 0 4rem 0;
    }

`;
const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;


`;

const StyledCard = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
        img{
            width: 40px;
        }
        h3{
            padding-left: 1rem
        }
    }

`;

export default AboutSection;