import React from "react";
import { StyledAbout } from "../styles";
import styled from "styled-components";


const FaqSection = () => {
    return(
        <StyledFAQ>
            <h2><span>FAQ</span> | Questions</h2>
            <div className="question">
                <h4>How do I start?</h4>
                <div className="answer">
                   <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, soluta.</p>
                </div>
            </div>
            <div className="faq-line"></div>

            <div className="question">
                <h4>Daily shedule?</h4>
                <div className="answer">
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, soluta.</p>
                </div>
            </div>
            <div className="faq-line"></div>

            <div className="question">
                <h4>Payment methods?</h4>
                <div className="answer">
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, soluta.</p>
                </div>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h4>What projects do you offer?</h4>
                <div className="answer">
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, soluta.</p>
                </div>
            </div>
        </StyledFAQ>


    )

}
const StyledFAQ = styled(StyledAbout)`
    display: block;
    span{
        /* display: block; */
    }
    h2{
        padding-bottom: 2rem;
        font-weight: 500;
    }
    .faq-line{
        background: #b3b3b357;
        height: .1rem;
        margin: 2rem;
        width: 100%auto;
    }
    .question{
        padding: 1rem 0;
        cursor: pointer
    }
    .answer{

        padding: 1rem 0;
        p{
            padding: 1rem 0;
            font-weight: 200;
        }
    }
    
`;

export default FaqSection;