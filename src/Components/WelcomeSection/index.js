import React from "react";
import styled from 'styled-components'

//creates the welcome section on the home page

const WelcomeSection = () => {
    return (
        <Wrapper>
            <Title>
                <h1>Welcome to Recycle Nashville!</h1>
                <p>
                    Description of website...
                </p>
            </Title>
        </Wrapper>
    )
}

export default WelcomeSection;
const Title = styled.h1`
    font-size: 1.5em;
    text-align:center;
    color: black;
`

const Wrapper = styled.section`
    padding: 4em;
    background: white;
    
`
