import React from "react";
import styled from 'styled-components'

//creates the welcome section on the home page

const WelcomeSection = () => {
    return (
        <Wrapper>
            <Title>
                <h1>Welcome to Recycle Nashville!</h1>
                <p>
                    We want to teach you something new about recycling.
                </p>
                <br/>
                <p>
                    To visit our information page click "Learn about recylcling".
                </p>
                <p>
                    Confident in your knowledge? Prove it, take our quiz at "Recylcing quiz".
                </p>
                <p>
                    If you are looking to find a recycling center near you, go to "Find me a recycling center"
                </p>
            </Title>
        </Wrapper>
    )
}

export default WelcomeSection;
const Title = styled.h1`
    font-size: 0.05 em;
    text-align:center;
    color: black;
`

const Wrapper = styled.section`
    padding: 4em;
    background: white;
    
`
