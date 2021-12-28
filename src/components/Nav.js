import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <StyledNav>
            <h1><Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li><Link to="/">1. About Us </Link></li>
                <li><Link to="/work">2. Our Work</Link></li>
                <li><Link to="/contact">3. Contact</Link></li>
            </ul>
        </StyledNav>

    );
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #1b1b1b;
    
    ul{
        display: flex;
   
        li{
            list-style: none;
            margin-left: 5rem;
            position: relative;
   
            a{
                text-decoration: none;
                color: white;
        
            }
        }
   
   
    }

    #logo{
        color: white;
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        text-decoration: none;
    }


`

export default Nav;