import React from "react";
import styled from 'styled-components'

//creates the welcome section on the home page

const WelcomeSection = () => {
    return (
        <Wrapper>
            <Title>
                <h1 style={titleStyle}>Welcome to Recycle Nashville!</h1>
                <p style={subHeading}>
                    We want to teach you something new about recycling.
                    <br/>
                </p>
                <br/>
                <p style={bodyStyle}>
                    To visit our information page click "Learn about recycling".
                    <br/><br/>
                    Confident in your knowledge? Prove it, take our quiz at "Recycling quiz".
                    <br/><br/>
                    If you are looking to find a recycling center near you, go to "Find me a recycling center"
                </p>
            </Title>
        </Wrapper>
    )
}

export default WelcomeSection;
const Title = styled.h1`
    text-align:center;
    color: black;
`

const Wrapper = styled.section`
    padding: 4em;
    background: white;
    
`
const titleStyle = {
    color: '#1eb84c'
}

const bodyStyle = {
    color: "gray",
    fontSize: 17
}

const subHeading = {
    color: "#6D6D6D"
}